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


const useStyles = makeStyles({
    textfield: {
        border: 'none',
        outline: "none",
        width: '100%',
        height: '6vh ',
        fontSize: "18px",
        boxShadow:'5'
        
    },
    takenoteone: {
        marginTop: '5px',
        left:'25%', 
        marginLeft:'25%', 
        width:'100%'
        
    },
})

function NoteOneComponent(props) {
    const classes = useStyles();

    const switchNote = () => {
        props.listenToTakeNoteOne();
    }

    return (
        <Box sx={{ flexGrow: 1 }} className={classes.takenoteone}>
            <Grid container spacing={2} onClick ={switchNote}>
                <Grid item xs={5}>
                    <Card elevation={3}>
                        <Grid container spacing={2}>
                            <Grid item xs={9}>
                                <Box >
                                    <input autofocus className={classes.textfield} type="text" placeholder='Take a note ...' />
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <IconButton>
                                    <CheckBoxIcon size='small'/>
                                </IconButton>
                                <IconButton>
                                    <BrushIcon size='small' />
                                </IconButton>
                                <IconButton>
                                    <ImageIcon size='small' />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Card  >
                </Grid>
            </Grid>
        </Box>


    )
}

export default NoteOneComponent
