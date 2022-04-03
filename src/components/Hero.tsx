import {
  Avatar,
  Flex,
  Heading,
  SkeletonCircle,
  Stack,
  Text,
  Link as ChakraLink,
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
      return (
        <Flex
          gap='2'
          flexWrap='wrap'
          justifyContent='center'
          {...props}
        />
      )
    }
    return <Text as='p' align='justify' {...props} />
  }

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      my='20'
      px='1rem'
    >
      {avatarUrl ? (
        <Avatar size='2xl' name={name} src={avatarUrl} />
      ) : (
        <SkeletonCircle size='30  ' />
      )}
      <Flex bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>
        <Heading fontSize='6vw'>{title}</Heading>
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
    </Flex>
  )
}

Hero.defaultProps = {
  title: 'Nur Kholiq Ansori',
}
