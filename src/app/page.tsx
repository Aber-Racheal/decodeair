// src/app/page.tsx
"use client";

import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import ResultCard from "@/components/ResultCard";
import SearchHistory from "@/components/SearchHistory";

export default function Home() {
  const [searchResult, setSearchResult] = useState(null);
  

  return (
    <div className="flex flex-col items-center justify-start h-screen p-4">
      <div className="flex flex-col items-center w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          DecodeAir
        </h1>
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          Understand aviation codes like a pro.
        </p>

        <div className="w-full">
          <SearchBar onResult={setSearchResult} />
        </div>

        <div className="w-full my-4">
          <SearchHistory
            onSelect={(q) => {
              setSearchResult(null); // Clear current result
              document.querySelector("input")?.focus();
              const input = document.querySelector("input") as HTMLInputElement;
              if (input) {
                input.value = q;
                input.dispatchEvent(new Event("input", { bubbles: true }));
                input.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
              }
            }}
          />
        </div>

        <div className="w-full mt-4">
          {searchResult && <ResultCard data={searchResult} />}
        </div>
      </div>
    </div>
  );
}