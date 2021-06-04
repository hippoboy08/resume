import { createMuiTheme, ThemeProvider, useMediaQuery } from '@material-ui/core'
import { useMemo } from 'react'
import ScrollProvider from './common/ScrollProvider'
import { Home } from './pages'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#7EDD91',
            dark: '#7EDD9150',
          },
          secondary: {
            main: '#00000030',
          },
        },
        overrides: {
          MuiTypography: {
            colorPrimary: {
              color: 'white',
            },
          },
        },
      }),
    [prefersDarkMode]
  )
  return (
    <ThemeProvider theme={theme}>
      <ScrollProvider>
        <Home />
      </ScrollProvider>
    </ThemeProvider>
  )
}

export default App
