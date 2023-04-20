import { Avatar, Box, Button, CircularProgress, CssBaseline, FormControl, FormHelperText, Grid, Input, InputLabel, TextField, Typography } from '@mui/material'

import { BaseLayout } from './Layout/BaseLayout'
import { Theme } from './ThemeProvider'
import { FormLayout } from './Layout/FormLayout';
import { getUser } from './services/api';
import { FormEvent, useState, useEffect } from 'react';

type User = {
  name: string,
  avatar_url: string,
  url: string
}
const initialUser = {
  avatar_url: "",
  html_url: "",
  name: ""
}
function App() {
  const [user, setUser] = useState<User>(initialUser);
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const inputUserName: HTMLInputElement = event.currentTarget.userName
    setLoading(true)
    setUser(await getUser(inputUserName.value))
    setLoading(false)
  }



  return (
    <>
      <Theme>
        <CssBaseline />
        <BaseLayout appBarTitle="Busca Perfil Github">
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "300px 0",
          }}>
            <Box
              sx={{
                width: '1000px',
                height: '400px',
                backgroundColor: '#f0f0f0',
                borderRadius: '1rem',
                boxShadow: '0 0.2rem 0.5rem rgba(0, 0, 0, 0.2)',
              }}>

              <Box>
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: "flex",
                    paddingLeft: "20px",
                    paddingTop: "20px",
                    gap: '20px',
                    fontSize: "16px",
                    color: "rgb(132, 0, 255)",
                  }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  <h2>LOCALIZADOR DE PERFIS</h2>
                </Box>

                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: "center",
                    gap: "50px",
                    paddingLeft: "10%"
                  }}
                >

                  <form onSubmit={handleSubmit}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        gap: '10px'
                      }}>

                      <TextField fullWidth variant='outlined' name="userName" label='Pesquisar Perfil' />
                      <Button variant="contained" color="primary" type="submit" sx={{ width: "100%" }}>Buscar</Button>
                    </Box>
                  </form>


                  <Box
                    sx={{
                      width: '600px',
                      height: '300px',
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}>

                    {isLoading ? (<CircularProgress />) : (
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          flexDirection: 'column',
                          width: '90%',
                          height: '90%',
                          borderRadius: '5px',
                          backgroundColor: 'rgb(132, 0, 255)',
                          padding: '15px',
                          color: "white"
                        }}>

                        <Box component="div" sx={{ borderRadius: '50%', width: '120px', height: '120px' }} >
                          <img src={user.avatar_url}/>
                        </Box>

                        <Typography variant='h4'> {user.name}</Typography>
                        <a href='https://github.com/S'>Perfil Github</a>
                      </Box>
                    )}

                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </BaseLayout>
      </Theme>

    </>
  );

}
export default App

