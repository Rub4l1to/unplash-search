import React from 'react';
import ReactDOM from 'react-dom/client';

//* Styled components
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Theme } from '@/styles';

import { SearchProvider } from '@/context';
import { Home } from '@/screens';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <SearchProvider>
        <Home />
      </SearchProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
