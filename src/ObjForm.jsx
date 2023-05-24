import React from 'react'

const ObjForm = () => {
    const [FormObject, setFormObject] = React.useState({
        firstName: "Bilal",
        lastName: "Ali",
        email: "kkmuhammadbilal2@gmail.com",
    })
  return (
    <div>
        <label>First Name :</label> 
        <input
        type="text"
        value={FormObject.firstName}
        onChange={(e)=>{
            setFormObject({
                ...FormObject,
                firstName: e.target.value
            });
        }}
        />

        <label>Last Name :</label>
        <input
        type="text"
        value={FormObject.lastName}
        onChange={(e)=>{
            setFormObject({
                ...FormObject,
                lastName: e.target.value
            });
        }}
        />

        <label>Email:</label>
        <input
        type="text"
        value={FormObject.email}
        onChange={(e)=>{
            setFormObject({
                ...FormObject,
                email: e.target.value
            });
        }}
        />
        <p>First name is {FormObject.firstName}</p>
        <p>Last name is {FormObject.lastName}</p>
        <p>Email is {FormObject.email}</p>
    </div>
  )
}

export default ObjForm;