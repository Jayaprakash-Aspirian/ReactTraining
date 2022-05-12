import React, { ChangeEvent } from 'react'


interface NewNoteInputProps{
    addNote(note:string) : void;
}


const NewNoteInput : React.FC<NewNoteInputProps> = ({ addNote })=> {
  
  const [note,setNote] = React.useState("")

  const updateNote = (event:ChangeEvent<HTMLInputElement>) =>{
      setNote(event.target.value)
  }

  const onAddNoteClick = () =>{
      addNote(note)
      setNote("")
  }

  return (
    <div>
        <input onChange={updateNote} value={note}  type="text" name="note" placeholder='Type your notes here' />
        <button onClick={onAddNoteClick}>Add notes</button>
    </div>
  )
}





export default NewNoteInput;