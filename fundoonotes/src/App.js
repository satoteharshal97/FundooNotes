import logo from './logo.svg';
import './App.css';
import SignIn from './pages/signin/signin';
import SignUp from './pages/signup/signup';
import Header from './Components/Header/header';
import Dashboard from './pages/Dashboard/dashboard';
import { Drawer } from '@mui/material';
import Router from './Router/router';

function App() {
  return (
    <div>
      <Router />
      {/* <SignIn /> */}
      {/* <SignUp /> */}

       {/* <Header/> */}
       

       {/* <Dashboard  /> */}

    </div>

  );
}

export default App;
