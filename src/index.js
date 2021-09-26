import { ThemeProvider } from '@emotion/react';
import App from 'Components/App/App';
import { theme } from 'constants/theme';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
