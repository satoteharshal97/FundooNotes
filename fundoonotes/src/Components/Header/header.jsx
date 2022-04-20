import React from 'react';
import '../Header/header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Header(props) {

     const callFromHeader = () => {
        props.listenToHeader()
     }

    return (
        <div>
            <div className="header">
                <div className="first_box">
                    <div className="items1 item"><MenuIcon onClick= {callFromHeader }/></div>
                    <div className="items2 item"><img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"></img></div>
                    <div className="items3 item" >Keep</div>
                </div>
                <div className="second_box">
                    <div className="items4 item"><SearchIcon /></div>
                </div>
                <div className="third_box">
                    <div className="items5 item"><RefreshIcon /></div>
                    <div className="items6 item"><ViewStreamIcon/></div>
                    <div className="items7 item"><SettingsIcon/>    </div>
                </div>
                <div className="fourth_box">
                    <div className="items8 item"><AppsIcon/></div>
                    <div className="items9 item"><AccountCircleIcon/></div>
                </div>
            </div> 
        </div>
    )
}

export default Header;

