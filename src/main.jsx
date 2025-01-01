import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { store } from './store/store';
import App from './App';
import { darkTheme, lightTheme } from './styles/theme';
import { useSelector } from 'react-redux';

const ThemedApp = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  </React.StrictMode>,
);
