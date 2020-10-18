import React from 'react'
import {Button} from '@material-ui/core'
import {auth, provider} from '../Firebase'
import './Login.css'
function Lgoin() {

    const signIn = () =>{
      auth.signInWithPopup(provider)
      .catch(error => alert(error.message));
    };
    return (
        <div className="login">
           
            <div className="login_logo">
        
                <h2 className="logo_title">Cordial Chat</h2>
                <img src={require('../logo/chat.jpg')} alt='cordial chat logo' />

            </div>

            <Button onClick={signIn}>Sign In</Button>
            <div className="sign-up_links">
                 <p><a href='#'>Sign Up Here</a></p>
                 <p><a href='#'>Forgot User Name or Password?</a></p>
            </div>
        </div>
    )
}

export default Lgoin
