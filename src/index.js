import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; 
import App from './pages/App';


const ToggleInvertButton = () => {
  const [invert, setInvert] = useState(false);

  useEffect(() => {
    if (invert) {
      document.body.classList.add("invert-mode");
    } else {
      document.body.classList.remove("invert-mode");
    }
  }, [invert]);

  return (
    <Button
      sx={{
        position: 'fixed',
        top: 15,
        right: 20,
        zIndex: 1000,
      }}
      onClick={() => setInvert(!invert)}
      variant="contained"
    >
      {invert ? 'Light Mode' : 'Dark Mode'}
    </Button>
  );
};


ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Box sx={{ display: 'flex' }} className='container'>
      <ToggleInvertButton /> {/* Render the toggle button */}
      <nav>
        <img className='w-100' src={require("./assets/img/nav.png")} alt="" />
      </nav>
      <App />
    </Box>
  </React.StrictMode>,
  document.getElementById('root')
);
