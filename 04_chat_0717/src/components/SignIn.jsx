import { Button } from '@mui/material'
import { auth, provider } from "../firebase";
import React from 'react'
import { signInWithPopup } from 'firebase/auth';

function SignIn() {

    const signInwithGoogle = () => {
      //firebaseを使ってグーグルでサインイン
      signInWithPopup(auth,provider)
    }

  return (
    <div className="header">
      <Button style={{ color: "white", fontSize: "15px" }} onClick={(signInwithGoogle)}>グーグルでログイン</Button>
    </div>
  )
}
export default SignIn


