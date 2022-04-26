import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, fontSize } from '@mui/system';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import zIndex from '@mui/material/styles/zIndex';
import { menuItemUnstyledClasses } from '@mui/base';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Link } from '@mui/material';
import { CardMedia } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import logo from '../../../pages/signup/google.png'
import {usersignin} from '../../../Service/Userservice'

require("typeface-open-sans");




const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyles = makeStyles({

    root: {
        border: '1px solid rgb(218,218,218)',
        borderRadius: '10px',
        width: '33.33vw',
        height: '85vh',
        marginLeft: '33.33%',
        marginTop: '5%',
    },
    ele: {
        borderColor: '2px solid green ',
        background: 'Paper',
        marginTop: '35px',
        textAlign: 'center',
    },
    text1: {
        backgroundColor: 'white',
        textAlign: 'center',
        fontFamily: 'Google Sans',
        lineHeight: '1.3333',
        fontColor: '#202124',
        marginTop: '20px'
    },
    text2: {
        textAlign: 'center',
        fontFamily: 'Google Sans',
        lineHeight: '1.3333',
        height: '24px',
        marginTop: '12px',
    },
    textfieldbox: {
        width: '100%',
        maxWidth: '100%',
        marginTop: '35px',
        textAlign: 'center',
        fontFamily: 'Roboto'
    },
    textfield: {
        width: '100%',
        maxWidth: '80%',

    },
    passwordfieldbox: {
        width: '100%',
        maxWidth: '100%',
        marginTop: '10px',
        textAlign: 'center',
        fontFamily: 'Roboto'
    },
    ques: {
        textAlign: 'start',
        width: '80%',
        marginLeft: '10%',

    },
    buttontext: {
        marginTop: '45px',

    },
    createlink: {
        alignItems: 'center',
        marginLeft: '45px',
        width: '80%',
        fontFamily: 'Open sans',
        fontSize: '0.875rem',
        fontWeight: '500'
    },
    link2: {
        marginTop: '30px',
        fontSize: "14px",
        fontFamily: 'Open sans'

    }
});



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100vw',
    maxHeight: '100vh',
});




function SignInUI() {
    const classes = useStyles();

    const [signinobj, setSigninObj] = React.useState({ email: "", password: "" })

    const [emailerror, setEmailError] = React.useState(false)
    const [emailhelpertext, setEmailHelperText] = React.useState("")


    const [passworderror, setPasswordError] = React.useState(false)
    const [passwordhelpertext, setPasswordHelperText] = React.useState("")




    const takeemail = (event) => {
        setSigninObj({
            ...signinobj, email: event.target.value
        })
    }

    const takepassword = (event) => {
        setSigninObj({
            ...signinobj, password: event.target.value
        })
    }

    const onSubmit = () => {
        let emailregextest = emailRegex.test(signinobj.email)
        let passwordregextest = passwordRegex.test(signinobj.password)

        if (emailregextest === true) {
            setEmailError(false);
            setEmailHelperText("");
        }
        else {
            setEmailError(true)
            setEmailHelperText("Enter correct email")
        }
        if (passwordregextest === true) {
            setPasswordError(false);
            setPasswordHelperText("");
        }
        else {
            setPasswordError(true)
            setPasswordHelperText("Enter correct password")
        }

        if (emailregextest === true && passwordregextest === true) {
            usersignin(signinobj)
                .then((res) => {
                    //localStorage.setItem(keyName, keyValue)
                    localStorage.setItem("token", res.data.token);
                    console.log(res)
                })
                .catch((error) => { console.log(error) })
        }
    }

    return (

        <Box className={classes.root} >
            <Box className={classes.ele}>
               <img src={logo}/>
            </Box>
            <Box className={classes.text1}>
                <Typography variant='h5'>Sign in</Typography>
            </Box>

            <Box className={classes.text2}>
                <Typography >Use your Google Account</Typography>
            </Box>

            <Box className={classes.textfieldbox} >
                <TextField  onChange={takeemail} className={classes.textfield} id="fullWidth" label="Email" variant="outlined"  helperText={emailhelpertext} error={emailerror}/>
                <Box className={classes.ques}>
                    <Link href="#" underline="none"> Forgot Email?</Link>
                </Box>
            </Box>

            <Box className={classes.passwordfieldbox} >
                <TextField  onChange={takepassword} className={classes.textfield} id="fullWidth" label="Password" variant="outlined" helperText={passwordhelpertext} error={passworderror} />
                <Box className={classes.ques} >
                    <Link href="#" underline="none"> Forgot Password?</Link>
                </Box>
            </Box>

            <Box className={classes.text2}>
                <Box className={classes.link2}>
                    Not your computer? Use Guest mode to sign in privately
                </Box>

                <Box className={classes.ques} >
                    <Link href="#" underline="none"> Learn More</Link>
                </Box>
            </Box>

            <Box className={classes.buttontext}>
                <Stack className={classes.createlink} spacing={20} direction="row">
                    <Link href="#" underline="none" > Create Account</Link>
                    <Button onClick={onSubmit} variant="contained">Next</Button>
                </Stack>
            </Box>

        </Box>
    );
}

export default SignInUI
