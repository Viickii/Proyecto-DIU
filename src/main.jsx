import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </ChakraProvider>,
);
