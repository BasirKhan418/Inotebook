import React, { useEffect } from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
const Notes = () => {
    const context=useContext(noteContext);
    const{notes,getnotes}=context;
    useEffect(()=>{
   getnotes()
    // eslint-disable-next-line
    },[])
  return (
    <>
    <AddNote/>
    <div>
        <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note)=>{
          return <Noteitem note={note} key={note._id}/>
        })}
    </div>
    </div>
    </>
  )
}

export default Notes

