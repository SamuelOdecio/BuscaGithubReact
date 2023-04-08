import React from 'react';
import { Box, TextField, Button } from '@mui/material';

export function PaymentForm (){
    return (
        <>
        <Box
        sx={{
            display: 'flex',
            gap: '1rem',
            padding: '1rem',
            backgroundColor: '#f0f0f0',
            borderRadius: '1rem',
            boxShadow: '0 0.2rem 0.5rem rgba(0, 0, 0, 0.2)',
        }}
        >
        
        <Box 
        sx={{
            display: 'flex',
            alignItems:'center',
            flexDirection:'column',
            gap: '10px'}}>
            <h2>LOCALIZADOR DE PERFIS</h2>
            <TextField label="Perfil no Github" />
            <Button variant="contained" color="primary">Buscar</Button>
        </Box>

        <Box
        sx={{
            width: '300px',
            height:'300px',
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
        }}>
            <h2>IMG IMG IMG</h2>
        </Box>


        </Box>
        
        </>
    );
};

export default PaymentForm;
