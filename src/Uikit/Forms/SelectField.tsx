import { FormError, GenericSelect, LabeField, TGenericField } from './GenericFields'

const SelectField: React.FC<TGenericField> = (props) => {
  return (
    <div className={props.className}>
      <LabeField {...props} />
      <GenericSelect {...props} inputProps={{ ...props.inputProps }} />
      <FormError name={props.name} errors={props.form?.formState?.errors} />
    </div>
  )
}

export default SelectField
