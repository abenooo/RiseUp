"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };
  
  return (
    <form 
      onSubmit={handleSubmit}
      className="relative flex w-full rounded-full overflow-hidden border border-zinc-700 transition-all group focus-within:border-fuchsia-500 focus-within:ring-2 focus-within:ring-fuchsia-500/20"
    >
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none group-focus-within:text-fuchsia-400">
        <Search className="h-5 w-5" />
      </div>
      <input
        type="text"
        placeholder="Search by name, specialty, or issue..."
        className="flex-1 bg-zinc-900 text-white border-none focus:ring-0 focus:outline-none py-3 px-12 text-base placeholder:text-zinc-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button 
        type="submit"
        className="absolute right-1 top-1 bottom-1 px-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-full text-sm font-medium"
      >
        Search
      </Button>
    </form>
  );
}