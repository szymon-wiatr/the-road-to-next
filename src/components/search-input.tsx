"use client";

import { useDebouncedCallback } from "use-debounce";
import { useQueryState } from "nuqs";
import { Input } from "./ui/input";
import { searchParser } from "@/features/ticket/search-params";

type SearchInputProps = {
  placeholder: string;
};

const SearchInput = ({ placeholder }: SearchInputProps) => {
  const [search, setSearch] = useQueryState("search", searchParser);

  const handleSearch = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    250
  );

  return (
    <Input
      placeholder={placeholder}
      onChange={handleSearch}
      defaultValue={search}
    />
  );
};

export { SearchInput };
