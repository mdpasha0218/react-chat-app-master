import React, { useState } from 'react';
import firebase from "firebase/app";
import { useDispatch, useSelector } from 'react-redux';
import { useraction } from '../../services/actions/user';
import './style.css';
import { Button } from '@material-ui/core';
import { Avatar, Grid, Paper, TextField } from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { ClassTwoTone, CloudUpload, Facebook, MailOutline, Twitter } from '@material-ui/icons';
const Login : React.FC=()=>{
/*
  const [email,setemail]=useState<string >("");
  const [password,setpassword]=useState<string>("");
  const [status,setstatus]=useState<string>("");
 
  const validateemail=()=>{
    if(email.length>=5 && email.length<=255)
    {
      let ap=email.search("@");
      let cp=email.search(".com");
      if(ap==-1 && cp==-1 && ap>cp)
        return false;
      return true;
    }
    else
    return false;
  }
  const validatepassword=()=>{
    return password.length>=6&&password.length<=1024;
  }
  const handlesubmit=async ()=>{
    if(!validateemail())
    {
      setstatus("enter valid email");
      return;
    }
    if(!validatepassword())
    {
      setstatus("password should have min 6 characters");
      return;
    }
  
  }
  
    */
   const auth=firebase.auth();
   const provider=new firebase.auth.GoogleAuthProvider();
   const dispatch=useDispatch();
   const login=()=>{
    auth.signInWithPopup(provider).then((result)=>{
              dispatch(useraction(result.user))
    }).catch((err)=>console.log(err));
  }
  const paperStyle={padding:20,height:'70vh',width:380,margin:"100px auto"};
  const avatarStyle={backgroundColor:'#28c328'};
  const buttonStyle1={margin:"20px 40px"};
  const buttonStyle2={margin:"20px 35px"};
  const unameStyle={margin:"8px 0"};
  const headStyle={margin:"10px 0", };
  const gmailStyle={margin:"5px 0"};
  const fbStyle={margin:"5px 0"};
  const twitterStyle={margin:"5px 0"};
   return(
     
      <body className="bodylogin" >
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid container spacing ={0} justify='center' alignItems='center' direction='column'>
              <Avatar style={avatarStyle}><ChatBubbleOutlineIcon/></Avatar>
             <h2 style={headStyle}>Sign In/Sign Up</h2>

            </Grid>
            <TextField label='Username' placeholder='Enter username' fullWidth required style={unameStyle}/>
            <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
            <Button variant='contained' type='submit' color='primary' style={buttonStyle1}>Sign In</Button>
            <Button variant='contained' type='submit' color='primary' style={buttonStyle2}>Sign Up</Button>
            <Button className="button" style={gmailStyle} variant="contained" color='primary' fullWidth startIcon={<MailOutline />}  onClick={()=>login()}>Sign In Using Gmail</Button>
            <Button className="button" style={fbStyle} variant="contained" color='primary' fullWidth startIcon={<Facebook />}  onClick={()=>login()}>Sign In Using Facebook</Button>
            <Button className="button" style={twitterStyle} variant="contained" color='primary' fullWidth startIcon={<Twitter />}  onClick={()=>login()}>Sign In Using Twitter</Button>
          </Paper>

        </Grid>
        
    </body>
);
};
export default Login;