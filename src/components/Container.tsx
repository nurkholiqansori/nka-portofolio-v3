import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'
import { NextSeo, SocialProfileJsonLd } from 'next-seo'

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  return (
    <>
      <NextSeo
        title='My Personal Web Page'
        description="My Name is Nur Kholiq Ansori, I'm a Computer Science who likes Javascript Framework"
        openGraph={{
          title: 'My Personal Web Page',
          description:
            "My Name is Nur Kholiq Ansori, I'm a Computer Science who likes Javascript Framework",
          images: [
            {
              url: '/logo.png',
              width: 800,
              height: 600,
              alt: 'Logo Nur Kholiq Ansori',
              type: 'image/png',
            },
          ],
          site_name: 'My Personal Web Page',
          profile: {
            firstName: 'Nur Kholiq',
            lastName: 'Ansori',
            username: 'nurkholiqansori',
            gender: 'Male',
          },
        }}
        additionalMetaTags={[
          {
            name: 'application-name',
            content: 'My Personal Web Page',
          },
          {
            name: 'theme-color',
            content: '#000000',
          },
          {
            name: 'google-site-verification',
            content: 'LDQrI76atKuVJOouskURaOJiGk6tBm6aNAzLaFn05iI',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/logo.png',
            sizes: '76x76',
          },
          {
            rel: 'manifest',
            href: '/manifest.json',
          },
        ]}
      />
      <SocialProfileJsonLd
        type='Person'
        name='Nur Kholiq Ansori'
        url='http://nurkholiqansori.me'
        sameAs={[
          'http://www.facebook.com/nurkholiq.ansori.1',
          'http://instagram.com/nurkholiqansori',
          'http://www.linkedin.com/in/nurkholiqansori',
        ]}
      />
      <Flex
        direction='column'
        alignItems='center'
        justifyContent='flex-start'
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        {...props}
      />
    </>
  )
}
