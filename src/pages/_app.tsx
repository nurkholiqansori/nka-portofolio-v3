import { ChakraProvider } from '@chakra-ui/react'
import '../stylesheet/customcss.css'
import theme from '../theme'
import { AppProps } from 'next/app'
import StateGlobalProvider from '../context/StateGlobalContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <StateGlobalProvider>
        <Component {...pageProps} />
      </StateGlobalProvider>
    </ChakraProvider>
  )
}

export default MyApp
