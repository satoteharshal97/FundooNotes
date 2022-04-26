import logo from './logo.svg';
import './App.css';
import SignIn from './pages/signin/signin';
import SignUp from './pages/signup/signup';
import Header from './Components/Header/header';
import Dashboard from './pages/Dashboard/dashboard';
import { Drawer } from '@mui/material';
import Router from './Router/router';
import SignInUI from './Components/MaterialUI/SignIn/SignInUI';
import SignupUI from './Components/MaterialUI/SignUp/SignupUI';
import HeaderUI from './Components/MaterialUI/Header/HeaderUI';
import Takenoteone from './Components/Takenoteone/takenoteone';
import NoteThreeUI from './Components/MaterialUI/TakeNoteThree/NoteThreeUI';
import HeaderComponent from './Components/MaterialUI/Header/HeaderComponent';
import NoteOneComponent from './Components/MaterialUI/Takenoteone/NoteOneComponent';
import NoteTwoComponent from './Components/MaterialUI/TakeNoteTwo/NoteTwoComponent';
import DashboardComponent from './Components/MaterialUI/Dashboard/DashboardComponent';
import NoteThreeComponent from './Components/MaterialUI/TakeNoteThree/NoteThreeComponent';


function App() {
  return (
    <div>
      {/* <SignInUI /> */}
      {/* <SignupUI /> */}
      {/* <HeaderUI/> */}
      {/* <NoteThreeUI /> */}



     {/* <HeaderComponent /> */}
     {/* <NoteOneComponent /> */}
     {/* <NoteTwoComponent/> */}
     <DashboardComponent />
     {/* <NoteThreeComponent /> */}
     {/* <NoteThreeUI /> */}


      {/* <Router /> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}

      {/* <Header/> */}


      {/* <Dashboard  /> */}

    </div>

  );
}

export default App;
