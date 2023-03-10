import React from 'react'
import Router from "./routes/Router"
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Router />
      </ChakraProvider>  
    </>
  )
}

export default App
