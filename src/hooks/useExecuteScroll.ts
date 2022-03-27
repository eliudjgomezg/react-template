import { useRef, MutableRefObject } from 'react'

type TConfig = {
  behavior?: 'smooth' | 'auto'
  block?: 'start' | 'center' | 'end' | 'nearest'
}

const useExecuteScroll = (config?: TConfig) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>

  const execute = () => {
    ref.current.scrollIntoView({
      behavior: config?.behavior ? config.behavior : 'smooth',
      block: config?.block ? config.block : 'start',
    })
  }

  return { ref, execute }
}

export default useExecuteScroll
