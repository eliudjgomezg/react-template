import { FunctionComponent, ReactElement, useState } from 'react'

import { useCopyToClipboard } from 'hooks/useCopyToClipboard'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Box, Collapse } from '@mui/material'

import { TColors } from './colors'
import UiButton from './UiButton'
import { ComponentWrapper, TypographyView } from './UiKitPage/UiPageLayout'

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
    <Box className={`${props.className}`} sx={{ width: '100%' }}>
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
    </Box>
  )
}

export default UiSimpleAccordion

export const UiSimpleAccordionView = () => {
  const { clipboard } = useCopyToClipboard()

  return (
    <ComponentWrapper title={'Acordion simple'}>
      <pre className='border p-4 whitespace-pre-wrap'>
        {`Propiedades del componente:

  type TUiSimpleAccordion = {
    className?: string
    header?: string | ReactElement
    icon?: ReactElement
    size?: 'small' | 'large'
    bgColor?: TColors
}`}
      </pre>

      <h4 className='mt-8 text-black'>Small Accordion</h4>
      <UiSimpleAccordion className='mt-2' header='Titulo'>
        <TypographyView />
      </UiSimpleAccordion>

      <UiButton className='block ml-auto mt-4' onClick={() => clipboard(`<UiSimpleAccordion header='Titulo'></UiSimpleAccordion>`)}>
        Copiar código
      </UiButton>

      <h4 className='mt-8 text-black'>Accordion con icono</h4>
      <UiSimpleAccordion className='mt-2' header='Titulo con icono' icon={<FavoriteBorderIcon />}>
        <TypographyView />
      </UiSimpleAccordion>

      <UiButton
        className='block ml-auto mt-4'
        onClick={() => clipboard(`<UiSimpleAccordion header='Titulo con icono' icon='React Element'></UiSimpleAccordion>`)}
      >
        Copiar código
      </UiButton>

      <h4 className='mt-8 text-black'>Large Accordion y header con ReactElement</h4>
      <UiSimpleAccordion
        size='large'
        bgColor='black'
        className='mt-2'
        header={
          <div className='flex'>
            <p className='subtitle1 text-white'>Header</p>
          </div>
        }
      >
        <TypographyView />
      </UiSimpleAccordion>

      <UiButton
        className='block ml-auto mt-4'
        onClick={() => clipboard(`<UiSimpleAccordion size='large' color='black' header='ReactElement'></UiSimpleAccordion>`)}
      >
        Copiar código
      </UiButton>
    </ComponentWrapper>
  )
}
