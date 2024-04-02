import { Router } from './routes';
import { theme } from './themes/themes';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import "./assets/css/index.scss"
import Bg from './assets/img/background.png';
import "./libs/fontawesome";
import { Header } from './components/patterns/header';
import { Footer } from './components/patterns/footer';
import { Box } from '@mui/material';


function App() {
  const { router } = Router();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{
          backgroundImage: `url(${Bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}>
          <Header />
          <RouterProvider router={router} />
          <Footer />
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default App
