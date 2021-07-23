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
        main: '#CA285A',
      },

      background: {
        default: '#900',
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
