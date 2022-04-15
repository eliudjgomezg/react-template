import { useCopyToClipboard } from 'hooks/useCopyToClipboard'
import { useForm } from 'react-hook-form'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

import UiButton from '../UiButton'
import { ComponentWrapper } from '../UiKitPage/UiPageLayout'
import InputField from './InputField'
import SelectField from './SelectField'

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
