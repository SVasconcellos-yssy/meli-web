// src/api/Api.js
import axios from 'axios';

const apiUrl = 'http://localhost:5000';

export const api = axios.create({
	baseURL: apiUrl,
	timeout: 1000 * 60 * 45,
});

export async function fetchItems(query) {
  try {
    const response = await axios.get(`${apiUrl}/api/items?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar itens:', error);
    throw error;
  }
}
export async function fetchItemDetail(id) {
  try {
    const response = await axios.get(`${apiUrl}/api/items/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar itens:', error);
    throw error;
  }
}
