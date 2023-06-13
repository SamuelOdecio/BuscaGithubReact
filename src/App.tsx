import { Avatar, Box, Button, CircularProgress, CssBaseline, TextField } from '@mui/material'

import { BaseLayout } from './Layout/BaseLayout'
import { Theme } from './ThemeProvider'
import { getUsers } from './services/api';
import { FormEvent, useState, useEffect } from 'react';

type Users = {
  email: string
  id: string
  first_name: string
  last_name: string

}

export function App() {
  const [users, setUsers] = useState<Users>({ email: "", id: "", first_name: "", last_name: "" })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const inputId: HTMLInputElement = form.Id
    setIsLoading(true)
    setUsers(await getUsers(inputId.value))
    setIsLoading(false)
  }




  return (
    <>
      <Theme>
        <CssBaseline />
        <BaseLayout appBarTitle="Busca Perfil">
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
                    color: "#353634",
                  }}>
                
                  <h2>BUSCA PERFIL</h2>
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

                      <TextField fullWidth variant='outlined' name="Id" label='Pesquisar Perfil' />
                      <Button variant="contained" color="primary" type="submit" sx={{ width: "100%" }}>Buscar</Button>
                      {console.log('testeeeeee')}
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



                    {isLoading ? <CircularProgress /> : (
                      <>
                      <Box>
                      {console.log('loading')}
                        <p>{users.email}</p>
                        <p>{users.id}</p>
                        <p>{users.first_name}</p>
                        <p>{users.last_name}</p>

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

