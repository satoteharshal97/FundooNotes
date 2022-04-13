import React from 'react'

function Takenotethree(props) {
  return (
    <div className='notediv'  style={{width: "50px" , height: "50px", border: "1px solid grey"} }>
      {props.note.Title}
    </div>
  )
}

export default Takenotethree
