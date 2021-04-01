import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'react-bootstrap';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  };
const Login = () => {
  

    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        imgUrl:'',
        isSignIn:false,
        error:"",
        success:false
      })

      const  [logInUser,setLogInUser]=useContext(UserContext);
      const history = useHistory();
      const location = useLocation();
      const { from } = location.state || { from: { pathname: "/" } };
      const  googleProvider = new firebase.auth.GoogleAuthProvider();

      const handleGoogleSignIn=()=>{
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
              const {displayName,email,photoURL,password,error}=result.user;
              const  googleSignInUser ={
                name:displayName,
                imgUrl:photoURL,
                email:email,
                password:password,
                error:error,
                success:true,
              }
              const newUserInfo={...user};
              newUserInfo.error="";
              newUserInfo.success=true;
              setUser(newUserInfo);
              setLogInUser(googleSignInUser);
              history.replace(from);
              
            }).catch((error) => {
              const newUserInfo={...user};
              newUserInfo.success=false;
              newUserInfo.error=error.message;
              setUser(newUserInfo);
      });
      }
    
    return (
        <div className="loginContainer container my-5">
            <h2>Please log in and continue</h2>
            <Button className=" py-3" onClick={handleGoogleSignIn} variant="primary rounded-pill" size="lg" block>
            <FontAwesomeIcon className=' w-25 text-dark' icon={faGoogle}/>Continue with Google 
            </Button>
        </div>
    );
};

export default Login;