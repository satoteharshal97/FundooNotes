import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, fontSize } from '@mui/system';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import zIndex from '@mui/material/styles/zIndex';
import { menuItemUnstyledClasses } from '@mui/base';
import { Avatar } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import Card from '@mui/material/Card';
import { CardMedia } from '@mui/material';
import { Link } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import logo from '../../../pages/signup/google.png';
import BigGoogle from '../../../pages/signup/big_google.png';
import { usersignup } from '../../../Service/Userservice';


const nameRegex = /^[a-zA-Z]{4,}$/;
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;



const useStyles = makeStyles({
    container: {
        direction: 'row',
        border: '1px solid rgb(218,218,218)',
        borderRadius: '10px',
        width: '60vw',
        height: '90vh',
        marginLeft: '20%',
        marginTop: '5%',
    },
    createlink: {
        height: '100%',
        direction: 'row',
    },
    secondbox: {
        direction: 'column',
        textAlign: 'center'
    },
    firsthalf: {
        height: '100%',
        width: '50%',
    },
    secondhalf: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%',
        width: '50%',
    },
    firsthalfchild: {

        height: '80%',
        margin: '10% ',
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',


    },
    nameinput: {
        width: '100%',


    }

})


function SignupUI() {
    const classes = useStyles();

    const [signUpObj, setSignUpObj] = React.useState({ firstName: "", lastName: "", email: "", password: "" });

    const [regexSignUpObj, setRegexSignUpObj] = React.useState({
        firstNameError: false,
        lastNameError: false,
        firstNamehelpertext: "",
        lastNamehelpertext: "",
        emailerror: false,
        emailhelpertext: "",
        passworderror: false,
        passwordhelpertext: "",

    });

    const takeFirstName = (event) => {
        setSignUpObj(previousState => ({ ...previousState, firstName: event.target.value }))
    }
    const takeLastName = (event) => {
        setSignUpObj(previousState => ({ ...previousState, lastName: event.target.value }))
    }
    const takeEmail = (event) => {
        setSignUpObj(previousState => ({ ...previousState, email: event.target.value }))
    }
    const takePassword = (event) => {
        setSignUpObj(previousState => ({ ...previousState, password: event.target.value }))
    }

    const onSubmit = () => {
        let emailTest = emailRegex.test(signUpObj.email);
        let firstNameTest = nameRegex.test(signUpObj.firstName);
        let lastNameTest = nameRegex.test(signUpObj.lastName);
        let passwordTest = passwordRegex.test(signUpObj.password);

        if (firstNameTest) {
            setRegexSignUpObj(previousState => ({
                ...previousState,
                firstNameError: false,
                firstNamehelpertext: "",
            }))
        }
        else{
            setRegexSignUpObj(previousState => ({
                ...previousState,
                firstNameError: true,
                firstNamehelpertext: signUpObj.firstName.length === 0 ? "Enter First Name":"Enter minimum four characters"
            }))
        }
        if (lastNameTest) {
            setRegexSignUpObj(previousState => ({
                ...previousState,
                lastNameError: false,
                lastNamehelpertext: "",
            }))
        }
        else{
            setRegexSignUpObj(previousState => ({
                ...previousState,
                lastNameError: true,
                lastNamehelpertext: signUpObj.lastName.length === 0 ? "Enter Last Name":"Enter minimum four characters"
            }))
        }


        if (emailTest) {
            setRegexSignUpObj(previousState => ({
                ...previousState,
                emailerror: false,
                emailhelpertext: "",
            }))
        }
        else{
            setRegexSignUpObj(previousState => ({
                ...previousState,
                emailerror: true,
                emailhelpertext: signUpObj.email.length? "Enter Email":"Enter correct email"
            }))
        }


        if (passwordTest) {
            setRegexSignUpObj(previousState => ({
                ...previousState,
                passworderror: false,
                passwordhelpertext: "",
            }))
        }
        else{
            setRegexSignUpObj(previousState => ({
                ...previousState,
                passworderror: true,
                passwordhelpertext: signUpObj.password.length === 0 ? "Enter password":"Password must contain atleast eight characters"
            }))
        }

        if(firstNameTest === true && lastNameTest === true && passwordTest === true && emailTest === true) {
            usersignup(signUpObj)
            .then((res) => { console.log(res) })
            .catch((error) => { console.log(error) })
          }
    }


    return (
        <Box className={classes.container}>
            <Stack className={classes.createlink} spacing={0} direction="row">
                <Box className={classes.firsthalf}>
                    <Box className={classes.firsthalfchild}>
                        <Box className={classes.ele}>
                            <img src={logo} />
                        </Box>
                        <Box className={classes.text1}>
                            <Typography variant='h5'>Create Your Google Account</Typography>
                        </Box>
                        <Stack className={classes.nameinput} direction="row" spacing={1} >
                            <TextField  onChange = {takeFirstName} id="outlined-basic" label="First name" variant="outlined" size="small"  helperText={regexSignUpObj.firstNamehelpertext} error={regexSignUpObj.firstNameError} />
                            <TextField  onChange = {takeLastName} id="outlined-basic" label="Last name" variant="outlined" size="small" helperText={regexSignUpObj.lastNamehelpertext} error={regexSignUpObj.lastNameError} />
                        </Stack>
                        <TextField onChange={takeEmail} fullWidth label="Username" id="fullWidth" size='small' helperText={regexSignUpObj.emailhelpertext} error={regexSignUpObj.emailerror}  />
                        <Link href="#" underline="none"> Use my current email address instead</Link>
                        <Stack className={classes.nameinput} direction="row" spacing={1} helperText='Use 8 or more characters with a mix of letters, numbers & symbols' >
                            <TextField onChange={takePassword} id="outlined-basic" label="Password" variant="outlined" size="small" helperText={regexSignUpObj.passwordhelpertext} error={regexSignUpObj.passworderror} />
                            <TextField onChange={takePassword} id="outlined-basic" label="Confirm Password" variant="outlined" size="small"  helperText={regexSignUpObj.passwordhelpertext} error={regexSignUpObj.passworderror}  />
                        </Stack>
                        <FormControlLabel
                            value="end"
                            control={<Checkbox />}
                            label="Show Password"
                            labelPlacement="end"
                            size="small"
                        />
                        <Stack spacing={19} direction="row">
                            <Link href="#" underline="none" > Signin Instead</Link>
                            <Button onClick={onSubmit} variant="contained">Next</Button>
                        </Stack>
                    </Box>
                </Box>
                <Box className={classes.secondhalf} spacing={2} >
                    <Stack className={classes.secondbox} spacing={0} >
                        <Box>
                            <img src={BigGoogle}></img>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </Box>

    )
}

export default SignupUI
