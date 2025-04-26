"use client";
import { getMarketplaceListingNftBySellerAction } from "@/_actions/marketplace.action";
import { DataTablePagination } from "@/components/data-table/data-pagination";
import { getMyMarketplaceCardColumns } from "@/components/data-table/nft-table/MyMarketplaceCardColumns";
import TableSkeleton from "@/components/data-table/TableSkeleton";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  flexRender,
  getCoreRowModel,
  PaginationState,
  useReactTable,
} from "@tanstack/react-table";
import { Settings } from "lucide-react";
import React, { useState } from "react";
type Props = {
  address: string;
};
const MyMarketplaceCard: React.FC<Props> = ({ address }) => {
  const [currency, setCurrency] = useState<"USD" | "SOL">("SOL");

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, isLoading } = useQuery({
    queryKey: ["get-my-marketplace-items", address, pagination.pageIndex],
    queryFn: async () =>
      getMarketplaceListingNftBySellerAction(address, pagination.pageIndex),
    placeholderData: keepPreviousData,
    enabled: !!address,
  });

  const table = useReactTable({
    data: data?.items || [],
    rowCount: data?.total_data || 0,
    columns: getMyMarketplaceCardColumns(currency),
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
  });

  const tableHeader = [
    "Species",
    "Address",
    "Project Developer",
    "Planting Date",
    "Height (m)",
    "Status",
    "Price",
  ];
  return (
    <div className="bg-muted/50 p-5 rounded-md">
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Marketplace</h1>

          <Button variant="ghost" size="icon">
            <Settings className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="w-[180px] bg-muted">
                <SelectValue placeholder="Species" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="species">Species</SelectItem>
                <SelectItem value="address">Address</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="secondary">Apply</Button>
          </div>
          <div className="flex gap-2">
            <Button
              variant={currency === "USD" ? "secondary" : "ghost"}
              onClick={() => setCurrency("USD")}
            >
              USD
            </Button>
            <Button
              variant={currency === "SOL" ? "secondary" : "ghost"}
              onClick={() => setCurrency("SOL")}
            >
              SOL
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-10">
        <div className="rounded-md border">
          {isLoading ? (
            <TableSkeleton headers={tableHeader} />
          ) : (
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={tableHeader.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </div>
        <DataTablePagination table={table} hidePageSize hideRowSelection />
      </div>
    </div>
  );
};

export default MyMarketplaceCard;
