// import { useState } from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "63d6c2a77b62ad815afd32d5",
      user: "63cefc624c3f3b2ce17bf253",
      title: "study 2",
      description: "Please study",
      tag: "personal 2",
      date: "2023-01-29T19:01:59.941Z",
      __v: 0,
    },
    {
      _id: "63dd250b4cf3d5462d04cf20",
      user: "63cefc624c3f3b2ce17bf253",
      title: "Rich",
      description: "Work hard",
      tag: "yoyopoyo",
      date: "2023-02-03T15:15:23.355Z",
      __v: 0,
    },
    {
      _id: "63dd250b4cf3d5462d04cf20",
      user: "63cefc624c3f3b2ce17bf253",
      title: "Rich",
      description: "Work hard",
      tag: "yoyopoyo",
      date: "2023-02-03T15:15:23.355Z",
      __v: 0,
    },
    {
      _id: "63dd250b4cf3d5462d04cf20",
      user: "63cefc624c3f3b2ce17bf253",
      title: "Rich",
      description: "Work hard",
      tag: "yoyopoyo",
      date: "2023-02-03T15:15:23.355Z",
      __v: 0,
    },
    {
      _id: "63dd250b4cf3d5462d04cf20",
      user: "63cefc624c3f3b2ce17bf253",
      title: "Rich",
      description: "Work hard",
      tag: "yoyopoyo",
      date: "2023-02-03T15:15:23.355Z",
      __v: 0,
    },
  ];

  const[notes,setNotes]= useState(notesInitial)
  return (
    <NoteContext.Provider value={{notes,setNotes}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
