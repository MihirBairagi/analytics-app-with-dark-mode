import React from 'react';
import ReactDOM from 'react-dom';
import { DarkModeProvider, useDarkMode } from './DarkModeContext';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; 
import App from './pages/App';

const ToggleInvertButton = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  React.useEffect(() => {
    document.body.style.filter = darkMode ? 'invert(1)' : 'invert(0)';
    if (darkMode) {
      document.body.classList.add("invert-mode");
    } else {
      document.body.classList.remove("invert-mode");
    }
  }, [darkMode]);

  return (
    <Button
      sx={{
        position: 'fixed',
        top: 15,
        right: 20,
        zIndex: 1000,
      }}
      onClick={toggleDarkMode}
      variant="contained"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </Button>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <CssBaseline />
      <Box sx={{ display: 'flex' }} className='container'>
        <ToggleInvertButton />
        <nav>
          <img className='w-100' src={require("./assets/img/nav.png")} alt="" />
        </nav>
        <App />
      </Box>
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
