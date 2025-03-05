import { Pagination, ScrollAreaAutosize, Table } from "@mantine/core";
import clsx from "clsx";
import { FC, ReactNode, useState } from "react";
import { AppSelect } from "../form/text_input";
import { PaginationDto } from "../../../core/model/pagination";
interface AppTablePaginationProps {
  title?: String;
  addBtn?: ReactNode;
  filter?: ReactNode;
  totalPage?: number;
  rows?: ReactNode[];
  query: PaginationDto;
  setQuery?: (
    statePartial:
      | Partial<PaginationDto>
      | ((currentState: PaginationDto) => Partial<PaginationDto>)
  ) => void;
  cols?: string[];
}
const AppTablePagination: FC<AppTablePaginationProps> = ({
  title,
  addBtn,
  cols,
  filter,
  totalPage,
  query,
  setQuery,
  rows,
}) => {
  const [scrolled, setScrolled] = useState(false);
  return (
    <div
      style={{ height: "calc(100vh - 100px)" }}
      className=" flex gap-3 flex-col w-full bg-green-700/0 "
    >
      <div className="flex justify-between">
        {title && <h2 className="md:text-2xl  text-xl">{title}</h2>}
        {addBtn}
      </div>

      {filter}

      <ScrollAreaAutosize
        scrollbarSize={3}
        className={clsx("  outline-1  grow outline-slate-300   rounded-md")}
        onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      >
        <Table className="w-full app_table overflow-hidden p-0 m-0 ">
          <Table.Thead
            className={clsx("sticky border-b bg-amber-500/90  h-14  top-0", {
              "shadow-sm bg-linear-30 from-amber-500 to-amber-400 ": scrolled,
            })}
          >
            <Table.Tr className={clsx("border-b backdrop-blur-2xl")}>
              {cols?.map((e) => (
                <Table.Th className="capitalize text-black " key={e}>
                  {e}
                </Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          {rows && (
            <Table.Tbody className="  p-0  m-0 bg-red-500/0">
              {rows?.map((e) => e)}
            </Table.Tbody>
          )}
        </Table>
      </ScrollAreaAutosize>
      {totalPage !== null && (
        <div className="flex  items-end justify-between">
          <div>
            <AppSelect
              width={"100px"}
              value={`${query.perpage}`}
              classNames={{ input: "max-w-[120px]" }}
              onChange={(value) => {
                setQuery!({ perpage: Number(value), page: 1 });
              }}
              data={[10, 20, 50, 100].map((e) => ({
                label: `${e}`,
                value: `${e}`,
              }))}
              placeholder="Par / Page"
            />
          </div>
          <Pagination
            color="var(--color-green-300)"
            styles={{ control: { border: "none", color: "black" } }}
            value={query.page}
            classNames={{
              control: "outline-slate-600/70 outline text-black  ",
            }}
            onPreviousPage={() => {
              setQuery!((prev) => ({ page: prev.page - 1 }));
            }}
            onNextPage={() => {
              setQuery!((prev) => ({ page: prev.page + 1 }));
            }}
            total={totalPage ?? 1}
          />
        </div>
      )}
    </div>
  );
};

export default AppTablePagination;
