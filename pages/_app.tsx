import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import theme from "../src/theme";
import '../src/theme/style.css';



const App = ({ Component, pageProps }: AppProps ) => {
  return (
    <ChakraProvider theme={theme} >
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App;