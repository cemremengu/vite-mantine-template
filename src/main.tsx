import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import Router from '@/Router';
import { theme } from '@/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <Router />
  </MantineProvider>
);
