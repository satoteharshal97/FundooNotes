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
    textbox:{
        /* '@media (maxWidth: 500px)' : {
            border: '10px solid yellow !important',
            backgroundColor:'yellow !important',
          }, */
          '@media (min-width: 600px)': {
            backgroundColor:'yellow !important',
            
          },
          border:'1px solid green',
    },
    appbar: {
        border: '1px solid white',
        backgroundColor: 'white !important',
        height: '60px',
        

    },
    searchpaper: {
        boxShadow: '3',
        width: '650px',
        marginLeft: '100px'
    },
    keep: {
        color: "black",

    },
    keepicon: {

    },
    menuicon: {
        color: "black",

    },
    thirdbox: {

        width: '150px',
        marginLeft: '100px'

    },
    lastbox: {
        width: '110px',
        marginLeft: '100px'
    },
})

function HeaderComponent(props) {

    
    const callFromHeader = () => {
        props.listenToHeader()
     }
    const classes= useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}  >
                <AppBar position="static" className={classes.appbar}>
                    <Toolbar variant="dense">
                        <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon className={classes.menuicon} onClick= {callFromHeader } />
                        </IconButton>
                        <Box className={classes.keepicon}>
                            <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"></img>
                        </Box>

                        <Typography className={classes.keep} variant="h6" component="div">
                            Keep
                        </Typography>
                        <Box className={classes.searchpaper}>
                            <Paper>
                                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search"
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                            </Paper>
                        </Box>

                        <Box className={classes.thirdbox} >
                            <Stack spacing={2} direction='row'>
                                <IconButton >
                                    <RefreshIcon />
                                </IconButton>
                                <IconButton >
                                    <ViewStreamIcon />
                                </IconButton>
                                <IconButton >
                                    <SettingsIcon />
                                </IconButton>
                            </Stack>
                        </Box>

                        <Box className={classes.lastbox}>
                            <Stack spacing={2} direction='row'>
                                <IconButton >
                                    <AppsIcon />
                                </IconButton>
                                <IconButton >
                                    <Avatar>H</Avatar>
                                </IconButton>
                            </Stack>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
  )
}

export default HeaderComponent
