import { Avatar, Box, Button, CircularProgress, CssBaseline, FormControl, FormHelperText, Grid, Input, InputLabel, TextField, Typography } from '@mui/material'

import { BaseLayout } from './Layout/BaseLayout'
import { Theme } from './ThemeProvider'
import { getUsers } from './services/api';
import { FormEvent, useState, useEffect } from 'react';
import IconBook from './components/bookicon';
import { height } from '@mui/system';

type Users = {
  avatar_url: string
  name: string
  html_url: string
  bio: string
  public_repos: string

}

export function App() {
  const [users, setUsers] = useState<Users>({ avatar_url: "", html_url: "", name: "", bio: "", public_repos: "" })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const inputUserName: HTMLInputElement = form.userName
    setIsLoading(true)
    setUsers(await getUsers(inputUserName.value))
    setIsLoading(false)
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
                height: '450px',
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
                      width: '540px',
                      height: '315px',
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}>

                    {isLoading ? <CircularProgress /> : (
                      <>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                            borderRadius: '5px',
                            backgroundColor: 'rgb(132, 0, 255)',
                            padding: '15px',
                            color: "white",
                            gap: '5px'
                          }}>
                          <Box
                            sx={{
                              width:"100%",
                              display: 'flex',
                              gap: "20px",
                              alignItems: 'center',
                              
                            }}>

                            {/* BOX FOTO PERFIL - LINK - NOME */}
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: "0 50px 0 50px"
                              }}>

                              <Box component="div" sx={{ borderRadius: '50%', width: '120px', height: '120px' }} >
                                <Avatar src={users.avatar_url} sx={{ width: 130, height: 130 }} />
                              </Box>
                              <Typography gutterBottom variant="h4" />{users.name}<Typography />
                              <a target="_blank" style={{ color: "white" }} href={users.html_url}>Perfil no GitHub</a>

                            </Box>

                            {/* BOX QUANTIDADE REPOSITORIOS E BIOS */}
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: "column",
                              }}>
                              <IconBook/>

                              <Typography gutterBottom variant="h5">{users.public_repos}</Typography>
                              <Box>
                              <p>{users.bio}</p>
                              </Box>
                              
                              

                            </Box>
                          </Box>
                        </Box>

                      </>
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

