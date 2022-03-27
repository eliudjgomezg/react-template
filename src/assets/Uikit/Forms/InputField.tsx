import { FormError, GenericInput, LabeField, TGenericField } from './GenericFields'

const InputField: React.FC<TGenericField> = (props) => {
  return (
    <div className={props.className}>
      <LabeField {...props} />
      <GenericInput {...props} inputProps={{ ...props.inputProps }} />
      <FormError errorClassName={props.errorClassName} name={props.name} errors={props.form?.formState?.errors} />
    </div>
  )
}

export default InputField
