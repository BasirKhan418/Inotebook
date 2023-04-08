import { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
const Noteitem = (props) => {
    const {note,updatenote,showAlert} =props;
    const context=useContext(noteContext);
    const{deleteNote}=context;
  return (
    <div className='col-md-3'>
      <div className="card my-3">
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <p className="card-text bg-primary text-light text-center" style={{padding:5,fontWeight:'bold',borderRadius:20}}>Tag:- {note.tag}</p>
    <div className="d-flex align-items-center">
    <i className="fa-solid fa-trash mx-3" onClick={()=>{
      deleteNote(note._id) 
      showAlert("Note Deleted","success")
    }}></i>
    <i className="fa-solid fa-pen-to-square mx-3" onClick={()=>{updatenote(note)}}></i>
    </div>
  </div>
</div>
    </div>
  )
}

export default Noteitem
