

import { ThemeProvider, createTheme } from '@mui/material/styles';

type ThemeProps = {
    children:React.ReactNode,
}
const theme = createTheme({
    palette: {
        primary: {
          main: 'rgb(132, 0, 255)',
          dark:'#273035',
          light:'#5f6a6f'
        },
        secondary: {
          main: '#6a1b9a',
          dark:'#4a126b',
          light:'#8748ae'
          
        },

      },
});

export function Theme({children}: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
