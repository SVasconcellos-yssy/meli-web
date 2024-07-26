import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const api = axios.create({
	baseURL: apiUrl,
	timeout: 1000 * 60 * 45,
});
