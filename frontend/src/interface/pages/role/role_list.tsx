import { useSetState } from "@mantine/hooks";
import { RoleApi } from "../../../core/api/role.api";
import {
  PaginationSearchDto,
} from "../../../core/model/pagination";
import AppTablePagination from "../../components/utils/app_table_pagination";
import { Table } from "@mantine/core";
import { RoleCreate } from "./role_create";
import { RoleEdit } from "./role_edit";
import { AppTextInput } from "../../components/form/text_input";

export const RoleList = () => {
  const [query, setQuery] = useSetState<PaginationSearchDto>({
    page: 1,
    perpage: 20,
  });
  const role = RoleApi.useGetsQuery(query);
  return (
    <div>
      <AppTablePagination
        query={query}
        setQuery={setQuery}
        title={"Listes des Roles"}
        addBtn={<RoleCreate />}
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
        cols={[
          "name",
          "comment",
          "permission",
          "agent",
          "Date de Creation",
          "",
        ]}
        totalPage={role.data?.totalPage}
        rows={role.data?.data.map((e) => (
          <Table.Tr key={e.name + "role_list"}>
            <Table.Td>{e.name}</Table.Td>
            <Table.Td>{e.comment}</Table.Td>
            <Table.Td>{e._count?.rolePermission!}</Table.Td>
            <Table.Td>{e._count?.login!}</Table.Td>
            <Table.Td>{new Date(e.createdAt!).toLocaleString()}</Table.Td>
            <Table.Td>
              <div>
                <RoleEdit id={e.id!} />
              </div>
            </Table.Td>
          </Table.Tr>
        ))}
      />
    </div>
  );
};
