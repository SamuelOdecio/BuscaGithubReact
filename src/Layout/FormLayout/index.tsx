import { AppBar, Toolbar, Typography, Box } from '@mui/material';

type FormLayoutProps = {
  children: React.ReactNode,

}
export function FormLayout({ children }: FormLayoutProps) {
  return (
    <>
      <Box display="flex"  paddingTop='100px' paddingLeft='100px'>
        {children}
      </Box>
    </>
  )
}

