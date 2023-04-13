import { AppBar, Toolbar, Typography, Box } from '@mui/material';

type BaseLayoutProps = {
  children: React.ReactNode,
  appBarTitle: string
}

export function BaseLayout({ children, appBarTitle }: BaseLayoutProps) {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant='h5'> {appBarTitle}</Typography>
        </Toolbar>
      </AppBar>
      <Box paddingLeft='25%' paddingTop='300px' alignItems='center'>
        {children}
      </Box>
    </>
  )
}
