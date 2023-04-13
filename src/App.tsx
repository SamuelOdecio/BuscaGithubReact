import { Box, Button, CssBaseline, FormControl, FormHelperText, Grid, Input, InputLabel, TextField } from '@mui/material'

import { BaseLayout } from './Layout/BaseLayout'
import { Theme } from './ThemeProvider'
import { FormLayout } from './Layout/FormLayout';



function App() {

  return (
    <>

      <Theme>
        <CssBaseline/>
        <BaseLayout appBarTitle="Busca Perfil Github">
          <FormLayout>
          </FormLayout>
        </BaseLayout>
      </Theme>
    </>
  );

}
export default App
