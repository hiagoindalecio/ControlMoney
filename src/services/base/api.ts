import axios from "axios";

export const TransactionsApi = axios.create({
    baseURL: 'http://localhost:3000/api' //API base
});