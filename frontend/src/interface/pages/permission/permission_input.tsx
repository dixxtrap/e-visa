import { useSetState } from "@mantine/hooks";
import { PaginationSearchDto } from "../../../core/model/pagination";
import { FC } from "react";
import { MultiSelect, MultiSelectProps } from "@mantine/core";
import { PermissionApi } from "../../../core/api/permission.api";

export const PermissionInput: FC<MultiSelectProps> = (props) => {
  const [query] = useSetState<PaginationSearchDto>({
    perpage: 2000,
    page: 1,
  });
  const role = PermissionApi.useGetQuery(query);
  return (
    <>
      <MultiSelect
        unselectable="on"
        searchable
        {...props}
        comboboxProps={{ position: "top", keepMounted: true, zIndex: 500 }}
        maxDropdownHeight={"calc(var(--spacing) * 66)"}
        classNames={{
          dropdown: "relative z-0",
          input: "  ",
          root: "",
        }}
        data={
          role.data?.data.map((e) => ({
            label: `${e.code}`,
            value: `${e.id}`,
          })) ?? []
        }
      />
    </>
  );
};
