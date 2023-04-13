import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com/',
    timeout: 3000,
  });

export async function getPerfil(){
    const perfil = await api.get('https://api.github.com/users/${username}')
    return perfil.data.results
}


