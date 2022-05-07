import { Heading } from '@chakra-ui/react'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Title = ({children}: Props) => {
  return (
    <>
      <Heading as='h1' mb='10' textAlign='center'>{children}</Heading>
    </>
  )
}

export default Title
