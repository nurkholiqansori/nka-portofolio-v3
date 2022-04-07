import { Flex, FlexProps } from '@chakra-ui/react'

export const Footer = (props: FlexProps) => (
  <Flex width='100vw' height='100vh' direction='column' as="footer" justifyContent='center' alignItems='center' {...props} />
)
  