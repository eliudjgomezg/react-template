import { PropsWithChildren, useState } from 'react'

import { useCopyToClipboard } from 'hooks/useCopyToClipboard'
import { useForm } from 'react-hook-form'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

import InputField from '../Forms/InputField'
import SelectField from '../Forms/SelectField'
import UiButton from '../UiButton'
import { UiModal, UiModalFooter } from '../UiModal'
import UiMultipleAccordion, { TAccordion } from '../UiMultipleAccordion'
import UiPagination, { useUiPagination } from '../UiPagination'
import UiSimpleAccordion from '../UiSimpleAccordion'
import UiTabs from '../UiTabs'

export const ButtonsView = () => {
  const { clipboard } = useCopyToClipboard()
  return (
    <ComponentWrapper title={'UiButton'}>
      <pre className='border p-4 whitespace-pre-wrap'>
        {`Puedes editar los estilos en el componente raiz

Propiedades del componente:

  type TVariant = 'contained' | 'outlined' | 'default'
  type TTheme = 'black'
  type TSize = 'small' | 'medium' | 'large'

  type TUiButton = {
	  className?: string
      variant?: TVariant // Default variant: contained
      theme?: TTheme // Default color: black 
      size?: TSize // Default size: medium
      asLink?: boolean
      to?: string
      type?: 'submit' | 'button' | 'reset'
      disabled?: boolean
      onClick?: (e?: any) => void
  }
}`}
      </pre>

      <h4 className='mt-4 text-black'>Contained buttons (Default variant)</h4>
      <div className='grid grid-cols-12'>
        <div className='col-span-4'>
          <h6 className='my-2'>theme: black</h6>
          <UiButton theme='black' onClick={() => clipboard(`<UiButton theme='black'></UiButton>`)}>
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
      <UiButton theme='black' asLink to='/' onClick={() => clipboard(`<UiButton asLink href='/path'></UiButton>`)}>
        Copiar código
      </UiButton>

      <h4 className='mb-2 mt-8 text-black'>Disabled button</h4>
      <UiButton disabled onClick={() => clipboard(`<UiButton disabled></UiButton>`)}>
        Copiar código
      </UiButton>
    </ComponentWrapper>
  )
}

export const TabsView = () => {
  const { clipboard } = useCopyToClipboard()

  const tabs = [
    { tabText: 'tab1', onChange: (position: number) => tabAction(position) },
    { tabText: 'tab2', isTabHidden: true, onChange: (position: number) => tabAction(position) },
    { tabText: 'tab3', onChange: (position: number) => tabAction(position) },
    { tabText: 'tab4', isSelected: true, onChange: (position: number) => tabAction(position) },
  ]

  const linkTabs = [
    { tabText: 'tab1', href: '/another-path', isSelected: true },
    { tabText: 'tab2', href: '/another-path' },
    { tabText: 'tab3', href: '/another-path' },
  ]

  const tabAction = (position: number) => {
    return position
  }

  return (
    <ComponentWrapper title={'Tabs'}>
      <pre className='border p-4 whitespace-pre-wrap'>
        {`Propiedades del componente:

  interface ITab {
    tabText: string
    isTabHidden?: boolean
    isSelected?: boolean
    to?: string
    onChange?: (position: number) => void
  }

  interface TUiTabs {
    tabs: ITab[]
    size?: 'small' | 'large' // Default size: small
    className?: string
    theme: 'black'
    asLink?: boolean
  }
}`}
      </pre>

      <h4 className='mb-2 mt-8 text-black'>{'Button tabs (size="large")'}</h4>
      <UiTabs tabs={tabs} size='large' theme='black' />
      <UiButton className='block ml-auto mt-4' onClick={() => clipboard(`<UiTabs tabs={tabs} size='large' theme='black' />`)}>
        Copiar código
      </UiButton>

      <h4 className='mb-2 mt-8 text-black'>{'Link tabs (size="small" => default size)'}</h4>
      <UiTabs asLink tabs={linkTabs} theme='black' />
      <UiButton className='block ml-auto mt-4' onClick={() => clipboard(`<UiTabs asLink tabs={tabs} theme='black' />`)}>
        Copiar código
      </UiButton>
    </ComponentWrapper>
  )
}

