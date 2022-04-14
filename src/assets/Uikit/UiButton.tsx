import { FunctionComponent, ReactElement } from 'react'

import { useCopyToClipboard } from 'hooks/useCopyToClipboard'
import { Link } from 'react-router-dom'

import { Button } from '@mui/material'

import { ComponentWrapper } from './UiKitPage/UiPageLayout'

type TButtonVariant = 'contained' | 'outlined' | 'default'
export type TButtonTheme = 'black' | 'white'
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

const sx = {
  borderStyle: 'solid',
  borderRadius: '8px',
  paddingLeft: 2,
  paddingRight: 2,
  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  '&:hover': {
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
}
const outlinedStructure = 'border hover:bg-gray-100 bg-transparent'
const defaultStructure = 'bg-transparent border-none shadow-transparent hover:shadow-transparent hover:bg-gray-100'
const structure = 'normal-case transition duration-200'
const disabled = 'bg-gray-400 text-white border-none'

const root: Record<string, string> = {
  black_contained: 'bg-black text-white hover:bg-gray-700',
  black_outlined: `text-black border-black ${outlinedStructure}`,
  black_default: `text-black ${defaultStructure}`,

  white_contained: 'bg-white text-black hover:bg-gray-100',
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
          <Button className={`${className} ${structure} ${buttonStyles()}`} {...rest} sx={sx} component='span'>
            <div className='flex items-center'>
              {setIcon()}
              <h6 className={`flex items-center ${props.size?.includes('small') ? 'subtitle2' : 'h6'}`}>{children}</h6>
            </div>
          </Button>
        </Link>
      ) : (
        <Button className={`${className} ${structure} ${buttonStyles()}`} {...rest} sx={sx}>
          <div className='flex items-center'>
            {setIcon()}
            <span className={`flex items-center ${props.size?.includes('small') ? 'subtitle2' : 'subtitle1'}`}>{children}</span>
          </div>
        </Button>
      )}
    </>
  )
}

export default UiButton

export const UiButtonsView = () => {
  const { clipboard } = useCopyToClipboard()

  return (
    <ComponentWrapper title={'UiButton'}>
      <pre className='border p-4 whitespace-pre-wrap'>
        {`Puedes editar los estilos en el componente raiz

Propiedades del componente:

  type TVariant = 'contained' | 'outlined' | 'default'
  type TTheme = 'black' |'white'
  type TSize = 'small' | 'medium' | 'large'

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
`}
      </pre>

      <h4 className='mt-4 text-black'>Contained buttons (Default variant)</h4>
      <div className='grid grid-cols-12'>
        <div className='col-span-4'>
          <h6 className='my-2'>theme: black</h6>
          <UiButton theme='black' onClick={() => clipboard(`<UiButton theme='black'></UiButton>`)}>
            Copiar código
          </UiButton>
        </div>
        <div className='col-span-4'>
          <h6 className='my-2'>theme: white</h6>
          <UiButton theme='white' onClick={() => clipboard(`<UiButton theme='white'></UiButton>`)}>
            Copiar código
          </UiButton>
        </div>
      </div>

      <h4 className='mt-8 text-black'>Outlined buttons</h4>
      <div className='grid grid-cols-12'>
        <div className='col-span-4'>
          <h6 className='my-2'>theme: black</h6>
          <UiButton theme='black' variant='outlined' onClick={() => clipboard(`<UiButton theme='black' variant='outlined'></UiButton>`)}>
            Copiar código
          </UiButton>
        </div>
      </div>

      <h4 className='mt-8 text-black'>Default buttons</h4>
      <div className='grid grid-cols-12'>
        <div className='col-span-4'>
          <h6 className='my-2'>theme: black</h6>
          <UiButton theme='black' variant='default' onClick={() => clipboard(`<UiButton theme='black' variant='default'></UiButton>`)}>
            Copiar código
          </UiButton>
        </div>
      </div>

      <h4 className='mt-8 text-black'>Size buttons</h4>
      <div className='grid grid-cols-12'>
        <div className='col-span-4'>
          <h6 className='my-2'>small</h6>
          <UiButton theme='black' size='small' onClick={() => clipboard(`<UiButton theme='black' size='small'></UiButton>`)}>
            Copiar código
          </UiButton>
        </div>
        <div className='col-span-4'>
          <h6 className='my-2'>medium (Default)</h6>
          <UiButton theme='black' size='medium' onClick={() => clipboard(`<UiButton theme='black' size='medium'></UiButton>`)}>
            Copiar código
          </UiButton>
        </div>
        <div className='col-span-4'>
          <h6 className='my-2'>large</h6>
          <UiButton theme='black' size='large' onClick={() => clipboard(`<UiButton theme='black' size='large'></UiButton>`)}>
            Copiar código
          </UiButton>
        </div>
      </div>

      <h4 className='mb-2 mt-8 text-black'>asLink button</h4>
      <UiButton theme='black' onClick={() => clipboard(`<UiButton asLink to='/path'></UiButton>`)}>
        Copiar código
      </UiButton>

      <h4 className='mb-2 mt-8 text-black'>Disabled button</h4>
      <UiButton disabled onClick={() => clipboard(`<UiButton disabled></UiButton>`)}>
        Copiar código
      </UiButton>
    </ComponentWrapper>
  )
}
