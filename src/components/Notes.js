import React, { useContext, useEffect, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem';
import Addnote from './Addnote';
import { useNavigate } from 'react-router-dom'

const Notes = () => {

  let navigate = useNavigate();

  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;

  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes()
    }else{
      navigate("/login")
    }
    
  }, [])

  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

  const updateNote = (currentNote) => {
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  }

  const handleClick = (e) => {
    console.log("Updating the note...", note)
    editNote(note.id, note.etitle, note.edescription, note.etag)

  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }


    return (
      <>
        <Addnote />

        <div className="modal" id="myModal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Note</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form className='my-3'>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />

                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                  </div>


                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button disabled={note.etitle.length<5 || note.edescription.length<5 } onClick={handleClick} type="button" className="btn btn-primary" data-bs-dismiss="modal">Update Note</button>
              </div>
            </div>
          </div>
        </div>


        <div className="row my-2">
          <h2>Your Notes</h2>
          <div className="container">{notes.length === 0 && "No notes to display"}</div>
          {notes.map((x) => {
            return <Noteitem key={x._id} updateNote={updateNote} note={x} />;
          })}
        </div>
      </>
    )
  
}
export default Notes
