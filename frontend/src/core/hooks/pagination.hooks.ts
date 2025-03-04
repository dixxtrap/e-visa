import { useSetState } from "@mantine/hooks";
import { PaginationDto } from "../model/pagination";

export const usePagination = <T extends PaginationDto>() => {
    const [state, setState]= useSetState<T>({
        perpage: 20,
        page:1
    } as T);
    return [state, {next:()=>setState({page:1}as T)}]
}
