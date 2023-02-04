import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote}=context;
    const {note,updateNote}=props;
  return (
    <div className='col-md-3'>
      <div className="card my-3" >
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <div style={{ display: 'flex' }}>
      <i className="fa-regular fa-pen-to-square" style={{ marginRight: 'auto' }} onClick={()=>updateNote(note)} />
      <i className="fa-solid fa-trash-can" onClick={()=>{deleteNote(note._id)}} />
    </div>
        </div>
      </div>
    </div>
  )
}

export default Noteitem
