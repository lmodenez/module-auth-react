import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core';

import { AuthProvider } from './contexts/AuthContext';

import Routes from './routes';

function App() {
  let theme = createMuiTheme({
    palette: {
      primary: {
        main: '#e0b116',
      },

      background: {
        default: '#2B3038',
      },
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
