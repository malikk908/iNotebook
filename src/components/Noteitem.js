import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import Editnote from './Editnote';

const Noteitem = (props) => {

    const context = useContext(noteContext);
    const {deleteNote} = context;
    const { note, updateNote } = props


    return (
        <>        
        <div className='col-md-3'>          
            
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                    <h5 className="card-title">{note.title}</h5>
                    <div><i className="fa-solid fa-pen-to-square mx-2" data-bs-toggle="modal" data-bs-target="#myModal" onClick={()=>{updateNote(note)}}></i>
                    <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i></div>
                    
                    </div>
                    <p className="card-text">{note.description}</p>
                    
                    
                </div>
            </div>

        </div>
        </>
    )
}

export default Noteitem
