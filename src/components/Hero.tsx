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
  Skeleton,
} from '@chakra-ui/react'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'
import remarkHtml from 'remark-html'
import { data } from '../api/data'

type HeroProps = {
  apiProfile: {
    avatar_url: string
    name: string
    location: string
  }
  apiReadme: {
    content: string
  }
  children?: React.ReactNode
}

export const Hero = React.forwardRef<HTMLDivElement, HeroProps>((props, ref) => {
  const { apiProfile, apiReadme, children }= props
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
    return <Text as='span' align='justify' my={10} {...props} />
  }

  return (
    <Box
      ref={ref}
      id='about'
      px='1rem'
      mx='auto'
      maxWidth='container.sm'
      sx={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='648' height='648' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%2397c8f0' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%234299e1'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E\")",
      }}
    >
      <Flex pb='10' pt='20' textAlign={'center'} align={'center'}>
        <Heading
          fontWeight={900}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Welcome to{' '}
          <Text as={'span'} color={'blue.400'}>
            my personal website
          </Text>
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
          <Stack fontSize='md' mt='10' mb={4} gap={3}>
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
        </Box>
        <Stack
          justifyContent='center'
          flexWrap='wrap'
          direction='row'
          gap='5'
          align='center'
          py='10'
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
                rounded={'full'}
                size={'lg'}
                fontWeight={'medium'}
                px={6}
                color={'white'}
                colorScheme={bgColor[colorMode]}
                bg={'blue.400'}
                _hover={{ bg: 'blue.500' }}
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
})
