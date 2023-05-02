import { useState } from "react";
import Student from "./Students";

function App() {
  const [studentName, setStudentName] = useState('bilal');
 function update() {
  setStudentName('khokhar');
 }
  return (
    <>
    <Student name={studentName} />
    <button onClick={update}>UpdateName</button>
    </>
   );
}

export default App;
