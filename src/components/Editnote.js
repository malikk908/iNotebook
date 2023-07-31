// import React, {useState, useContext} from 'react'
// import noteContext from '../context/notes/noteContext'

// const Editnote = (props) => {

//     const { note,  onChange } = props

   
//     return (
//         <div class="modal" id="myModal" tabindex="-1">
//             <div class="modal-dialog">
//                 <div class="modal-content">
//                     <div class="modal-header">
//                         <h5 class="modal-title">Edit Note</h5>
//                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                     </div>
//                     <div class="modal-body">
//                         <form className='my-3'>
//                             <div className="mb-3">
//                                 <label htmlFor="title" className="form-label">Title</label>
//                                 <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />

//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="description" className="form-label">Description</label>
//                                 <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
//                             </div>

//                             <div className="mb-3">
//                                 <label htmlFor="tag" className="form-label">Tag</label>
//                                 <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
//                             </div>

                            
//                         </form>
//                     </div>
//                     <div class="modal-footer">
//                         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                         <button type="button" class="btn btn-primary">Update Note</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Editnote
