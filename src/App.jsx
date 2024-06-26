import Header from "../Components/Header"
import MenuAppBar from "../Components/Navbar"
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
        <MenuAppBar />
        <Header />
      </ThemeProvider>
    </>
  )
}

export default App
