
export interface PaginationDto{
    perpage: number;
    page: number;
}


export interface PaginationSearchDto extends PaginationDto{
    search?:string
}

export interface PaginationUserDto extends PaginationDto{
    displayename?: string;
    phone?: string;
    email?: string;
}
