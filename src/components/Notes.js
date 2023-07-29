import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem';
import Addnote from './Addnote';

const Notes = () => {

  const context = useContext(noteContext);
  const {notes} = context;
  return (
    <>
      <Addnote />
      <div className="row my-2">
        <h2>Your Notes</h2>
        {notes.map((x) => {
          return <Noteitem key={x._id} note={x} />;
        })}
      </div>
    </>
  )
}

export default Notes
