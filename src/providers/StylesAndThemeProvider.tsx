import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@material-ui/core';
import theme from '@styles/theme';
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';

interface StylesAndThemeProviderProps {
  children: React.ReactNode;
}

const StylesAndThemeProvider: React.FC<StylesAndThemeProviderProps> = ({
  children,
}) => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);

export default StylesAndThemeProvider;
