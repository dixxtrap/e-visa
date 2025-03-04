export interface BaseResponse<T = any> {
    data: T
}


export interface WsMessage {
    status: boolean,
    message: String[],
    code: String
}
