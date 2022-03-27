import { FunctionComponent, ReactElement } from 'react'

import { Link } from 'react-router-dom'

import { Button } from '@mui/material'

type TButtonVariant = 'contained' | 'outlined' | 'default'
export type TButtonTheme = 'black'
export type TButtonSize = 'small' | 'medium' | 'large'

type TUiButton = {
  className?: string
  variant?: TButtonVariant
  theme?: TButtonTheme
  size?: TButtonSize
  asLink?: boolean
  to?: string
  type?: 'submit' | 'button' | 'reset'
  icon?: ReactElement
  disabled?: boolean
  onClick?: () => void
}

const outlinedStructure = 'border hover:bg-gray-100 bg-transparent'
const defaultStructure = 'bg-transparent border-none shadow-transparent hover:shadow-transparent hover:bg-gray-100'
const structure = 'normal-case shadow-md hover:shadow-lg transition duration-200'
const disabled = 'bg-gray-400 text-white border-none'

const root: Record<string, string> = {
  black_contained: 'bg-black text-white hover:bg-gray-700',
  black_outlined: `text-black border-black ${outlinedStructure}`,
  black_default: `text-black ${defaultStructure}`,

  white_contained: 'bg-white text-white hover:bg-gray-400',
  white_outlined: `text-black border-white ${outlinedStructure}`,
  white_default: `text-white ${defaultStructure}`,
}

const UiButton: FunctionComponent<TUiButton> = (props) => {
  const { children, className, variant, theme, asLink, ...rest } = props

  const buttonStyles = () => {
    if (props.disabled) return disabled

    const selectedVariant: TButtonVariant = variant ? variant : 'contained'
    const selectedTheme: TButtonTheme = theme ? theme : 'black'
    return root[`${selectedTheme}_${selectedVariant}`]
  }

  const setIcon = () => {
    if (!props.icon) return
    return props.icon
  }

  return (
    <>
      {props.asLink ? (
        <Link to={props.to ?? ''}>
          <Button
            className={`${className} ${structure} ${buttonStyles()}`}
            {...rest}
            sx={{ borderStyle: 'solid', borderRadius: '8px', paddingLeft: 2, paddingRight: 2 }}
          >
            <div className='flex items-center'>
              {setIcon()}
              <h6 className={`flex items-center ${props.size?.includes('small') ? 'subtitle2' : 'h6'}`}>{children}</h6>
            </div>
          </Button>
        </Link>
      ) : (
        <Button
          className={`${className} ${structure} ${buttonStyles()}`}
          {...rest}
          sx={{ borderStyle: 'solid', borderRadius: '8px', paddingLeft: 2, paddingRight: 2 }}
        >
          <div className='flex items-center'>
            {setIcon()}
            <h6 className={`flex items-center ${props.size?.includes('small') ? 'subtitle2' : 'subtitle1'}`}>{children}</h6>
          </div>
        </Button>
      )}
    </>
  )
}

export default UiButton
