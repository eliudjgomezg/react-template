import { FunctionComponent, ReactElement, useState } from 'react'

import { useCopyToClipboard } from 'hooks/useCopyToClipboard'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Collapse } from '@mui/material'
import { Box } from '@mui/system'

import { TColors } from './colors'
import UiButton from './UiButton'
import { ComponentWrapper, TypographyView } from './UiKitPage/UiPageLayout'

export type TAccordion = {
  header: string | ReactElement
  content: string | ReactElement
  icon?: ReactElement
}

type TUiMultipleAccordion = {
  className?: string
  accordions: TAccordion[]
  size?: 'small' | 'large'
  bgColor?: TColors
}

const sx = { width: '100%', marginTop: 8 }

const UiMultipleAccordion: FunctionComponent<TUiMultipleAccordion> = (props) => {
  const [openAccordion, setOpenAccordion] = useState<number>(0)
  const iconStyle = 'col-span-1 text-white justify-self-end self-center'

  const handleAccordion = (index: number) => {
    if (index + 1 === openAccordion) return setOpenAccordion(0)
    setOpenAccordion(index + 1)
  }

  const setIcon = (accordion: TAccordion) => {
    if (!accordion.icon) return null
    return accordion.icon
  }

  return (
    <>
      {props.accordions.map((accordion: TAccordion, index: number) => {
        const collapsedStyle = `${openAccordion === index + 1 ? 'rounded-t-md' : 'rounded-md'} ${props.size?.includes('large') ? 'h-14' : 'h-12'}`
        const isSelected = openAccordion === index + 1

        return (
          <Box key={index} className={props.className} sx={sx}>
            <div
              className={`grid grid-cols-12 md:px-4 px-2 cursor-pointer ${collapsedStyle}`}
              style={{ backgroundColor: `var(--${props.bgColor ?? 'black'})` }}
              onClick={() => handleAccordion(index)}
            >
              {typeof accordion.header === 'string' ? (
                <div className='col-span-11 flex items-center text-white'>
                  {setIcon(accordion)}
                  <p className='subtitle1 text-white'>{accordion.header}</p>
                </div>
              ) : (
                <div className='col-span-11 flex items-center text-white'>{accordion.header}</div>
              )}

              {openAccordion ? <ArrowDropUpIcon className={iconStyle} /> : <ArrowDropDownIcon className={iconStyle} />}
            </div>
            <Collapse className={`${isSelected ? '' : '-mt-1'}`} in={isSelected}>
              {accordion.content}
            </Collapse>
          </Box>
        )
      })}
    </>
  )
}

export default UiMultipleAccordion

export const UiMultipleAccordionView = () => {
  const { clipboard } = useCopyToClipboard()
  const accordions: TAccordion[] = [
    {
      header: 'Header 1',
      icon: <FavoriteBorderIcon />,
      content: <TypographyView />,
    },
    {
      header: 'Header 2',
      content: <TypographyView />,
    },
    {
      header: (
        <div className='flex'>
          <p className='subtitle1 text-white'>Header 3 (Con ReactElement)</p>
        </div>
      ),
      content: <TypographyView />,
    },
  ]

  return (
    <ComponentWrapper title={'Acordion simple'}>
      <pre className='border p-4 whitespace-pre-wrap'>
        {`Propiedades del componente:

  type TUiSimpleAccordion = {
    className?: string
    header?: ReactElement
    size?: 'small' | 'large'
    bgColor?: TColors
}`}
      </pre>

      <h4 className='mt-8 text-black'>Multiple Accordion</h4>
      <UiMultipleAccordion accordions={accordions} className='mt-2' />

      <UiButton className='block ml-auto mt-4' onClick={() => clipboard(`<UiMultipleAccordion accordions={accordions} />`)}>
        Copiar código
      </UiButton>
    </ComponentWrapper>
  )
}
