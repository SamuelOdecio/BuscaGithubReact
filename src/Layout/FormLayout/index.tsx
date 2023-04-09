import { AppBar, Toolbar, Typography, Box, TextField, Button } from '@mui/material';

type FormLayoutProps = {
  children: React.ReactNode,

}
export function FormLayout({ children }: FormLayoutProps) {
  return (
    <>
    <Box 
    sx={{
      width: '1000px',
      height: '400px',
    }}>
    
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          gap: '1rem',
          padding: '4rem',
          backgroundColor: '#f0f0f0',
          borderRadius: '1rem',
          boxShadow: '0 0.2rem 0.5rem rgba(0, 0, 0, 0.2)',
        }}
      >

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '10px'
          }}>
          <h2>LOCALIZADOR DE PERFIS</h2>
          <TextField variant='outlined' fullWidth label='Pesquisar Perfil' />
          <Button variant="contained" color="primary">Buscar</Button>
        </Box>

        <Box
          sx={{
            width: '600px',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}>


          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              width: '90%',
              height: '90%',
              borderRadius: '5px',
              backgroundColor: 'rgb(132, 0, 255)',
              padding: '15px'
            }}>
            <Box component="div" sx={{ borderRadius: '50%', width: '120px', height: '120px', backgroundColor: 'black' }} >
            </Box>
            <h2>SAMUEL ODECIO</h2>
            <a href='https://github.com/SamuelOdecio'>Perfil Github</a>
          </Box>
        </Box>

      </Box>
      </Box>         
    </>
  );
}

