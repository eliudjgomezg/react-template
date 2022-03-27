import * as React from 'react'

import { Dialog, Divider } from '@mui/material'
import Slide from '@mui/material/Slide'
import { styled } from '@mui/material/styles'
// eslint-disable-next-line import/named
import { TransitionProps } from '@mui/material/transitions'

import { TColors } from './colors'

type TUiModal = {
  open: boolean
  title?: string
  fullScreen?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  headerColor?: TColors
  footer?: React.ReactElement
  noContainerSpacing?: boolean
  onClose?: () => void // Se ejecuta cuando se hace click fuera del modal
}

type TUiModalFooter = {
  className?: string
}

const CustomDialog = styled(Dialog)(() => ({}))

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

export const UiModal: React.FC<TUiModal> = (props) => {
  const modalPadding = props.noContainerSpacing ? '' : 'md:px-6 px-4 md:py-6 py-4'

  return (
    <CustomDialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.onClose}
      maxWidth={props.size ?? 'sm'}
      fullScreen={props.fullScreen}
      sx={{ maxHeight: '95vh', overflow: 'hidden' }}
    >
      <div className={`flex items-center h-16 md:px-6 px-4 py-3`} style={{ backgroundColor: `var(--${props.headerColor ?? 'black'})` }}>
        <h5 className='text-white'>{props.title}</h5>
      </div>
      <div className={`h-full no-mobile-scroll-bar overflow-y-auto overflow-x-hidden ${modalPadding}`}>{props.children}</div>
      <div className={modalPadding}>{props.footer}</div>
    </CustomDialog>
  )
}

export const UiModalFooter: React.FC<TUiModalFooter> = (props) => {
  return (
    <div>
      <Divider className='mb-4' />
      <div className={`${props.className}`}>{props.children}</div>
    </div>
  )
}
