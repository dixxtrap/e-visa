import { useSetState } from "@mantine/hooks";
import AppTablePagination from "../../components/utils/app_table_pagination";
import { PaginationUserDto } from "../../../core/model/pagination";
import { UserApi } from "../../../core/api/user.api";
import { Table } from "@mantine/core";
import { AppSelect, AppTextInput } from "../../components/form/text_input";
import { UserCreate } from "./user_create";
import { UserEdit } from "./user_edit";

export const UserList = () => {
  const [query, setQuery] = useSetState<PaginationUserDto>({
    perpage: 20,
    page: 1,
  });
  const user = UserApi.useGetsQuery(query);
  return (
    <div>
      <AppTablePagination
        title={"Liste des Agents"}
        filter={
          <div className="flex  gap-3">
            <AppTextInput placeholder="Nom Complet" />
            <AppTextInput placeholder="Téléphone" />
            <div className="grow"></div>
            <AppSelect placeholder="Role" />
          </div>
        }
              addBtn={<UserCreate/>}
        query={query}
        setQuery={setQuery}
        cols={[
          "Nom Complet",
          "Email",
          "Téléphone",
          "Address",
          "role",
          "status",
          "",
        ]}
        rows={user.data?.data.map((e) => (
          <Table.Tr key={`${e.displayname}`}>
            <Table.Td>{e.displayname}</Table.Td>
            <Table.Td>{e.email}</Table.Td>
            <Table.Td>{e.phone} </Table.Td>
            <Table.Td>{e.address}</Table.Td>
            <Table.Td>{e.login?.role?.name}</Table.Td>
            <Table.Td></Table.Td>
            <Table.Td>
              <div>
                <UserEdit old={e}/>
              </div>
            </Table.Td>
          </Table.Tr>
        ))}
      />
    </div>
  );
};
