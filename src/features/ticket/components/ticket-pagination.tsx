"use client";

import { useQueryStates } from "nuqs";
import { Pagination } from "@/components/pagination";
import { paginationOptions, paginationParser } from "../search-params";

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
  return <Pagination pagination={pagination} onPagination={setPagination} paginatedMetadata={paginatedTicketMetadata} />;
};

export { TicketPagination };
