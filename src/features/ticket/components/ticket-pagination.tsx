"use client";

import { useQueryState, useQueryStates } from "nuqs";
import { Pagination } from "@/components/pagination";
import {
  paginationOptions,
  paginationParser,
  searchParser,
} from "../search-params";
import { useEffect, useRef } from "react";

type TicketPaginationProps = {
  count: number;
  hasNextPage: boolean;
};

const TicketPagination = ({
  paginatedTicketMetadata,
}: {
  paginatedTicketMetadata: TicketPaginationProps;
}) => {
  const [pagination, setPagination] = useQueryStates(
    paginationParser,
    paginationOptions
  );

  const [search] = useQueryState("search", searchParser);
  const prevSearch = useRef(search);

  useEffect(() => {
    if (search === prevSearch.current) return;
    prevSearch.current = search;

    setPagination({ ...pagination, page: 0 });
  }, [pagination, search, setPagination]);

  return (
    <Pagination
      pagination={pagination}
      onPagination={setPagination}
      paginatedMetadata={paginatedTicketMetadata}
    />
  );
};

export { TicketPagination };
