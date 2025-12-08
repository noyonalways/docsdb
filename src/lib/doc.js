import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";

const postsDirectory = path.join(process.cwd(), "src/docs");

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

export function getDocuments() {
  const allFiles = getAllFiles(postsDirectory);

  const allDocuments = allFiles.map((fullPath) => {
    const relativePath = path.relative(postsDirectory, fullPath);
    let id = relativePath.replace(/\.md$/, "").replace(/\\/g, "/");

    // Handle "folder/folder" pattern -> "folder"
    const parts = id.split("/");
    if (
      parts.length > 1 &&
      parts[parts.length - 1] === parts[parts.length - 2]
    ) {
      parts.pop();
      id = parts.join("/");
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    let parent = matterResult.data.parent;
    if (parent === undefined) {
      const parts = id.split("/");
      if (parts.length > 1) {
        parent = parts[parts.length - 2];
      }
    } else if (parent && !parent.includes("/")) {
      const parts = id.split("/");
      if (parts.length > 1) {
        const dir = parts.slice(0, -1).join("/");
        parent = `${dir}/${parent}`;

        // Normalize parent ID if it matches folder/folder pattern
        const pParts = parent.split("/");
        if (
          pParts.length > 1 &&
          pParts[pParts.length - 1] === pParts[pParts.length - 2]
        ) {
          pParts.pop();
          parent = pParts.join("/");
        }
      }
    }

    const isRoot =
      !id.includes("/") && (parent === null || parent === undefined);
    const folderLabel = isRoot
      ? id
          .split("/")
          .pop()
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase())
      : undefined;

    return {
      id,
      ...matterResult.data,
      parent,
      folderLabel,
    };
  });

  return allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
    return 0;
  });
}

export async function getDocumentContent(id) {
  let fullPath = path.join(postsDirectory, `${id}.md`);

  // Fallback 1: Check for folder/folder.md pattern (e.g. nextjs -> nextjs/nextjs.md)
  if (!fs.existsSync(fullPath)) {
    const folderDocPath = path.join(
      postsDirectory,
      id,
      `${path.basename(id)}.md`
    );
    if (fs.existsSync(folderDocPath)) {
      fullPath = folderDocPath;
    }
  }

  // Fallback 2: attempt flat structure
  if (!fs.existsSync(fullPath)) {
    const flatName = id.split("/").pop();
    const flatPath = path.join(postsDirectory, `${flatName}.md`);
    if (fs.existsSync(flatPath)) {
      fullPath = flatPath;
    } else {
      const err = new Error(`Document with id ${id} does not exist`);
      err.status = 404;
      throw err;
    }
  }

  // Read markdown file
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  // Convert markdown → HTML
  const processedContent = await remark()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true }) // allow raw HTML
    .use(rehypeRaw) // process raw HTML
    .use(rehypeStringify)
    .process(matterResult.content);

  return {
    id,
    contentHtml: processedContent.toString(),
    ...matterResult.data,
  };
}
