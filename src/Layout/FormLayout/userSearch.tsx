import React, { useState } from "react";
import axios from "axios";
import { AppBar, Toolbar, Typography, Box, TextField, Button } from '@mui/material';
interface User {
  name: string;
  avatar_url: string;
  html_url: string;
}

export const UserSearch: React.FC = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<User | null>(null);

  const handleSearch = async () => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    setUser(response.data);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '10px'
        }}>

        <TextField fullWidth variant='outlined' label='Pesquisar Perfil' value={username} onChange={(e) => setUsername(e.target.value)} />
        <Button variant="contained" color="primary" sx={{ width: "100%" }} onClick={handleSearch}>Buscar</Button>
      </Box>

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


        <div>
          <UserSearch/>
        </div>

        {user && (
          <Box>
            <p>{user.name}</p>
            <Box component="div" sx={{ borderRadius: '50%', width: '120px', height: '120px', backgroundColor: 'black' }} >
              <img src={user.avatar_url} alt={user.name} />
            </Box>

            <a href='https://github.com/SamuelOdecio'>Perfil Github</a>
            <p>
              Perfil GitHub <a href={user.html_url}>{user.html_url}</a>
            </p>
          </Box>
        )}

      </Box>



    </>
  );
};

export default UserSearch;