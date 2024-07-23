import { api } from "../api/Api";

export async function getItemDetail(id){
    const {data} = await api.get(`/api/items/${id}`)
    return data;
}