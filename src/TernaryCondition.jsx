import React from 'react'
const  products =  [
    {
        id:Math.random(),
        title: 'garlic',
        isFruit:false,
    },
    {
        id:Math.random(),
        title: 'onion',
        isFruit:false,
    },
    {
        id:Math.random(),
        title: 'Apple',
        isFruit:true,
    },
    {
        id:Math.random(),
        title: 'orange',
        isFruit:true,
    }
]
const TernaryCondition = () => {

    const frutItems = products.map((item)=>(
        <li
        key={item.id}
        //using ternary condition
        style={{
          color: item.isFruit ? 'red' : 'green'
        }}
      >
            {item.title}
        </li>
    ))
    return(
        <ul>
            {frutItems}
        </ul>
    );
    
}

export default TernaryCondition;