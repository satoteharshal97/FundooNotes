import React from "react";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BrushIcon from '@mui/icons-material/Brush';
import ImageIcon from '@mui/icons-material/Image';
import './takenoteone.css'


export default function Takenoteone(props) {
    const switchNote = () => {
        props.listenToTakeNoteOne();
    }

  return (
    <div>
        <div  onClick ={switchNote} className="takenoteone">
                <div className="noteonea">
                    <div className="item1 new">Take a note ...</div>
                </div>
                <div className="noteoneb">
                    <div className="item2 new"><CheckBoxIcon /> </div>
                    <div className="item3 new"><BrushIcon /></div>
                    <div className="item4 new"><ImageIcon/></div>
                </div>

            </div>
    </div>
  )
}
