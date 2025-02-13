import httpClient from "../config/axios";

interface ApiRequestProps{
    method: "get" | "post" | "put" | "delete"
    url: string;
    body?: object
    headers?: object;
}



export const processApiRequest = async (props: ApiRequestProps) => {
    try {
        const res = await httpClient.request({
            method: props.method,
            url: props.url,
            data: props.body,
            headers: props?.headers
        })
        return res
    } catch (error:any) {
        throw new Error(error?.response?.data?.error?.message || error?.message)
    }
}