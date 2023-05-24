import React from 'react'

const Form = () => {
    const [FormText , SetFormText] = React.useState('')
    const [FormAge , SetFormAge] = React.useState(40);
  function UpdateFormText(e){
    SetFormText(e.target.value);
  }
  function ageInc() {
    SetFormAge(FormAge => FormAge + 1)
  }
    return (
    <div>
        <input 
        type="text"
        value={FormText}
        onChange={UpdateFormText}
        />
        <button onClick={ageInc}>Age</button>
        <p>HEY! {FormText} Your Age is {FormAge}</p>
    </div>
  )
}
export default Form;