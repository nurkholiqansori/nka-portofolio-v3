import {
  Avatar,
  Flex,
  Heading,
  SkeletonCircle,
  Stack,
  Text,
  Link as ChakraLink,
  SimpleGrid,
  Box,
} from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'
import remarkHtml from 'remark-html'

type HeroProps = {
  title: string
  apiProfile: {
    avatar_url: string
    name: string
  }
  apiReadme: {
    content: string
  }
}

export const Hero = ({ title, apiProfile, apiReadme }: HeroProps) => {
  const avatarUrl = apiProfile.avatar_url
  const name = apiProfile.name

  const readme = Buffer.from(apiReadme.content, 'base64').toString('utf-8')

  const H1 = ({ node, ...props }: any) => (
    <Heading as='h1' fontSize='xl' {...props} />
  )
  const H2 = ({ node, ...props }: any) => (
    <Heading as='h2' fontSize='lg' {...props} />
  )
  const Linked = ({ node, ...props }: any) => (
    <ChakraLink isExternal mr={2} color='main' {...props} />
  )
  const Paragraph = ({ node, ...props }: any) => {
    const { children } = props
    if (children && children[0].props && children[0].props.src) {
      return <Flex gap='2' flexWrap='wrap' justifyContent='center' {...props} />
    }
    return <Text as='p' align='justify' {...props} />
  }

  return (
    <Box px='1rem'>
      <Flex bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' mb='10' mt='20'>
        <Heading fontSize='6vw' textAlign='center'>
          Welcome to my personal website
        </Heading>
      </Flex>
      <SimpleGrid columns={[1, null, 2]} mx='auto' my='20' px='1rem'>
        <Box>
          <Flex justifyContent='center'>
            {avatarUrl ? (
              <Avatar size='2xl' name={name} src={avatarUrl} />
            ) : (
              <SkeletonCircle size='30' />
            )}
          </Flex>
          <Stack fontSize='md' maxWidth='container.sm' my='10'>
            <ReactMarkdown
              remarkPlugins={[remarkHtml]}
              rehypePlugins={[rehypeSanitize]}
              components={{
                h1: H1,
                h2: H2,
                a: Linked,
                p: Paragraph,
              }}
            >
              {readme}
            </ReactMarkdown>
          </Stack>
        </Box>
        <Box>Social</Box>
      </SimpleGrid>
    </Box>
  )
}

Hero.defaultProps = {
  title: 'Nur Kholiq Ansori',
}
