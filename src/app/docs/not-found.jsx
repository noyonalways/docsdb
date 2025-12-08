import NotFound from "@/components/NotFound";

export const metadata = {
  title: "404 - Not Found",
};

const NotFoundPage = () => {
  return (
    <>
      <NotFound
        title="Document Not Found"
        message="Sorry, we couldn’t find the document you’re looking for."
      />
    </>
  );
};

export default NotFoundPage;
