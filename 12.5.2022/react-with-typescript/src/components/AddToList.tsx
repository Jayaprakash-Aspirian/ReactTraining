import React, { useState } from 'react'
import {IState as Props} from "../App"

interface IProps { 
    people :Props["people"]
    setPeople : React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList:React.FC<IProps> = ({people,setPeople}) => {

  const [input,setInput]= useState({
      name:"",
      age:"",
      img:"",
      note:"",
  })

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void=> {
      setInput({
          ...input,
          [e.target.name]:e.target.value

      })
  }

  const handleClick = () => {
    if(!input.name || !input.age || !input.img ){
        return 
    }
    setPeople([
        ...people,
        {
            name:input.name,
            age:parseInt(input.age),
            url:input.img,
            note:input.note
        }
    ]);

  }

  return (
    <div className='AddToList'>
        <input type="text" placeholder='name' className='AddToList-input' value={input.name} name="name" onChange={handleChange}/>
        <input type="number" placeholder='age' className='AddToList-input' value={input.age} name="age"  onChange={handleChange}/>
        <input type="text" placeholder='image url' className='AddToList-input' value={input.img} name="img"  onChange={handleChange}/>
        <textarea placeholder='notes' className='AddToList-input' value={input.note} name="note" onChange={handleChange}/>
        <button className='AddToList-btn' onClick={handleClick}>
            Add Detail
        </button>
    </div>
  )
}

export default AddToList;