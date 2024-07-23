import { api } from "../api/Api";

export async function getQueryItems(query){
    const {data} = await api.get(`/api/items?q=${query}`)
    return data;
}