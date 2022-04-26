import React from "react";
import './signup.css'
import { TextField } from '@mui/material';
import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';
import { usersignup } from "../../Service/Userservice";

const nameRegex = /^[a-zA-Z]{4,}$/;
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;



function SignUp() {
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
        <div className="container">
            <div className="base">
                <div className="details">

                    <div ><img src={require('./google.png')} /></div>
                    <div className="title1"><b>Create your google account</b></div>
                    <div className="nameinput">
                        <div onChange = {takeFirstName} className="fname"><TextField id="outlined-basic" label="First name" variant="outlined" size="small" helperText={regexSignUpObj.firstNamehelpertext} error={regexSignUpObj.firstNameError} /></div>
                        <div onChange = {takeLastName}  className="lname"><TextField id="outlined-basic" label="Last name" variant="outlined" size="small" helperText={regexSignUpObj.lastNamehelpertext} error={regexSignUpObj.lastNameError} /></div>
                    </div>

                    <div onChange={takeEmail} className="gmailinput">
                        <TextField fullWidth label="Gmail" id="fullWidth" size="small" helperText={regexSignUpObj.emailhelpertext} error={regexSignUpObj.emailerror} />
                    </div>

                    <div ><a href=""><b>Use my current email address instead</b></a></div>
                    <div  className="passwordinput">
                        <div onChange={takePassword}className="fname"><TextField id="outlined-basic" label="Password " variant="outlined" size="small" helperText={regexSignUpObj.passwordhelpertext} error={regexSignUpObj.passworderror} /></div>
                        <div onChange={takePassword} className="fname"><TextField id="outlined-basic" label="Confirm Password" variant="outlined" size="small" helperText={regexSignUpObj.passwordhelpertext} error={regexSignUpObj.passworderror} /></div>
                    </div>

                    <div>
                        <FormControlLabel
                            value="end"
                            control={<Checkbox />}
                            label="Show Password"
                            labelPlacement="end"
                        />
                    </div>

                    <div className="button">
                        <div><a href=""><b>Sign in instead</b></a></div>
                        <div><Button onClick={onSubmit} variant="contained">Next</Button></div>
                    </div>

                </div>
                <div className="logo">
                    <div ><img src={require('./big_google.png')} /></div>
                </div>
            </div>
        </div>

    )
}

export default SignUp;