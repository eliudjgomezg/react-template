import * as React from 'react'

import { useCopyToClipboard } from 'hooks/useCopyToClipboard'

import { Dialog, Divider } from '@mui/material'
import Slide from '@mui/material/Slide'
import { styled } from '@mui/material/styles'
// eslint-disable-next-line import/named
import { TransitionProps } from '@mui/material/transitions'

import { TColors } from './colors'
import UiButton from './UiButton'
import { ComponentWrapper } from './UiKitPage/UiPageLayout'

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
  const footerPadding = props.noContainerSpacing ? '' : 'md:px-6 px-4 md:pb-6 pb-4'

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
      <div className={footerPadding}>{props.footer}</div>
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

export const UiModalView = () => {
  const { clipboard } = useCopyToClipboard()
  const [modal, setModal] = React.useState<string>('')

  return (
    <ComponentWrapper title={'Card container'}>
      <pre className='border p-4 whitespace-pre-wrap'>
        {`Propiedades del componente:

  type TUiModal {
    open: boolean
    title?: string
    fullScreen?: boolean
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    headerColor?: TColors
    footer?: React.ReactElement
    noContainerSpacing?: boolean // Al estar en true, retira el pading del children
    onClose?: () => void // Se ejecuta cuando se hace click fuera del modal
  }

Tambien puedes usar el componente UiModalFooter para agregar llamados a la acción (botones):

  type TUiModalFooter = {
    className?: string
  }

  <UiModalFooter className='flex justify-end'>{children}</UiModalFooter>
`}
      </pre>

      <h4 className='mt-8 text-black'>xs, sm, md, lg, xl modal (md default)</h4>
      <UiButton className='mt-4' onClick={() => setModal('xs')}>
        {'Abrir modal size="xs"'}
      </UiButton>
      <UiModal
        open={modal === 'xs'}
        size='xs'
        title='Modal xs'
        footer={
          <UiModalFooter className='flex justify-end'>
            <UiButton size='small' className='mr-4' theme='black' variant='outlined' onClick={() => setModal('')}>
              Cerrar
            </UiButton>
            <UiButton size='small' onClick={() => setModal('')}>
              Aceptar
            </UiButton>
          </UiModalFooter>
        }
      >
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
          obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
          obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
        </p>
        <UiButton
          className='block ml-auto mt-4'
          onClick={() => clipboard(`<UiModal open={false} size=''xs' | 'sm' | 'md' | 'lg' | 'xl'' title='Titulo del modal'></UiModal>`)}
        >
          Copiar código
        </UiButton>
      </UiModal>

      <h4 className='mt-8 text-black'>fullScreen modal </h4>
      <UiButton className='mt-4' onClick={() => setModal('fullScreen')}>
        {'Abrir modal fullScreen'}
      </UiButton>
      <UiModal
        fullScreen
        open={modal === 'fullScreen'}
        title='Modal fullScreen'
        footer={
          <UiModalFooter className='flex justify-end'>
            <UiButton size='small' className='mr-4' theme='black' variant='outlined' onClick={() => setModal('')}>
              Cerrar
            </UiButton>
            <UiButton size='small' onClick={() => setModal('')}>
              Aceptar
            </UiButton>
          </UiModalFooter>
        }
      >
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
          obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellat sequi esse ipsum libero? A exercitationem dolorem hic quis
          obcaecati, similique cumque ad deserunt, nihil odit inventore iste id ratione.
        </p>

        <UiButton className='block ml-auto mt-4' onClick={() => clipboard(`<UiModal fullScreen open={false} title='Titulo del modal'></UiModal>`)}>
          Copiar código
        </UiButton>
      </UiModal>
    </ComponentWrapper>
  )
}
