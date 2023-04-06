import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesIntial = [];
  const [notes, setNotes] = useState(notesIntial);

  // add note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyMDVhOGI4MzQxNjMxMWU5YjJlNDRhIn0sImlhdCI6MTY4MDExMjEwMX0.J2mw61MkaDhSXTTxTGjm-B1nFQXEoHq2Gpmjptl3kms",
      },
      body: JSON.stringify({ title, description, tag }),
    });
  };
  //fetch all notes getnotes
  const getnotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyMDVhOGI4MzQxNjMxMWU5YjJlNDRhIn0sImlhdCI6MTY4MDExMjEwMX0.J2mw61MkaDhSXTTxTGjm-B1nFQXEoHq2Gpmjptl3kms",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyMDVhOGI4MzQxNjMxMWU5YjJlNDRhIn0sImlhdCI6MTY4MDExMjEwMX0.J2mw61MkaDhSXTTxTGjm-B1nFQXEoHq2Gpmjptl3kms",
      },
    });
    const json = response.json();
    console.log(json);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
    console.log(id);
  };
  //Edit Note
  const editNote = async (id, title, description, tag) => {
    //api call
    const response = await fetch(
      `${host}/api/notes/updatenote/64254d916971f03c6ba85bb4`,
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyMDVhOGI4MzQxNjMxMWU5YjJlNDRhIn0sImlhdCI6MTY4MDExMjEwMX0.J2mw61MkaDhSXTTxTGjm-B1nFQXEoHq2Gpmjptl3kms",
        },
        body: JSON.stringify({ title, description, tag }),
      }
    );
    const json = response.json();
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, getnotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
