import { Avatar, Box, Button, CircularProgress, CssBaseline, TextField, Typography } from '@mui/material'

import { BaseLayout } from './Layout/BaseLayout'
import { Theme } from './ThemeProvider'
import { FormEvent, useState, useEffect } from 'react';
import axios from 'axios';

type dadostip = {
  avatar: string,
  email: string,
  first_name: string,
  id: number,
  last_name: string,

}

export function App() {
  const [dados, setDados] = useState<dadostip[]>([]);
  const [numb, setNumb] = useState<any>(-1);
  const [number, setNumber] = useState<any>(-1);



  useEffect(() => {
    getDados()
  }, [])

  const enviou = () => {
    setNumber(numb)
  }
  const getDados = async () => {

    try {
      const { data } = await axios.get('https://reqres.in/api/users')
      setDados(data.data)
      console.log(data.data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <Theme>
        <CssBaseline />
        <BaseLayout appBarTitle="API Usúarios">
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


                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                      gap: '40px'
                    }}>

                    <Typography variant='h6'>Código de Identificação</Typography>
                    <TextField id="outlined-basic" onChange={(e) => setNumb(e.target.value)} label="número" variant="outlined" />
                    <Button variant="contained" size="large" onClick={enviou}> 
                      Buscar
                    </Button>
                  </Box>



                  <Box
                    sx={{
                      width: '600px',
                      height: '300px',
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                      
                    }}>



                    <Box sx={{ height: '70%', width: '300px' }}>

                      <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        background:'#0f6fc5',
                        padding:'50px',
                        borderRadius: '10px'
                      }}>

                        <Avatar
                          alt="Remy Sharp"
                          src={dados[number]?.avatar || 'nao encontrado ainda'}
                          sx={{ width: 66, height: 66 }}
                        />

                        <Typography gutterBottom variant="h5" component="div">
                          {dados[number]?.first_name +' '+ dados[number]?.last_name || 'nao encontrado ainda'}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                          {dados[number]?.email || 'nao encontrado ainda'}
                        </Typography>

                      </Box>

                    </Box>

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

