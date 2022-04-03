import { Stack, StackProps } from '@chakra-ui/react'

export const Main = (props: StackProps) => (
  <Stack
    maxWidth='container.sm'
    px='1rem'
    {...props}
  />
)
