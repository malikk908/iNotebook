import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "64c01869a245342ed2e3d2e1",
            "user": "64bcec8c07d166ec65b8f55a",
            "title": "My title1",
            "description": "please wake up early27",
            "tag": "personal2",
            "date": "2023-07-25T18:46:01.189Z",
            "__v": 0
        },
        {
            "_id": "64c01869a245342ed2e3d2e2",
            "user": "64bcec8c07d166ec65b8f55a",
            "title": "My title2",
            "description": "please wake up early27",
            "tag": "personal2",
            "date": "2023-07-25T18:46:01.189Z",
            "__v": 0
        },
        {
            "_id": "64c01869a245342d2ea3d2e3",
            "user": "64bcec8c07d166ec65b8f55a",
            "title": "My title3",
            "description": "please wake up early27",
            "tag": "personal2",
            "date": "2023-07-25T18:46:01.189Z",
            "__v": 0
        },
        {
            "_id": "64c1869a245342ed2ea3d2e4",
            "user": "64bcec8c07d166ec65b8f55a",
            "title": "My title4",
            "description": "please wake up early27",
            "tag": "personal2",
            "date": "2023-07-25T18:46:01.189Z",
            "__v": 0
        },
        {
            "_id": "64c0189a245342ed2ea3d2e5",
            "user": "64bcec8c07d166ec65b8f55a",
            "title": "My title5",
            "description": "please wake up early27",
            "tag": "personal2",
            "date": "2023-07-25T18:46:01.189Z",
            "__v": 0
        },
        {
            "_id": "64c01869a245342d2ea32e6",
            "user": "64bcec8c07d166ec65b8f55a",
            "title": "My title6",
            "description": "please wake up early27",
            "tag": "personal2",
            "date": "2023-07-25T18:46:01.189Z",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(notesInitial)

    // Add a Note

    const addNote = (title, description, tag)=>{
        console.log("adding a new note")
        const note = {
            "_id": "64c01869a245342d2ea32e",
            "user": "64bcec8c07d166ec65b8f55a",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-07-25T18:46:01.189Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }

    // Delete a Note

    const deleteNote = (id)=>{
        // TODO: API call
        console.log("Deleting the note with id:" + id)
        setNotes(notes.filter(x => (x._id !== id)))
    }

    // Edit a Note

    const editNote = (id, title, description, tag)=>{

        // API call

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
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>

    )

}

export default NoteState;