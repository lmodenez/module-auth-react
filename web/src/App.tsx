import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core';

import { AuthProvider } from './contexts/AuthContext';
import { SidebarProvider } from './contexts/SidebarContext';

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
        <SidebarProvider>
          <Routes />
        </SidebarProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
