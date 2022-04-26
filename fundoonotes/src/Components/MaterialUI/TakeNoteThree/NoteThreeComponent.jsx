import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import Image from '@mui/icons-material/Image';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Button, Card, CardActions, CardContent, Checkbox, ListItemIcon, Paper, Stack } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BrushIcon from '@mui/icons-material/Brush';
import ImageIcon from '@mui/icons-material/Image';
import { fontSize } from '@mui/system';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import PushPinIcon from '@mui/icons-material/PushPin';
import ColorLens from '@mui/icons-material/ColorLens';
import NoteThreeUI from '../TakeNoteThree/NoteThreeUI';
import MuiDrawer from '@mui/material/Drawer';
import { updateMyNote } from '../../../Service/Dataservice';
import { archiveMyNote } from '../../../Service/Dataservice';
import Modal from '@mui/material/Modal';
import { deleteMyNote } from '../../../Service/Dataservice';
import SimplePopper from '../../ColorPopper/Popper';
import DeleteIcon from '@mui/icons-material/Delete';


import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import ListItemText from '@mui/material/ListItemText';
import { ListItem } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NotificationsIcon from '@mui/icons-material/Notifications';



const useStyles = makeStyles({
    takenoteone: {
        marginLeft: '7%',
        marginTop: '5px',
        width: '100%'
    },

    inputbox: {

        width: '100%',
        height: '40px'

    },


})

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function NoteThreeComponent(props) {
    const classes = useStyles();


    const style = {
        display: "flex",
        flexDirection: 'column',
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
        <Card sx={{ backgroundColor: props.note.Color }}>
            <CardContent >
                <Typography style={{ fontSize: '16px' }} gutterBottom variant="h5" component="div">
                    {props.note.Title}
                </Typography>
                <Typography style={{ fontSize: '18px' }} gutterBottom variant="body2" color="text.secondary">
                    {props.note.Description}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton  >
                    <AddAlertIcon size="small" style={{ fontSize: '18px' }} />
                </IconButton>
                <IconButton size="small">
                    <PersonAddAlt1Icon size="small" style={{ fontSize: '18px' }} />
                </IconButton >
                <IconButton size="small">
                    <SimplePopper action="update" updateNote={updateNote} style={{ fontSize: '18px' }} />
                </IconButton>
                <IconButton size="small">
                    <ImageIcon size="small" style={{ fontSize: '18px' }} />
                </IconButton>
                <IconButton size="small">
                    <ArchiveIcon size="small" onClick={isMyNoteArchived} style={{ fontSize: '18px' }} />
                </IconButton>
                <IconButton size="small">
                    <DeleteIcon size="small" onClick={isMyNoteDeleted} style={{ fontSize: '18px' }} />
                </IconButton>
                <IconButton size="small">
                    <MoreVertIcon size="small" style={{ fontSize: '18px' }} />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default NoteThreeComponent
