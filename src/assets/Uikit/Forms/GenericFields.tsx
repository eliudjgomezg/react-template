import { DetailedHTMLProps, ReactElement, TextareaHTMLAttributes } from 'react'

import { UseFormReturn, RegisterOptions, FieldError } from 'react-hook-form'

import { TColors } from '../colors'

export interface TGenericField {
  name: string
  label?: string
  id?: string
  variant?: 'default' | 'outlined'
  icon?: ReactElement
  iconColor?: TColors
  iconPosition?: 'left' | 'right'
  form: UseFormReturn<Record<string, string>>
  options?: RegisterOptions
  className?: string
  labelClassName?: string
  errorClassName?: string
  inputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  textarea?: boolean
  textareaProps?: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
  selectOptions?: Array<{ value: string | number; label: string | number | undefined }>
  withoutDefaultValue?: boolean
  selectProps?: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
}

interface TFormError {
  name: string
  errorClassName?: string
  errors: {
    [x: string]: FieldError
  }
}

export const LabeField: React.FC<TGenericField> = (props) => {
  return (
    <>
      {props.label && (
        <label className={`subtitle1 block font-semibold ${props.labelClassName}`} htmlFor={props.id}>
          {props.label}
        </label>
      )}
    </>
  )
}

export const GenericInput: React.FC<TGenericField> = (props) => {
  const selectedVariant = props?.variant === 'outlined' ? 'rounded-xl shadow-md' : 'border-b-2 border-gray-400'

  return (
    <>
      {props.textarea ? (
        <textarea
          {...props.textareaProps}
          {...props.form.register(props.name, props.options)}
          className={`focus:outline-none px-4 py-2 ${selectedVariant} ${props.textareaProps?.className ?? ''}`}
          id={props.id}
        />
      ) : (
        <>
          {props.icon ? (
            <div className={`flex items-center ${selectedVariant}`}>
              {props?.iconPosition !== 'right' && <div className='mr-1'>{props.icon}</div>}
              <input
                {...props.inputProps}
                {...props.form.register(props.name, props.options)}
                className={`h-8 w-full focus:outline-none ${props.iconPosition === 'right' ? 'px-4' : 'pr-4'} ${props.inputProps?.className ?? ''}`}
                id={props.id}
              />
              {props?.iconPosition === 'right' && <div className='mx-1'>{props.icon}</div>}
            </div>
          ) : (
            <input
              {...props.inputProps}
              {...props.form.register(props.name, props.options)}
              className={`h-8 w-full focus:outline-none px-4 ${selectedVariant} ${props.inputProps?.className ?? ''}`}
              id={props.id}
            />
          )}
        </>
      )}
    </>
  )
}

export const GenericSelect: React.FC<TGenericField> = (props) => {
  const selectedVariant = props?.variant === 'outlined' ? 'rounded-xl bg-white shadow-sm' : 'border-b border-black'

  return (
    <select
      {...props.form.register(props.name, props.options)}
      className={`md:h-10 h-8 inline-block align-middle appearance-none pl-4 pr-8 focus:outline-none ${selectedVariant} 
      ${props.selectProps?.className ?? ''}`}
      style={{
        background:
          'url(\'data:image/svg+xml,<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="%23bdbdbd" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>\') no-repeat right 0.5rem center/15px 15px',
      }}
      disabled={props?.selectProps?.disabled}
    >
      {!props.withoutDefaultValue && (
        <option className='body1' value=''>
          Selecciona una opción
        </option>
      )}
      {props.selectOptions?.map((option) => (
        <option className='body1' key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export const FormError: React.FC<TFormError> = (props) => {
  const errors = props?.errors[props.name]
  return <p className={`text-red-600 ${props.errorClassName}`}>{errors?.message}</p>
}
