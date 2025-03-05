import { useSetState } from "@mantine/hooks";
import { CustomerApi } from "../../../core/api/customer.api";
import { PaginationCustomerDto } from "../../../core/model/pagination";
import AppTablePagination from "../../components/utils/app_table_pagination";
import { Table } from "@mantine/core";
import { AppStatus } from "../../components/utils/app_status";

export const CustomerList = () => {
  const [query, setQuery] = useSetState<PaginationCustomerDto>({
    perpage: 20,
    page: 1,
  });
  const user = CustomerApi.useGetsQuery(query);
  return (
    <AppTablePagination
      query={query}
      setQuery={setQuery}
      cols={[
        "Nom Complet",
        "email",
        "Téléphone",
        "Adresse",
        "Bloquer",
        "Archiver",
        "status",
        "",
      ]}
      rows={user.data?.data.map((e) => (
        <Table.Tr>
          <Table.Td>{e.displayname}</Table.Td>
          <Table.Td>{e.email}</Table.Td>
          <Table.Td>{e.phone}</Table.Td>
          <Table.Td>{e.address}</Table.Td>
          <Table.Td>
            <AppStatus
              isActive={e.login?.isBlocked!}
              actif="oui"
              inactif="non"
            />
          </Table.Td>
          <Table.Td>
            <AppStatus
              isActive={e.login?.isArchived!}
              actif="oui"
              inactif="non"
            />
          </Table.Td>
          <Table.Td>
            <AppStatus isActive={e.login?.isActive!} />
          </Table.Td>
          <Table.Td></Table.Td>
        </Table.Tr>
      ))}
    />
  );
};
