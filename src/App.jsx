import Router from '../Components/Router/Routes'
import Navbar from "../Components/Navbar"
import '../src/styles.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {


  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <Navbar />
        <Router />

      </ThemeProvider>
    </>
  )
}

export default App
