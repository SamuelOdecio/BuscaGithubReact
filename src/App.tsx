import { CssBaseline, FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BaseLayout } from './Layout/BaseLayout'
import { Theme } from './ThemeProvider'

import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Theme>
        <CssBaseline />

        <BaseLayout appBarTitle='Buscador de Perfil'>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
          </FormControl>
        </BaseLayout>

      </Theme>
    </>
  )
}

export default App