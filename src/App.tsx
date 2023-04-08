import { Box, Button, CssBaseline, FormControl, FormHelperText, Grid, Input, InputLabel, TextField } from '@mui/material'
import reactLogo from './assets/react.svg'
import { BaseLayout } from './Layout/BaseLayout'
import { Theme } from './ThemeProvider'
import { FormLayout } from './Layout/FormLayout'
import PaymentForm from './Layout/FormLayout/formpag'
import { ChangeEvent, useEffect, useState } from "react";
import { getPerfil } from "./services/api";
import { Perfil } from "./types";


function App() {
  <PerfilGithub/>
}

export function PerfilGithub() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [perfil, setPerfil] = useState<Perfil[]>([]);

  useEffect(() => {
    async function listContacts() {
      setIsLoading(true);
      setPerfil(await getPerfil());
      setIsLoading(false);
    }
    listContacts();
  }, []);
  return (
    <>
      <Theme>
        <CssBaseline />

        <BaseLayout appBarTitle='Buscador de Perfil'>
        <PaymentForm></PaymentForm>
          <Box component='div' width='700px' height='400px' display='flex' flexDirection='column' alignItems='center' sx={{p: 2, border: '1px solid grey'}}>
            <Box component='div' width='100%'>
              <h2>LOCALIZADOR DE PERFIS</h2>
            </Box>
            <Box component="div" display='flex' width='650px' height='250px'>
              <Box component="div" width='100%' sx={{ p: 2, border: '1px solid grey', gap: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <TextField id="outlined-basic" label="Perfil Github" variant="outlined" />
                <Button variant="contained" size="medium" >Buscar</Button>
              </Box >
              <Box component="div" width='100%' sx={{ p: 2, border: '1px solid grey' }}>

              </Box>
            </Box>
          </Box>
        </BaseLayout>

      </Theme>
    </>
  );
}