import {
  Avatar,
  Flex,
  Heading,
  SkeletonCircle,
  Stack,
  Text,
  Link as ChakraLink,
  Box,
  Icon,
  Center,
  Button,
  useColorMode,
  Skeleton
} from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'
import remarkHtml from 'remark-html'
import { data } from '../api/data'

type HeroProps = {
  title: string
  apiProfile: {
    avatar_url: string
    name: string
    location: string
  }
  apiReadme: {
    content: string
  }
}

export const Hero = ({ title, apiProfile, apiReadme }: HeroProps) => {
  const avatarUrl = apiProfile.avatar_url
  const name = apiProfile.name
  const location = apiProfile.location
  const { colorMode } = useColorMode()
  const bgColor = { light: 'blackAlpha', dark: 'whiteAlpha' }

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
    return <Text as='span' align='justify' {...props} />
  }

  return (
    <Box px='1rem' mx='auto' maxWidth='container.sm'>
      <Flex
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        mb='10'
        mt='20'
      >
        <Heading fontSize='6vw' textAlign='center'>
          Welcome to my personal website
        </Heading>
      </Flex>
      <Box my='20' px='1rem'>
        <Center flexDirection='column'>
          <Flex justifyContent='center'>
            {avatarUrl ? (
              <Avatar size='2xl' name={name} src={avatarUrl} />
            ) : (
              <SkeletonCircle size='100' />
            )}
          </Flex>
          <Stack fontSize='md' my='10'>
            {apiReadme.content ? (
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
            ) : (
              <>
                <Skeleton width='80' height='200px' />
              </>
            )}
          </Stack>
        </Center>
        <Box mx='auto'>
          <Flex alignItems='center' gap='5'>
            <Icon fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z'
              />
            </Icon>
            {data.birthPlace}
          </Flex>
          <Flex alignItems='center' gap='5' mb='7'>
            {apiReadme.content ? (
              <>
                <Icon fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </Icon>
                {location}
              </>
            ) : (
              <Skeleton mt='10px' width='36' height='8' />
            )}
          </Flex>
          <Text align='justify'>{data.description}</Text>
        </Box>
        <Stack
          justifyContent='center'
          flexWrap='wrap'
          direction='row'
          gap='5'
          align='center'
          my='10'
        >
          {data.socMed.map((i) => (
            <ChakraLink
              key={i.id}
              href={i.link}
              isExternal
              mr={2}
              textColor='#ffffff'
              fontSize='30'
              borderRadius='10px'
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              <Button
                colorScheme={bgColor[colorMode]}
                color='white'
                leftIcon={
                  <Icon
                    fill='#ffffff'
                    viewBox='0 0 24 24'
                    fontSize='20'
                    stroke='none'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d={i.path}
                    />
                  </Icon>
                }
              >
                {i.name}
              </Button>
            </ChakraLink>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}

Hero.defaultProps = {
  title: 'Nur Kholiq Ansori',
}
