import React from "react";
import './signin.css'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { usersignin } from "../../Service/Userservice";

const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function SignIn() {
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
        <div className="container">
            <div className="basezero">
                <div ><img src={require('../signup/google.png')} /></div>
                <div className="title"><b>Sign in</b></div>
                <div className="title1">Use your Google Account</div>
                <div className="inputs">
                    <div className="email">
                        <TextField onChange={takeemail} fullWidth label="Email" id="fullWidth" size="small" helperText={emailhelpertext} error={emailerror} />
                    </div>
                    <div className="password">
                        <TextField onChange={takepassword} fullWidth label="Password" id="fullWidth" size="small" helperText={passwordhelpertext} error={passworderror} />
                    </div>
                </div>

                <div className="title2">Not your computer? Use Guest mode to sign in privately</div>
                <div className="buttons">
                    <div className="but"><a href="">Create Account</a></div>
                    <div className="but"><Button onClick={onSubmit} variant="contained">Next</Button></div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;