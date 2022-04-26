import * as React from 'react';
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

const drawerWidth = 200;

const openedMixin = (theme) => ({
    position: "fixed",
    marginTop: 58,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    position: "fixed",
    marginTop: 58,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


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
    textfield: {
        border: 'none',
        outline: "none",
        width: '100%',
        height: '6vh ',
        fontSize: "18px"
    },
    takenoteone: {
        marginTop: '5px'
    },
    takenotetwo: {
        marginTop: '10px',
        padding: '2px',

    },
    notethree: {
        marginTop: '10px',
    },
   
})
function HeaderUI() {
    const classes = useStyles();
    /* 
        const Item = styled(Paper)(({ theme }) => ({
    
            backgroundColor: 'yellow',
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: 'green',
            marginTop: '5px'
        })); */


    return (
        <Box className={classes.textbox}>
           {/*  <Box sx={{ flexGrow: 1 }}  >
                <AppBar position="static" className={classes.appbar}>
                    <Toolbar variant="dense">
                        <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon className={classes.menuicon} />
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
            </Box> */}
            <Box sx={{ flexGrow: 1 }} className={classes.takenoteone}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Box sx={{ display: 'flex' }}>
                            <CssBaseline />
                            <Drawer variant="permanent" /* open={props.drawer} */>
                                <List >
                                    <ListItem button /* onClick={() => props.listenToArchive('note')} */  >
                                        <ListItemIcon>
                                            <LightbulbIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Notes" />
                                    </ListItem>
                                    <ListItem button   >
                                        <ListItemIcon>
                                            <NotificationsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Reminders" />
                                    </ListItem>
                                    <ListItem button   >
                                        <ListItemIcon>
                                            <EditIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Edit labels" />
                                    </ListItem>
                                    <ListItem button  /* onClick={() => props.listenToArchive('archive')} */  >
                                        <ListItemIcon>
                                            <ArchiveIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Archive" />
                                    </ListItem>
                                    <ListItem button  /* onClick={() => props.listenToArchive('delete')} */ >
                                        <ListItemIcon>
                                            <DeleteIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Bin" />
                                    </ListItem>
                                </List>
                            </Drawer>
                        </Box >
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <Grid container spacing={2}>
                                <Grid item xs={9}>
                                    <Box >
                                        <input className={classes.textfield} type="text" placeholder='Take a note ...' />
                                    </Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <IconButton>
                                        <CheckBoxIcon />
                                    </IconButton>
                                    <IconButton>
                                        <BrushIcon />
                                    </IconButton>
                                    <IconButton>
                                        <ImageIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Card  >
                        <Paper elevation={5} className={classes.takenotetwo}>
                            <Box >
                                <Grid container spacing={2}>
                                    <Grid item xs={11}>
                                        <Box >
                                            <input className={classes.textfield} type="text" placeholder='Title' />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <PushPinIcon />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box >
                                            <input className={classes.textfield} type="text" placeholder='Take a note' />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <IconButton>
                                            <AddAlertIcon size="small" />
                                        </IconButton>
                                        <IconButton>
                                            <PersonAddAlt1Icon size="small" />
                                        </IconButton>
                                        <IconButton>
                                            <ColorLens size="small" />
                                        </IconButton>
                                        <IconButton>
                                            <ImageIcon size="small" />
                                        </IconButton>
                                        <IconButton>
                                            <ArchiveIcon size="small" />
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
                                    <Grid item xs={2}>
                                        <Button size='small' color="inherit" variant="text" href="#text-buttons">Close</Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                        <Grid className={classes.notethree}>
                            <Grid elevation={0} sx={{ marginTop: '30px' }}>
                                <NoteThreeUI />
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Box>
        </Box>



    )
}

export default HeaderUI
