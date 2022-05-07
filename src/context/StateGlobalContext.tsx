import axios, { AxiosResponse } from 'axios'
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
} from 'react'

export interface StateGlobalContextType {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  dataProfile: {
    [key: string]: string
    avatar_url: string
    name: string
    location: string
  }
  dataReadme: {
    [key: string]: string
    content: string
  }
  getAllData: () => void
}

export const StateGlobalContext = createContext<StateGlobalContextType>(
  {} as StateGlobalContextType,
)

interface StateGlobalProviderProps {
  children: ReactNode
}
const StateGlobalProvider = ({ children }: StateGlobalProviderProps) => {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [dataProfile, setDataProfile] = React.useState<{
    [key: string]: string
    avatar_url: string
    name: string
    location: string
  }>({
    avatar_url: '',
    name: '',
    location: '',
  })
  const [dataReadme, setDataReadme] = React.useState<{
    [key: string]: string
    content: string
  }>({
    content: '',
  })

  const getAllData = () => {
    axios
      .all([
        axios.get('https://api.github.com/users/nurkholiqansori'),
        axios.get(
          'https://api.github.com/repos/nurkholiqansori/nurkholiqansori/readme',
        ),
      ])
      .then(
        axios.spread((res1: AxiosResponse, res2: AxiosResponse) => {
          setDataProfile(res1.data)
          setDataReadme(res2.data)
        }),
      )
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <StateGlobalContext.Provider
      value={{ loading, setLoading, dataProfile, dataReadme, getAllData }}
    >
      {' '}
      {children}{' '}
    </StateGlobalContext.Provider>
  )
}

export default StateGlobalProvider
