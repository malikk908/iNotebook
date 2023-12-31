import NoteContext from "./noteContext";
import { useState, useContext } from "react";
import alertContext from '../alert/alertContext';


const NoteState = (props) => {

  const context = useContext(alertContext);
  const {showAlert} = context;

    const host = "http://localhost:5000"

    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)

    // Get all notes

    const getNotes = async ()=>{

        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET", 
           
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem('token')
            },
            
            
          });
         const json = await response.json()
         console.log(json)
         setNotes(json)
   
    }

    // Add a Note

    const addNote = async (title, description, tag)=>{

        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST", 
           
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem('token')
            },
            
            body: JSON.stringify({title, description, tag}), 
          });
         

        console.log("adding a new note")
        const json = await response.json()
        setNotes(notes.concat(json.savedNote))
        
        
        showAlert(`${json.message}`,'success')
        
    }

    // Delete a Note

    const deleteNote = async (id)=>{
        // TODO: API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE", 
           
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem('token')
            },
            
            
          });
         const json = await response.json()
         console.log(json)
         

        console.log("Deleting the note with id:" + id)
        setNotes(notes.filter(x => (x._id !== id)))
        showAlert(`${json.message}`,'success')
    }

    // Edit a Note

    const editNote = async (id, title, description, tag)=>{

        // API call

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT", 
           
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem('token')
            },
            
            body: JSON.stringify({title, description, tag}), 
          });
          const json = await response.json();
          showAlert(`${json.message}`,'success')
          getNotes();
          

        //Logic to edit in client
        for (let i = 0; i < notes.length; i++) {
            const element = notes[i];
            if(element._id === id){
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
            
        }
    }



    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>

    )

}

export default NoteState;