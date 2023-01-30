function RadioButton(props){
  const { label, checked, onChange } = props;

  return (
    <label>
      <input
        type='radio'
        name='unitType'
        checked={checked}
        onChange={onChange}
      />
      { label }
    </label>
  )
}

export default RadioButton
