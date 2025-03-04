export interface BaseResponse<T> {
    status: boolean;
    code: string;
    data: T
}


export interface BaseResponsePagination<T=any> extends BaseResponse<T>{
    totalPage:number
}


export interface WsMessage{
    code: string;
    message: string[];
    status: boolean;
}
