"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { sortParser } from "@/features/ticket/search-params";
import { useQueryState } from "nuqs";

type Option = {
  label: string;
  value: string;
};

type SortSelectProps = {
  options: Option[];
};

const SortSelect = ({ options }: SortSelectProps) => {
  const [sort, setSort] = useQueryState("sort", sortParser);

  const handleSort = (value: string) => {
    setSort(value);
  };

  return (
    <Select defaultValue={sort} onValueChange={handleSort}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export { SortSelect };