export const SimpleAccordionView = () => {
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

export const MultipleAccordionView = () => {
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

export const ModalView = () => {
  const { clipboard } = useCopyToClipboard()
  const [modal, setModal] = useState<string>('')

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
    onClose?: () => void // Se ejecuta cuando se hace click fuera del modal
  }

Tambien puedes usar el componente UiModalFooter para agregar llamados a la acción (botones):

  type TUiModalFooter = {
    className?: string
  }

  <UiModalFooter className='flex justify-end'>{children}</UiModalFooter>
`}
      </pre>

      <h4 className='mt-8 text-black'>xs modal</h4>
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
        <UiButton className='block ml-auto mt-4' onClick={() => clipboard(`<UiModal open={false} size='xs' title='Titulo del modal'></UiModal>`)}>
          Copiar código
        </UiButton>
      </UiModal>

      <h4 className='mt-8 text-black'>sm modal (Default)</h4>
      <UiButton className='mt-4' onClick={() => setModal('sm')}>
        {'Abrir modal size="sm"'}
      </UiButton>
      <UiModal
        open={modal === 'sm'}
        title='Modal sm'
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

        <UiButton className='block ml-auto mt-4' onClick={() => clipboard(`<UiModal open={false} title='Titulo del modal'></UiModal>`)}>
          Copiar código
        </UiButton>
      </UiModal>

      <h4 className='mt-8 text-black'>md modal</h4>
      <UiButton className='mt-4' onClick={() => setModal('md')}>
        {'Abrir modal size="md"'}
      </UiButton>
      <UiModal
        open={modal === 'md'}
        size='md'
        title='Modal md'
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

        <UiButton className='block ml-auto mt-4' onClick={() => clipboard(`<UiModal open={false} size='md' title='Titulo del modal'></UiModal>`)}>
          Copiar código
        </UiButton>
      </UiModal>

      <h4 className='mt-8 text-black'>lg modal</h4>
      <UiButton className='mt-4' onClick={() => setModal('lg')}>
        {'Abrir modal size="lg"'}
      </UiButton>
      <UiModal
        open={modal === 'lg'}
        size='lg'
        title='Modal lg'
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

        <UiButton className='block ml-auto mt-4' onClick={() => clipboard(`<UiModal open={false} size='lg' title='Titulo del modal'></UiModal>`)}>
          Copiar código
        </UiButton>
      </UiModal>

      <h4 className='mt-8 text-black'>xl modal</h4>
      <UiButton className='mt-4' onClick={() => setModal('xl')}>
        {'Abrir modal size="xl"'}
      </UiButton>
      <UiModal
        open={modal === 'xl'}
        size='xl'
        title='Modal xl'
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

        <UiButton className='block ml-auto mt-4' onClick={() => clipboard(`<UiModal open={false} size='xl' title='Titulo del modal'></UiModal>`)}>
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

export const PaginationView = () => {
  const { clipboard } = useCopyToClipboard()
  const pagination = useUiPagination()

  return (
    <ComponentWrapper title={'Paginación'}>
      <pre className='border p-4 whitespace-pre-wrap'>
        {`Propiedades del componente:

  type TUiPagination {
    count: number
    page: number
    className?: string
    onChange?: (event: React.ChangeEvent<unknown>, value: number) => void
  }

  NOTA: usar el custom hook useUiPagination para el manejo de las paginas.
`}
      </pre>
      <h2 className='text-black mt-4'>Paginación</h2>

      <UiPagination className='mt-4 flex justify-center' count={12} page={pagination.page} onChange={pagination.onChange} />

      <UiButton
        className='block ml-auto mt-4'
        onClick={() => clipboard(`<UiPagination className='mt-4 flex justify-center' count={5} page={3} onChange={(event, page) => page} />`)}
      >
        Copiar código
      </UiButton>
    </ComponentWrapper>
  )
}

export const FormView = () => {
  const { clipboard } = useCopyToClipboard()
  const form = useForm()

  return (
    <ComponentWrapper title={'Formularios'}>
      <pre className='border p-4 whitespace-pre-wrap'>
        {`Propiedades del componente:
        
TGenericInput = {
  name: string
  label?: string 
  id?: string
  variant?: 'default' | 'outlined'
  icon?: ReactElement
  iconPosition?: 'left' | 'right'
  form: UseFormReturn<any>
  options?: RegisterOptions
  className?: string
  labelClassName?: string
  textarea?: boolean
  errorClassName?: string
  //Props para inputs..............................................
  inputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>>
  //Props para text area...........................................
  textareaProps?: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>>
  //Props para select..............................................
  selectOptions?: { value: any; label: string | number | undefined }[]
  withoutDefaultValue?: boolean //Si es true, no da la opcion 'Selecciona una opcion'
  selectProps?: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>>
}
`}
      </pre>

      <h4 className='mt-4 text-black'>InputField variants</h4>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-6'>
          <InputField
            name='default'
            label='Default variant'
            className='mt-4'
            inputProps={{ placeholder: 'Ingresa tu nombre' }}
            options={{ required: 'Este campo es requerido' }}
            form={form}
          />
          <UiButton
            className='block ml-auto mt-4'
            onClick={() =>
              clipboard(`
     <InputField
        name='name'
        label='Nombre'
        inputProps={{placeholder: 'Ingresa tu nombre' }}
        options={{ required: 'Este campo es requerido' }}
        form={form}
      />
              `)
            }
          >
            Copiar código
          </UiButton>
        </div>
        <div className='col-span-6'>
          <InputField
            name='outlined'
            label='Outlined variant'
            variant='outlined'
            className='mt-4'
            inputProps={{ placeholder: 'Ingresa tu nombre' }}
            options={{ required: 'Este campo es requerido' }}
            form={form}
          />
          <UiButton
            className='block ml-auto mt-4'
            onClick={() =>
              clipboard(`
     <InputField
        name='name'
        label='Nombre'
        variant='outlined'
        inputProps={{placeholder: 'Ingresa tu nombre' }}
        options={{ required: 'Este campo es requerido' }}
        form={form}
      />
              `)
            }
          >
            Copiar código
          </UiButton>
        </div>
      </div>

      <h4 className='mt-4 text-black'>InputField con iconos</h4>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-6'>
          <InputField
            name='left_icon'
            label='Icono a la izquierda'
            className='mt-4'
            icon={<FavoriteBorderIcon />}
            inputProps={{ placeholder: 'Ingresa tu nombre' }}
            options={{ required: 'Este campo es requerido' }}
            form={form}
          />
          <UiButton
            className='block ml-auto mt-4'
            onClick={() =>
              clipboard(`
     <InputField
        name='name'
        label='Nombre'
        icon='Search'
        inputProps={{placeholder: 'Ingresa tu nombre' }}
        options={{ required: 'Este campo es requerido' }}
        form={form}
      />
              `)
            }
          >
            Copiar código
          </UiButton>
        </div>
        <div className='col-span-6'>
          <InputField
            name='right_icon'
            label='Icono a la derecha'
            variant='outlined'
            className='mt-4'
            icon={<FavoriteBorderIcon />}
            iconPosition='right'
            inputProps={{ placeholder: 'Ingresa tu nombre' }}
            options={{ required: 'Este campo es requerido' }}
            form={form}
          />
          <UiButton
            className='block ml-auto mt-4'
            onClick={() =>
              clipboard(`
     <InputField
        name='name'
        label='Nombre'
        variant='outlined'
        icon='Search'
        iconPosition='right'
        inputProps={{placeholder: 'Ingresa tu nombre' }}
        options={{ required: 'Este campo es requerido' }}
        form={form}
      />
              `)
            }
          >
            Copiar código
          </UiButton>
        </div>
      </div>

      <h4 className='mt-4 text-black'>SelectField</h4>
      <SelectField
        name='options'
        label='Opciones'
        selectProps={{ className: 'w-full' }}
        options={{ required: 'Este campo es requerido' }}
        form={form}
        selectOptions={[
          { value: 'option1', label: 'Optción 1' },
          { value: 'option2', label: 'Optción 2' },
          { value: 'option3', label: 'Optción 3' },
        ]}
      />
      <UiButton
        className='block ml-auto mt-4'
        onClick={() =>
          clipboard(`
    <SelectField
        name='options'
        label='Opciones'
        selectProps={{ className: 'w-full' }}
        options={{ required: 'Este campo es requerido' }}
        form={form}
        selectOptions={[
          { value: 'option1', label: 'Optción 1' },
          { value: 'option2', label: 'Optción 2' },
          { value: 'option3', label: 'Optción 3' },
        ]}
      />
      `)
        }
      >
        Copiar código
      </UiButton>
    </ComponentWrapper>
  )
}

export const TypographyView = () => {
  return (
    <ComponentWrapper title={'Tipografía'}>
      <h1 className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. h1</h1>
      <h2 className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. h2</h2>
      <h3 className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. h3</h3>
      <h4 className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. h4</h4>
      <h5 className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. h5</h5>
      <h6 className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. h6</h6>
      <p className='subtitle1 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Subtitle1</p>
      <p className='subtitle2 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Subtitle2</p>
      <p className='body1 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. body1</p>
      <p className='body2 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. body2</p>
      <p className='microcopy mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. microcopy</p>
    </ComponentWrapper>
  )
}

const ComponentWrapper = (props: PropsWithChildren<{ title: string }>) => {
  return (
    <div className={'col-span-12 mb-8'}>
      <h3 className='mb-4 text-black'>{props.title}</h3>
      {props.children}
    </div>
  )
}
