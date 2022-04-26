import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { Grid, Paper } from '@mui/material';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PushPinIcon from '@mui/icons-material/PushPin';
import { IconButton } from '@mui/material';
import { Button } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import DeleteIcon from '@mui/icons-material/Delete';
import SimplePopper from '../../ColorPopper/Popper';
import { deleteMyNote } from '../../../Service/Dataservice';
import { archiveMyNote } from '../../../Service/Dataservice';
import { updateMyNote } from '../../../Service/Dataservice';
import Modal from '@mui/material/Modal';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';





function NoteThreeUI(props) {

  const classes = useStyles(props);
  const useStyles = makeStyles({
    root: {
      width: '400px',
      height: '150px',
      border: '1px',
      backgroundColor: props.note.Color


    },
    textfield: {
      border: 'none',
      outline: "none",
      width: '100%',
      height: '6vh ',
      fontSize: "18px"
    },

  });

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
    <Box className={classes.root} >
      <Paper elevation={5} className={classes.noteui}  >
        <Box >
          <Grid container spacing={2}>
            <Grid item xs={11}>
              <Box onClick={() => handleOpen(props.note)}>
                <div>
                  {props.note.Title}
                </div>

              </Box>
            </Grid>
            <Grid item xs={1}>
              <PushPinIcon />
            </Grid>
            <Grid item xs={12}>
              <Box onClick={() => handleOpen(props.note)} >
                <div>{props.note.Description}</div>
              </Box>
            </Grid>

            <Grid item xs={10} >
              <IconButton>
                <AddAlertIcon size="small" />
              </IconButton>
              <IconButton>
                <PersonAddAlt1Icon size="small" />
              </IconButton>
              <IconButton>
                <SimplePopper  size="small" action="update" updateNote={updateNote} />
              </IconButton>
              <IconButton>
                <ImageIcon size="small" />
              </IconButton>
              <IconButton>
                <ArchiveIcon size="small"  onClick={isMyNoteArchived}/>
              </IconButton>
              <IconButton>
                <DeleteIcon size="small" onClick={isMyNoteDeleted} />
              </IconButton>
              <IconButton>
                <MoreVertIcon size="small" />
              </IconButton>
            </Grid>
            <Grid item xs={2}>
              <Button size='small' color="inherit" variant="text" href="#text-buttons">Close</Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  )
}

export default NoteThreeUI
