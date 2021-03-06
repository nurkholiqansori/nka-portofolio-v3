import { Grid, Heading, Link, Stack, useColorModeValue } from '@chakra-ui/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React from 'react'
import { StateGlobalContext } from '../context/StateGlobalContext'

type Props = {
  aboutRef: HTMLDivElement
  portofolioRef: HTMLDivElement
  personalProjectsRef: HTMLDivElement
  headerRef: HTMLDivElement
  footerWrapperRef: HTMLDivElement
  cerfiticateRef: HTMLDivElement
}

const Navigation = (props: Props) => {
  const {
    aboutRef,
    portofolioRef,
    personalProjectsRef,
    headerRef,
    footerWrapperRef,
    cerfiticateRef,
  } = props

  const { loading } = React.useContext(StateGlobalContext)

  const navigationRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (window !== undefined) {      
      // gsap.registerPlugin(ScrollTrigger)
      // gsap.to(navigationRef?.current, {
      //   scrollTrigger: {
      //     trigger: aboutRef,
      //     start: 'top top',
      //     end: '20px 80%',
      //     pin: true,
      //     scrub: 0.5,
      //   },
      //   duration: 1,
      //   right: '5%',
      //   opacity: 1,
      //   ease: 'power3.out',
      // })
      // ScrollTrigger.create({
      //   trigger: aboutRef,
      //   start: 'top top',
      //   end: '20px 80%',
      //   scrub: true,
      //   onEnter: () => console.log('enter'),
      // })
    }
  }, [loading])

  return (
    <Grid
      as='nav'
      ref={navigationRef}
      position='fixed'
      bottom='5%'
      right='-10%'
      opacity={0}
      zIndex={1}
      gap={3}
      gridTemplateColumns='repeat(2, 1fr)'
      sx={{
        '@media (min-width: 920px)': {
          display: 'flex',
        },
        '@media (max-width: 920px)': {
          display: 'none',
        },
      }}
    >
      <Stack alignContent='center' gap={2}>
        <Heading
          as='p'
          fontSize='12px'
          sx={{ writingMode: 'vertical-rl', letterSpacing: 2 }}
        >
          CONTENTS
        </Heading>
        <Stack
          sx={{
            writingMode: 'vertical-rl',
          }}
          ml='1.5'
          width='1px'
          flexGrow={1}
          background={useColorModeValue('#000', '#fff')}
        />
      </Stack>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'space-between',
        }}
      >
        <li style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <Stack
            as='span'
            height='1px'
            width='10px'
            background={useColorModeValue('#000', '#fff')}
            transformOrigin='0 50%'
            transition='translate-x .25s'
          />
          <Link
            as='span'
            // _hover={{ ml: '5px', translateX: '0' }}
            position='relative'
            fontSize='12px'
            translateX='25px'
            onClick={() => aboutRef?.scrollIntoView({ behavior: 'smooth' })}
          >
            {' '}
            ABOUT{' '}
          </Link>
        </li>
        <li>
          <Link
            as='span'
            onClick={() =>
              portofolioRef?.scrollIntoView({ behavior: 'smooth' })
            }
            fontSize='12px'
          >
            {' '}
            PORTOFOLIO{' '}
          </Link>
        </li>
        <li>
          <Link
            as='span'
            onClick={() =>
              personalProjectsRef?.scrollIntoView({ behavior: 'smooth' })
            }
            fontSize='12px'
          >
            {' '}
            PERSONAL PROJECTS{' '}
          </Link>
        </li>
        <li>
          <Link
            as='span'
            onClick={() =>
              cerfiticateRef?.scrollIntoView({ behavior: 'smooth' })
            }
            fontSize='12px'
          >
            {' '}
            CERTIFICATE{' '}
          </Link>
        </li>
      </ul>
    </Grid>
  )
}

export default Navigation
