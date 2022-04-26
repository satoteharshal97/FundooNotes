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


import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import ListItemText from '@mui/material/ListItemText';
import { ListItem } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SimplePopper from '../../ColorPopper/Popper';
import { postNote } from '../../../Service/Dataservice';

const useStyles = makeStyles({
    takenoteone: {
        left: '25%',
        marginLeft: '25%',
        marginTop: '5px',
        width: '100%'
    },
    takenotetwo: {
        marginTop: '10px',
        padding: '2px',
        marginLeft: '50%',
    },
    inputbox: {
        marginLeft: '7px',
        height: '40px'
    },
    inputs: {
        border: 'none',
        outline: 'none',
        width: '90%',
        height: '100%',
        fontSize: '18px'
    },

})

function NoteTwoComponent(props) {
    const classes = useStyles();



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

    const [noteobj, setNoteObj] = React.useState({ Title: "", Description: "", isArchived: "false", Color: "" })

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
        <Box sx={{ flexGrow: 1, backgroundColor: noteobj.Color }} className={classes.takenoteone} >
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <Card elevation={3}>
                        <Grid container spacing={2}>
                            <Grid item xs={11}>
                                <Box className={classes.inputbox} sx={{ backgroundColor: noteobj.Color }}>
                                    <input autofocus onChange={takeTitle} className={classes.inputs} fullWidth placeholder='Title' size="small" />
                                </Box>
                            </Grid>
                            <Grid item xs={1}>
                                <PushPinIcon />
                            </Grid>
                        </Grid>
                        <Grid>
                            <Grid item xs={12}  >
                                <Box className={classes.inputbox} sx={{ backgroundColor: noteobj.Color }} >
                                    <input autofocus onChange={takeDescription} className={classes.inputs} placeholder='Take a note ...' size="small" />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container xs={12}  >
                            <Grid item xs={10} >
                                <IconButton>
                                    <AddAlertIcon size="small" />
                                </IconButton>
                                <IconButton>
                                    <PersonAddAlt1Icon size="small" />
                                </IconButton>
                                <IconButton>
                                    <SimplePopper fontSize='small' action="create" takeColor={takeColor} />
                                </IconButton>
                                <IconButton>
                                    <ImageIcon size="small" />
                                </IconButton>
                                <IconButton>
                                    <ArchiveIcon onClick={takeIsArchieved} size="small" />
                                </IconButton>
                                <IconButton>
                                    <MoreVertIcon size="small" />
                                </IconButton>
                                <IconButton>
                                    <UndoIcon size="small" color='disabled' />
                                </IconButton>
                                <IconButton>
                                    <RedoIcon size="small" color='disabled' />
                                </IconButton>
                            </Grid>
                            <Grid item xs={2} >
                                <IconButton disableRipple='true'>
                                    <Button onClick={switchNoteTwoToNoteOne} size='small' color="inherit" variant="text" href="#text-buttons">Close</Button>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default NoteTwoComponent
