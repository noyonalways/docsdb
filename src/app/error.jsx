"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log(error);
  }, [error]);

  return (
    <div className="h-[30vh] flex items-center justify-center">
      <div className="text-center space-y-1">
        <h2>{error?.message || "Something went wrong!"}</h2>
        <button
          className="inline-flex justify-center rounded-lg bg-slate-900 dark:bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-500 mx-auto"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
