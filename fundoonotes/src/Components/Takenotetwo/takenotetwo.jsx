import React from 'react'
import '../Header/header.css'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ImageIcon from '@mui/icons-material/Image';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import PushPinIcon from '@mui/icons-material/PushPin';
import { postNote } from '../../Service/Dataservice';
import './takenotetwo.css'
import SimplePopper from '../ColorPopper/Popper';



function Takenotetwo(props) {
    
    const switchNoteTwoToNoteOne = () => {
        postNote(noteobj)
        .then((response) => {
            console.log(response); 
            props.listenToTakeNoteTwo()
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const [noteobj, setNoteObj] = React.useState({Title: "", Description: "", isArchived: "false", Color: ""})

    const takeTitle = (event) => {
        setNoteObj({
            ...noteobj, Title: event.target.value
        })
    }
    const takeDescription = (event) => {
        setNoteObj({
            ...noteobj, Description: event.target.value
        })
    }

    const takeIsArchieved = () => {
        setNoteObj({
            ...noteobj, isArchived: true
        })
    }

    const takeColor = (color) => {
        setNoteObj({
            ...noteobj, Color: color
        })
    }

     
    return (
        <div>
            <div className="takenotetwo" style={{backgroundColor: noteobj.Color}}>
                <div className="notetwoa">
                    <div className='title'>
                        <input className='note_title' type="text" style={{backgroundColor: noteobj.Color}}  onChange={takeTitle} placeholder = "Title"  />
                    </div>
                    <div><PushPinIcon /></div>
                </div>

                <div className="notetwob">
                <input className='note_description' type="text"  style={{backgroundColor: noteobj.Color}} onChange={takeDescription} placeholder = "Take a note..." />
                </div>

                <div className="notetwoc">
                    <div><AddAlertIcon fontSize='small' /></div>
                    <div><PersonAddAlt1Icon fontSize='small'/></div>
                    <div><SimplePopper fontSize='small' action = "create"  takeColor={takeColor} /> </div>
                    <div><ImageIcon fontSize='small'/></div>
                    <div  onClick={takeIsArchieved}><ArchiveIcon fontSize='small' /></div>
                    <div><MoreVertIcon fontSize='small' /></div>
                    <div><UndoIcon color="disabled"  fontSize='small'/></div>
                    <div><RedoIcon  color="disabled" fontSize='small' /></div>
                    <div><input className="closebutton" onClick={switchNoteTwoToNoteOne} type="button" value="Close" /></div>
                </div>
            </div>
        </div>
    )
}

export default Takenotetwo
