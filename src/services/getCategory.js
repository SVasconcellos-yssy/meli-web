import { api } from "../api/Api";

export async function getCategory(id){
    const {data} = await api.get(`/api/Items/category/${id}`)
    return data;
}