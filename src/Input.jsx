import React from "react";

const Input = () => {
  const [text, setText] = React.useState("");
  function handleChange(e) {
    const upperCase = e.target.value.toUpperCase()
    setText(upperCase);
  } 
  function resetInput (){
    setText("");
  }
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>UPDATED TEXT : {text}</p>
      <button onClick={resetInput}>Reset Input</button>
    </div>
  );
};

export default Input;
