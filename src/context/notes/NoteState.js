// import { useState } from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "63d6c2a77ab62ad815afd32d5",
      user: "63cefc624c3f3b2ce17bf253",
      title: "study 2",
      description: "Please study",
      tag: "personal 2",
      date: "2023-01-29T19:01:59.941Z",
      __v: 0,
    },
    {
      _id: "63dd250b4chf3d5462d04cf20",
      user: "63cefc624c3f3b2ce17bf253",
      title: "Rich",
      description: "Work hard",
      tag: "yoyopoyo",
      date: "2023-02-03T15:15:23.355Z",
      __v: 0,
    },
    {
      _id: "63dd250b4cf3d546g2d04cf20",
      user: "63cefc624c3f3b2ce17bf253",
      title: "Rich",
      description: "Work hard",
      tag: "yoyopoyo",
      date: "2023-02-03T15:15:23.355Z",
      __v: 0,
    },
    {
      _id: "63dd250b4cf3d5462df04cf20",
      user: "63cefc624c3f3b2ce17bf253",
      title: "Rich",
      description: "Work hard",
      tag: "yoyopoyo",
      date: "2023-02-03T15:15:23.355Z",
      __v: 0,
    },
    {
      _id: "63dd250b4cf3d5462dd04cf20",
      user: "63cefc624c3f3b2ce17bf253",
      title: "Rich",
      description: "Work hard",
      tag: "yoyopoyo",
      date: "2023-02-03T15:15:23.355Z",
      __v: 0,
    },
  ];

  const[notes,setNotes]= useState(notesInitial)

  //Add a Note
  const addNote = (title,description,tag)=>{
    console.log("Adding a new note");
   const note={
    _id: "63dd250b4cf3d5462ddf04cf20",
    user: "63cefc624c3f3b2cef17bf253",
    title: title,
    description: description,
    tag: tag,
    date: "2023-02-03T15:15:23.355Z",
    __v: 0,
  };
    setNotes(notes.concat(note))
  }
  //Delete a Note
  const deleteNote = (id)=>{
    console.log("Delete note with"+id);
    const newNotes = notes.filter((note)=>{ return note._id!==id})
    setNotes(newNotes)
  }
  
  //Edit a Note
  const editNote = (id, title, description, tag)=>{

  }
  return (
    <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
