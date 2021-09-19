import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';


const App = ({ Component, pagePProps }: AppProps ) => {
  return (
    <ChakraProvider>
      <Component {...pagePProps} />
    </ChakraProvider>
  )
}

export default App;