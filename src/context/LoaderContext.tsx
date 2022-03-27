import { useState, createContext } from 'react'

type TLoaderContextProps = {
  isOpen: boolean
  setIsOpen: (e: boolean) => void
}

const LoaderContext: React.Context<TLoaderContextProps> = createContext<TLoaderContextProps>({
  isOpen: false,
  setIsOpen: () => false,
})

const LoaderContextProvider: React.FC = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  return <LoaderContext.Provider value={{ isOpen, setIsOpen }}>{props.children}</LoaderContext.Provider>
}

export { LoaderContext, LoaderContextProvider }
