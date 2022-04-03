import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import React from 'react'

const Index = () => {
  const [dataRepo, setDataRepo] = React.useState<{ [key: string]: string }>({})
  const [dataProfile, setDataProfile] = React.useState<{
    [key: string]: string
    avatar_url: string
    name: string
  }>({
    avatar_url: '',
    name: '',
  })
  const [dataReadme, setDataReadme] = React.useState<{
    [key: string]: string
    content: string
  }>({
    content: '',
  })

  React.useEffect(() => {
    fetch('https://api.github.com/users/nurkholiqansori/repos')
      .then((response) => response.json())
      .then((result) => setDataRepo(result))
      .catch((error) => console.log('error', error))
    fetch('https://api.github.com/users/nurkholiqansori')
      .then((response) => response.json())
      .then((result) => setDataProfile(result))
      .catch((error) => console.log('error', error))
    fetch('https://api.github.com/repos/nurkholiqansori/nurkholiqansori/readme')
      .then((response) => response.json())
      .then((result) => setDataReadme(result))
      .catch((error) => console.log('error', error))
  }, [])

  console.log(dataRepo, dataProfile, dataReadme)

  return (
    <Container>
      <Hero apiProfile={dataProfile} apiReadme={dataReadme} />
      <Main>
        <Text>
          Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
          <Code>TypeScript</Code>.
        </Text>

        <List spacing={3} my={0}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='green.500' />
            <ChakraLink
              isExternal
              href='https://chakra-ui.com'
              flexGrow={1}
              mr={2}
            >
              Chakra UI <LinkIcon />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='green.500' />
            <ChakraLink
              isExternal
              href='https://nextjs.org'
              flexGrow={1}
              mr={2}
            >
              Next.js <LinkIcon />
            </ChakraLink>
          </ListItem>
        </List>
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>Build with ❤️</Text>
        <Text>Powered by Vercel</Text>
        <Text>Nur Kholiq Ansori</Text>
      </Footer>
    </Container>
  )
}

export default Index
