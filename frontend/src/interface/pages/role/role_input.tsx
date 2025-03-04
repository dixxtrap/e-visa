import { useDebouncedValue, useSetState } from "@mantine/hooks"
import { PaginationSearchDto } from "../../../core/model/pagination"
import { RoleApi } from "../../../core/api/role.api"
import { FC, useEffect, useState } from "react"
import { SelectProps } from "@mantine/core"
import { AppSelect } from "../../components/form/text_input"

export const RoleInput: FC<SelectProps> = (props) => {
    const [search, setSearch] = useState('')
    const [query, setQuery] = useSetState<PaginationSearchDto>({ perpage: 20, page: 1 })
    const [debouncedSearch] = useDebouncedValue(search, 200);
    useEffect(() => {

            setQuery({ search: debouncedSearch??'' })

    }, [debouncedSearch])
    const role = RoleApi.useGetsQuery(query);
    return <AppSelect unselectable="on" searchable {...props} onSearchChange={(val) => { setSearch(val) }} data={role.data?.data.map(e => ({ label: `${e.name}`, value: `${e.id}` })) ?? []}/>

}
