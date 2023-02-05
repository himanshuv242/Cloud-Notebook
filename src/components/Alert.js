import React from 'react'

function Alert(props) {
  
    const capitalize = (word)=>{
      if(word==="danger")
  {
    word="error:";
  }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    //props.alert used to see if props.alert is not null.
    //NOTE: This happens because all the jsx will be converted to javascript calls.
    <div>
   {props.alert &&  <div className={`alert fixed-bottom  alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>              {props.alert.msg}
  </div>}
  </div>
  )
}

export default Alert