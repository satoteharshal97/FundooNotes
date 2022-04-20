import React from 'react'
import './takenotethree.css'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ImageIcon from '@mui/icons-material/Image';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PushPinIcon from '@mui/icons-material/PushPin';
import SimplePopper from '../ColorPopper/Popper';
import { updateMyNote } from '../../Service/Dataservice';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { archiveMyNote } from '../../Service/Dataservice';
import { formHelperTextClasses } from '@mui/material';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import { border } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteMyNote } from '../../Service/Dataservice';

function Takenotethree(props) {

  const style = {
    display: "flex",
    flexDirection:'column',
    justifyContent: 'space-between',
    alignItems: 'space-evenly',
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    height: 200,
    bgcolor: 'background.paper',
    border: 'transperent',
    outline: 'none',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
  };
  

  const [open, setOpen] = React.useState(false);
  const [editObj, setEditObj] = React.useState({})



  const handleOpen = (note) => {
    setOpen(true);
    setEditObj(note)
    console.log(note)
  }
  const handleClose = () => setOpen(false);



  const updateNote = (color) => {
    let updateNote = { Title: props.note.Title, Description: props.note.Description, Color: color }
    updateMyNote(updateNote, props.note._id)
      .then((response) => { console.log(response); props.listenToTakeNoteThree() })
      .catch((error) => { console.log(error) })
  }



  const takeTitle = (event) => {
    setEditObj(previousState => ({ ...previousState, Title: event.target.value }))
  }

  const takeDescription = (event) => {
    setEditObj(previousState => ({ ...previousState, Description: event.target.value }))
  }



  const onSubmit = () => {
    updateMyNote(editObj, props.note._id)
      .then((response) => { console.log(response); props.listenToTakeNoteThree() })
      .catch((error) => { console.log(error) })
    setOpen(false);
  }

  const isMyNoteArchived = () => {
    console.log('archived note')
    archiveMyNote(props.note._id)
      .then((response) => { console.log(response) })
      .catch((error) => { console.log(error) })
  }

  const isMyNoteDeleted = () => {
    console.log('deleted note')
    deleteMyNote(props.note._id)
      .then((response) => { console.log(response) })
      .catch((error) => { console.log(error) })
  }


  return (
    <div className='note' style={{ backgroundColor: props.note.Color }}>
      <div className='note-title' onClick={() => handleOpen(props.note)} >
        <div className='note-title'>{props.note.Title} </div>
        <div className='pushpin'><PushPinIcon /></div>
      </div>

      <div className='note-description' onClick={() => handleOpen(props.note)} >{props.note.Description}</div>

      <div className='note-icons'>
        <div><AddAlertIcon /></div>
        <div><PersonAddAlt1Icon /></div>
        <div><SimplePopper action="update" updateNote={updateNote} /> </div>
        <div><ImageIcon /></div>
        <div ><ArchiveIcon onClick={isMyNoteArchived} /></div>
        <div><DeleteIcon onClick={isMyNoteDeleted} /></div>
        <div><MoreVertIcon /></div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ backgroundColor: props.note.Color }}>
          <div className='popup-title-parent'>
            <div><input className='popup-title' defaultValue={editObj.Title} onChange={takeTitle} style={{ backgroundColor: props.note.Color }}></input></div>
            <div><PushPinIcon /></div></div>
          <div>
            <input className='popup-description' defaultValue={editObj.Description} onChange={takeDescription} style={{ backgroundColor: props.note.Color }}></input>
          </div>

          <div className='notebox' >
            <AddAlertIcon fontSize="small"/>
            <PersonAddAlt1Icon fontSize="small" />
            <SimplePopper  fontSize="small"/* action="update" updateNote={updateNote}  */></SimplePopper>
            <ImageIcon  fontSize="small"/>
            <ArchiveIcon  fontSize="small"/>
            <MoreVertIcon  fontSize="small"/>
            <UndoIcon  color="disabled" fontSize="small"/>
            <RedoIcon color="disabled" fontSize="small"/>
            <button className='notebox-close'style={{ backgroundColor: props.note.Color}} onClick={onSubmit} >Close</button>
          </div>

        </Box>
      </Modal>

    </div>


  )
}

export default Takenotethree
