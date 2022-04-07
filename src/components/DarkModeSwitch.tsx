import { useColorMode, Switch, Button, FormLabel, Collapse } from '@chakra-ui/react'
import React from 'react'

export const DarkModeSwitch = () => {
  const [ show, setShow ] = React.useState(false)
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <>
      <Button
        position='fixed'
        top='1rem'
        right='1rem'
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        leftIcon={
          <Switch
            id='dark-mode'
            color='green'
            isChecked={isDark}
            onChange={toggleColorMode}
          />
        }
      >
        <Collapse in={show}>
        <FormLabel htmlFor='dark-mode' pt='1.5' cursor='pointer'>
          Dark Mode
        </FormLabel>
        </Collapse>
      </Button>
    </>
  )
}
