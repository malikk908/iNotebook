import React, { useContext }  from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem';

const Notes = () => {

    const context = useContext(noteContext);
    const {notes, setNotes} = context;
  return (
    <div className="row my-2">
      <h2>Your Notes</h2>
      {notes.map((x)=>{
        return <Noteitem key={x._id} note={x}/>;
      })}
      </div>
  )
}

export default Notes
