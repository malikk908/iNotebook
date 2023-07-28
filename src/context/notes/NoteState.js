import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "64c01869a245342ed2e3d2e",
            "user": "64bcec8c07d166ec65b8f55a",
            "title": "My title37",
            "description": "please wake up early27",
            "tag": "personal2",
            "date": "2023-07-25T18:46:01.189Z",
            "__v": 0
        },
        {
            "_id": "64c01869a45342ed2ea3d2e",
            "user": "64bcec8c07d166ec65b8f55a",
            "title": "My title37",
            "description": "please wake up early27",
            "tag": "personal2",
            "date": "2023-07-25T18:46:01.189Z",
            "__v": 0
        },
        {
            "_id": "64c01869a245342d2ea3d2e",
            "user": "64bcec8c07d166ec65b8f55a",
            "title": "My title37",
            "description": "please wake up early27",
            "tag": "personal2",
            "date": "2023-07-25T18:46:01.189Z",
            "__v": 0
        },
        {
            "_id": "64c1869a245342ed2ea3d2e",
            "user": "64bcec8c07d166ec65b8f55a",
            "title": "My title37",
            "description": "please wake up early27",
            "tag": "personal2",
            "date": "2023-07-25T18:46:01.189Z",
            "__v": 0
        },
        {
            "_id": "64c0189a245342ed2ea3d2e",
            "user": "64bcec8c07d166ec65b8f55a",
            "title": "My title37",
            "description": "please wake up early27",
            "tag": "personal2",
            "date": "2023-07-25T18:46:01.189Z",
            "__v": 0
        },
        {
            "_id": "64c01869a245342d2ea32e",
            "user": "64bcec8c07d166ec65b8f55a",
            "title": "My title37",
            "description": "please wake up early27",
            "tag": "personal2",
            "date": "2023-07-25T18:46:01.189Z",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(notesInitial)



    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>

    )

}

export default NoteState;