import axios from 'axios'

const api = axios.create({
    baseURL: 'https://reqres.in/api/users/',
    timeout: 1000 // tempo de atraso resposta
});

export async function getUsers(id: string) {
    const users = await api.get(id)
    return users.data
}