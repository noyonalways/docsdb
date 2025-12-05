import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="lg:flex">
      <Link className="flex" href="/">
        <Image
          className="h-6 w-auto"
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={24}
          priority
        />
        <span className="font-bold text-zinc-900 dark:text-white">DocsDB</span>
      </Link>
    </div>
  );
};

export default Logo;
