import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos/1'
})
export const listsAPI = {
    async getLists(page: string){
        const response = await instance.get<any>(page);
        return response.data;
    }
}
