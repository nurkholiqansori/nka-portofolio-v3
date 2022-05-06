import { ChakraProvider } from '@chakra-ui/react'
import '../stylesheet/customcss.css'
import theme from '../theme'
import { AppProps } from 'next/app'
import { useState } from 'react'
import { StateGlobalContext } from '../context/StateGlobalContext'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true)

  return (
    <ChakraProvider resetCSS theme={theme}>
      <StateGlobalContext.Provider value={{ loading, setLoading }}>
        <Component {...pageProps} />
      </StateGlobalContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp
