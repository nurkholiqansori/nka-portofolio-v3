import { Grid, Heading, Link, Stack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const Navigation = (props: Props) => {
  return (
    <Grid
      as='nav'
      position='fixed'
      bottom='5%'
      right='5%'
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
          <Stack as='span' height='1px' width='10px' background={useColorModeValue('#000', '#fff')} transformOrigin='0 50%' transition='translate-x .25s' />
          <Link
            // _hover={{ ml: '5px', translateX: '0' }}
            position='relative'
            href='#about'
            fontSize='12px'
            translateX='25px'
          >
            {' '}
            ABOUT{' '}
          </Link>
        </li>
        <li>
          <Link href='#about' fontSize='12px'>
            {' '}
            PORTOFOLIO{' '}
          </Link>
        </li>
        <li>
          <Link href='#about' fontSize='12px'>
            {' '}
            PERSONAL PROJECTS{' '}
          </Link>
        </li>
        <li>
          <Link href='#about' fontSize='12px'>
            {' '}
            REPOSITORIES{' '}
          </Link>
        </li>
        <li>
          <Link href='#about' fontSize='12px'>
            {' '}
            CERTIFICATE{' '}
          </Link>
        </li>
      </ul>
    </Grid>
  )
}

export default Navigation
