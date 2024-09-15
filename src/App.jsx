import Router from "../Components/Router/Router";
import Navbar from "../Components/Navbar"
import '../src/styles.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Footer } from "../Components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react"

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {


  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Analytics />
        <CssBaseline />
        <Router />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
