import React,{useEffect, useState} from 'react';
import { db,auth } from '../firebase';
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import SendMessage from './SendMessage';
import SignOut from './SignOut';

function Line() {

  const [messages,setMessages] = useState([
    {
      id: "",
      text: "",
      createdAt:"",
      uid:"",
    },
  ]);


  useEffect(() => {
    const q = query(collection(db, "messages"),orderBy("createdAt"),limit(50)); 

    const messageData = onSnapshot(q, (QuerySnapshot) => {
      setMessages(
        QuerySnapshot.docs.map((doc) => (
          doc.data()
        ))
      );
    });
    return () => messageData();
  }, []); 

  return (  
      <div>
        <SignOut />
        <div className='msgs'>
          {messages.map(({id,text,photoURL,uid}) => (
            <div key={id} className={`msg ${uid === auth.currentUser.uid ? "sent" : "recieved"}`}>
              <img src={photoURL} alt=""/>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <SendMessage />
      </div>
  )
}

export default Line