import React, { useState } from 'react'
import { db,auth } from '../firebase';
import {collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Input } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import 'firebase/firestore';
import "../App.css";


function SendMessage() {

  const [message,setMessage] = useState("");

    //enterで登録処理
    const sendMessage = async (e) => {
      e.preventDefault();

      const { uid , photoURL } = auth.currentUser;
      // firebaseへの登録の処理

      const addData = await addDoc(
        collection(db, "messages"),
        {
          text: message,
          photoURL,
          uid,
          createdAt:serverTimestamp(),
        }
      );
      setMessage("");
    };
  

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input 
          style={{
            width: "78%",
            fontSize: "15px",
            fontWeight: "550",
            marginLeft: "5px",
            marginBottom: "-3px",
          }}
          placeholder='メッセージを入力してください' 
          type="text" 
          onChange={(e) => setMessage(e.target.value)}
          value={message}/>
          <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }}/>
        </div>  
      </form>
    </div>
  )
}

export default SendMessage

