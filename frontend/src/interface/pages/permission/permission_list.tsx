import AppTablePagination from "../../components/utils/app_table_pagination";
import { PermissionApi } from "../../../core/api/permission.api";
import { useSetState } from "@mantine/hooks";
import { PaginationSearchDto } from "../../../core/model/pagination";
import { Table } from "@mantine/core";
import { AppBtnFilled } from "../../components/utils/app_button";
import { AppDateInput, AppTextInput } from "../../components/form/text_input";
import { PermissionUpdate } from "./update";
const PermissionList = () => {
  const [query, setQuery] = useSetState<PaginationSearchDto>({
    perpage: 20,
    page: 1,
  });
  const permission = PermissionApi.useGetQuery(query);
  console.log(permission.error);
  return (
    <div>
      <AppTablePagination
        setQuery={setQuery}
        query={query}
        totalPage={permission.data?.totalPage}
        filter={
          <div className="flex gap-2">
            <AppTextInput
              onChange={(event) =>
                setQuery({ search: event.currentTarget.value, page: 1 })
              }
              placeholder={"Code"}
            />
            <div className="grow"></div>
            <AppDateInput placeholder="Date de Creation" />
          </div>
        }
        title={"Liste des Permissions"}
        addBtn={
          <AppBtnFilled type={"button"}>Ajouter une permission</AppBtnFilled>
        }
        cols={["code", "module", "action", ""]}
        rows={permission.data?.data.map((e) => (
          <Table.Tr className="" key={e.id + "p_row"}>
            <Table.Td className="">{e.code?.toLocaleLowerCase()} </Table.Td>
            <Table.Td>{e.module?.name}</Table.Td>
            <Table.Td>{e.action}</Table.Td>

            <Table.Td>
              <div>
                <PermissionUpdate {...e} />
              </div>
            </Table.Td>
          </Table.Tr>
        ))}
      />
    </div>
  );
};

export default PermissionList;
