import { Router } from './routes';
import { theme } from './themes/themes';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import "./assets/css/index.scss"
import "./libs/fontawesome";
import { Header } from './components/patterns/header';
import { Footer } from './components/patterns/footer';


function App() {
  const { router } = Router();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App
