import { useColorMode, Switch, FormControl } from '@chakra-ui/react'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <>
      <Switch
        id='dark-mode'
        position='fixed'
        top='1rem'
        right='1rem'
        color='green'
        isChecked={isDark}
        onChange={toggleColorMode}
      />
      <label htmlFor='dark-mode' hidden>
        Dark Mode
      </label>
    </>
  )
}
