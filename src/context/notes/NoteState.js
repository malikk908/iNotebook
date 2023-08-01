import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    const host = "http://localhost:5000"

    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)

    // Get all notes

    const getNotes = async ()=>{

        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET", 
           
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiY2VjOGMwN2QxNjZlYzY1YjhmNTVhIn0sImlhdCI6MTY5MDE3Nzk5NH0.QEVg1glrPm7tHveEANmokO1Fphp72NXFPuFX2qAc3Zo"
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
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiY2VjOGMwN2QxNjZlYzY1YjhmNTVhIn0sImlhdCI6MTY5MDE3Nzk5NH0.QEVg1glrPm7tHveEANmokO1Fphp72NXFPuFX2qAc3Zo"
            },
            
            body: JSON.stringify({title, description, tag}), 
          });
         

        console.log("adding a new note")
        const note = await response.json()
        setNotes(notes.concat(note))
    }

    // Delete a Note

    const deleteNote = async (id)=>{
        // TODO: API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE", 
           
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiY2VjOGMwN2QxNjZlYzY1YjhmNTVhIn0sImlhdCI6MTY5MDE3Nzk5NH0.QEVg1glrPm7tHveEANmokO1Fphp72NXFPuFX2qAc3Zo"
            },
            
            
          });
         const json = await response.json()
         console.log(json)
         

        console.log("Deleting the note with id:" + id)
        setNotes(notes.filter(x => (x._id !== id)))
    }

    // Edit a Note

    const editNote = async (id, title, description, tag)=>{

        // API call

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT", 
           
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiY2VjOGMwN2QxNjZlYzY1YjhmNTVhIn0sImlhdCI6MTY5MDE3Nzk5NH0.QEVg1glrPm7tHveEANmokO1Fphp72NXFPuFX2qAc3Zo"
            },
            
            body: JSON.stringify({title, description, tag}), 
          });
          const json = response.json();
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