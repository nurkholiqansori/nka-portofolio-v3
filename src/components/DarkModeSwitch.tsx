import { useColorMode, Switch, FormControl, FormLabel } from '@chakra-ui/react'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <>
      <FormControl>
        <Switch
          id='dark-mode'
          position='fixed'
          top='1rem'
          right='1rem'
          color='green'
          isChecked={isDark}
          onChange={toggleColorMode}
        />
        <FormLabel htmlFor='dark-mode' hidden>
          Dark Mode
        </FormLabel>
      </FormControl>
    </>
  )
}
