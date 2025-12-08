import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function NotFound({
  title = "Page Not Found",
  message = "Sorry, we couldn’t find the page you’re looking for.",
}) {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-9xl font-extrabold">404</h1>
        <h2 className="mt-4 text-3xl font-semibold">{title}</h2>
        <p className="mt-2 dark:text-slate-100">{message}</p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded hover:bg-emerald-700 transition space-x-2"
        >
          <span>Go back home</span>
          <ChevronRight className=" h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
