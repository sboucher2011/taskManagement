// External
import React from 'react';
import { AppRouter } from './routes';
import { BrowserRouter } from 'react-router-dom';

// Style
import { CssBaseline, ThemeProvider } from '@mui/material';
import { customTheme } from './theme/customTheme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>
          <CssBaseline />
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
