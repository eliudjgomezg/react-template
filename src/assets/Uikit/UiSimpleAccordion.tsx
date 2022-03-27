import { FunctionComponent, ReactElement, useState } from 'react'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { Collapse } from '@mui/material'

import { TColors } from './colors'

type TUiSimpleAccordion = {
  className?: string
  header?: string | ReactElement
  icon?: ReactElement
  size?: 'small' | 'large'
  bgColor?: TColors
}

const UiSimpleAccordion: FunctionComponent<TUiSimpleAccordion> = (props) => {
  const [openAccordion, setOpenAccordion] = useState<boolean>(false)
  const iconStyle = 'col-span-1 text-white justify-self-end self-center'
  const collapsedStyle = ` ${openAccordion ? 'rounded-t-md' : 'rounded-md'} ${props.size?.includes('large') ? 'h-14' : 'h-12'}`

  const setIcon = () => {
    if (!props.icon) return null
    return props.icon
  }

  return (
    <div className={`w-full ${props.className}`}>
      <div
        className={`grid grid-cols-12 md:px-4 px-2 cursor-pointer ${collapsedStyle}`}
        style={{ backgroundColor: `var(--${props.bgColor ?? 'black'})` }}
        onClick={() => setOpenAccordion((prev: boolean) => !prev)}
      >
        <div className='col-span-11 text-white flex items-center'>
          {typeof props.header === 'string' ? (
            <div className='flex items-center h-full'>
              {setIcon()}
              <p className='subtitle1 text-white'>{props.header}</p>
            </div>
          ) : (
            <>{props.header}</>
          )}
        </div>

        {openAccordion ? <ArrowDropUpIcon className={iconStyle} /> : <ArrowDropDownIcon className={iconStyle} />}
      </div>
      <Collapse in={openAccordion}>{props.children}</Collapse>
    </div>
  )
}

export default UiSimpleAccordion
