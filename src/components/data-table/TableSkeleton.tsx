import React from "react";
import { Skeleton } from "../ui/skeleton";
type Props = {
  headers: string[];
};
const TableSkeleton: React.FC<Props> = ({ headers }) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-left">
          {headers.map((header, index) => (
            <th key={index} className="py-2 px-4 font-medium text-gray-400">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(5)].map((_, index) => (
          <tr key={index} className="border-t border-gray-800">
            {headers.map((_, index) => {
              if (index === 0) {
                return (
                  <td className="py-4 px-4" key={index}>
                    <div className="flex items-center space-x-3">
                      <Skeleton className="h-10 w-10 rounded-md" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </td>
                );
              } else {
                return (
                  <td className="py-4 px-4" key={index}>
                    <Skeleton className="h-4 w-20" />
                  </td>
                );
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableSkeleton;
