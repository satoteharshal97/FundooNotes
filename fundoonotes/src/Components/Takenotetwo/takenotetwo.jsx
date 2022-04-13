import React from 'react'
import '../Header/header.css'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import PushPinIcon from '@mui/icons-material/PushPin';
import { postNote } from '../../Service/Dataservice';

function Takenotetwo(props) {
    const switchNoteTwoToNoteOne = () => {
        
        postNote(noteobj)
        .then((response) => {console.log(response); props.listenToTakeNoteTwo()})
        .catch((error) => {console.log(error)})
    }

    const [noteobj, setNoteObj] = React.useState({Title: "", Description: ""/* , isArchived: "false" */})

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

    const takeIsArchieved = (event) => {
        setNoteObj({
            ...noteobj, isArchived: event.target.value
        })
    }

    return (
        <div>
            <div className="takenotetwo">
                <div className="notetwoa">
                    <div><input type="text" onChange={takeTitle}/></div>
                    <div><PushPinIcon /></div>
                </div>

                <div className="notetwob">
                <input type="text" onChange={takeDescription}/>
                </div>

                <div className="notetwoc">
                    <div><AddAlertIcon /></div>
                    <div><PersonAddAlt1Icon /></div>
                    <div><ColorLensIcon /> </div>
                    <div><ImageIcon /></div>
                    <div><ArchiveIcon /></div>
                    <div><MoreVertIcon /></div>
                    <div><UndoIcon /></div>
                    <div><RedoIcon /></div>
                    <div className="closebutton" ><input onClick={switchNoteTwoToNoteOne} type="button" value="Close" /></div>
                </div>
            </div>
        </div>
    )
}

export default Takenotetwo
