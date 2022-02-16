import * as React from 'react';
import { Popover } from '@mui/material';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import "./Header.css";
import "./Dashboard.css";
import { useState, useEffect } from 'react';

export const SignInOption = () => {

  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState([]);
  const [userName, setUserName] = useState("");

  if(!loginStatus){
    getUserData();
  }


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  async function getUserData() {
      const data = await fetch("/login")
      .then((d) => d.json())
      .then((res) => {
        setUser(res);
        if(user[user.length-1].status) {
          setLoginStatus(true);
          setUserName(user[user.length-1].first_name);
        }
      })
  };

  function updateLoginData() {
    fetch(`/login/${user[user.length-1]._id}`, {
        method: "PATCH",
        body: JSON.stringify({
            status: false
        }),
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then((d) => d.json());
}

const handleLogout = () => {
  updateLoginData();
  getUserData();
}

  return (
    <div style={{display: 'flex'}}>

      <Button aria-describedby={id} variant="contained" onClick={handleClick} 
        sx={{background: "none", color: "rgb(65, 62, 62)", fontSize: "14px", borderRadius: "0",
        boxShadow: "0", margin: "2px 10px 0px 10px", textTransform: "capitalize",
        ":hover": {background: "white", boxShadow: "0"} }}>
        {loginStatus ? `Hi ${userName}` : "Sign In"}
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className='signInOptionsCont'>
          <div>
            <div className='yourAccount'>Your Account</div>
            <div className='signInOptionsBox'>
              {loginStatus ? "" : <Link to={"/login"} className='signInBtn'>Sign In | Create Account</Link>}
              <Link to={""} className='optDum'>Purchases</Link>
              <Link to={""} className='optDum'>Wishlist</Link>
              <Link to={""} className='optDum'>Shipping address</Link>
              <Link to={""} className='optDum'>Payment methods</Link>
              <Link to={""} className='optDum'>Looks</Link>
              <Link to={""} className='optDum'>Password & Personal Info</Link>
              <Link to={""} className='optDum'>Email & Mail preferences</Link>
              <Link to={""} className='optDum'>Stores & Events</Link>
              <Link to={""} className='optDum'>Contact Us</Link>
              <Link to={""} className='optDum'>Skirts</Link>
              {loginStatus ? <Link to={"/login"} className='signInBtn' onClick={handleLogout}>Logout</Link> : ""}
            </div>
              
          </div>

        </div>
        
      </Popover>

    </div>
  );
}
