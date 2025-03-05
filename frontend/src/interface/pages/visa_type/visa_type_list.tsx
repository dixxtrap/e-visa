import { useSetState } from "@mantine/hooks";
import { VisaTypeAPi } from "../../../core/api/visa_type.api";
import AppTablePagination from "../../components/utils/app_table_pagination";
import { PaginationSearchDto } from "../../../core/model/pagination";
import { VisaTypeCreate } from "./visa_type_create";
import { AppTextInput } from "../../components/form/text_input";
import { Table } from "@mantine/core";
import clsx from "clsx";
import { VisaTypeEdit } from "./visa_type_edit";

export const VisaTypeList = () => {
  const [query, setQuery] = useSetState<PaginationSearchDto>({
    page: 1,
    perpage: 20,
  });
  const { data: visaData } = VisaTypeAPi.useAllQuery(query);
  return (
    <div>
      <AppTablePagination
        query={query}
        setQuery={setQuery}
        title={"Listes des Roles"}
        addBtn={<VisaTypeCreate />}
        filter={
          <div className="flex">
            <AppTextInput
              onChange={(event) =>
                setQuery({ search: event.currentTarget.value })
              }
              placeholder="search"
            />
          </div>
        }
        cols={["name", "comment", "amount", "Date de Creation", "status", ""]}
        totalPage={visaData?.totalPage}
        rows={visaData?.data.map((e) => (
          <Table.Tr key={e.name + "role_list"}>
            <Table.Td>{e.name}</Table.Td>
            <Table.Td>{e.comment}</Table.Td>
            <Table.Td>{e.amount}</Table.Td>
            <Table.Td>{new Date(e.createdAt!).toLocaleString()}</Table.Td>

            <Table.Td>
              <div
                className={clsx(
                  "outline w-20 text-center rounded-md bg-linear-30 px-2",
                  {
                    " outline-green-600/40 text-green-950 from-green-100 to-green-200":
                      e.isActive,
                    "outline-rose-600/40 text-rose-950 from-rose-100 to-rose-200":
                      !e.isActive,
                  }
                )}
              >
                {e.isActive ? "active" : "Desactiver"}
              </div>
            </Table.Td>

            <Table.Td>
              <div>
                <VisaTypeEdit old={e} />
              </div>
            </Table.Td>
          </Table.Tr>
        ))}
      />
    </div>
  );
};
