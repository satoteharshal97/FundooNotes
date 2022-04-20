import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensIcon from '@mui/icons-material/ColorLens';

export default function SimplePopper(props) {
    const [open, setOpen] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setOpen(!open)
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const colorArray = ['#e2725b', '#ffae42', '#fefe33', '#77dd77', '#40e0d0', '#a4dded', '#77b5fe', '#ba55d3', '#ffb3de', '#c19a6b', '#d3d3d3']

    const pickColor = (event) => {
        if(props.action === "create"){
            console.log("create", event.target.id)
            props.takeColor(event.target.id)
        }
        else if (props.action === "update"){
            console.log("update", event.target.id)
            props.updateNote(event.target.id)
        }
        
    }



    return (
        <div>
            <ColorLensIcon onClick={handleClick} />
            <Popper open={open} anchorEl={anchorEl} >
                <Box   sx={{ border: "1px solid rgb(225, 225, 225)", p: 1, bgcolor: 'background.paper', display:'flex', borderRadius: "5px"  }}>
                    {colorArray.map((color) => (<div id = {color} onClick ={pickColor} style={{
                        border: "1px solid rgb(230, 230, 230)",
                        backgroundColor: color,
                        borderRadius: "50%",
                        margin: "3px",
                        height: "30px",
                        width:"30px",
                        
                    }}></div>))}
                </Box>
            </Popper>
        </div>
    );
}
