import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import './App.css';
import Home from './pages/Home';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const themeLight = createTheme({
    typography: {
      fontFamily: ['Raleway', 'Roboto', '"Helvetica Neue"'].join(','),
    },
    palette: {
      type: 'light',
      primary: {
        main: '#25D0BD',
      },
      secondary: {
        main: '#FF3377',
      },
    },
  });

  const themeDark = createTheme({
    typography: {
      fontFamily: ['Raleway', 'Roboto', '"Helvetica Neue"'].join(','),
    },
    palette: {
      type: 'dark',
      primary: {
        main: '#171717',
      },
      secondary: {
        main: '#CCF02E',
      },
      terceary: {
        main: '#707070',
      },
    },
  });

  return (
    <ThemeProvider theme={darkMode ? themeDark : themeLight}>
      <Home
        setDarkMode={setDarkMode}
        theme={darkMode ? themeDark : themeLight}
      />
    </ThemeProvider>
  );
}

export default App;
