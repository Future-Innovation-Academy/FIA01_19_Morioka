import { useState ,useEffect } from 'react'
import './App.css'
import gu from './image/janken_gu.png'
import choki from './image/janken_choki.png'
import pa from './image/janken_pa.png'
// import Judge from '../Judge'
// import OpponentHand from '../OpponentHand'

function App() {
    const [hands, setHands] = useState("");
    const [opponentHand, setOpponentHand] = useState(""); //相手の手
    const [myhand, setMyhand] = useState(""); //自分の手
    const [result, setResult] = useState(""); //結果を格納する
    const handImg = [gu,choki,pa]; //相手の手の配列
    const handImgNo = Math.floor(Math.random()*handImg.length); //配列の番号

    const start = () => {
        clear();
        console.log("1.【start】handsは" + hands + "です");  
        console.log("1.【start】opponentHandは" + opponentHand + "です"); 
    }

    const clear = () => {
        setMyhand("");
        setOpponentHand("グー");
        setResult("");
        setHands(gu);
    }

    useEffect(()=>{
        setHands(gu);
        console.log("0.【useEffect】handsは" + hands + "です"); 
        console.log("0.【useEffect】opponentHandは" + opponentHand + "です");    
    },[]);

    console.log("【レビュー】opponentHandは" + opponentHand + "です"); 
    console.log("【レビュー】handsは" + hands + "です"); 

    // useEffect(()=>{
    //     if(hands === gu){
    //         setOpponentHand("グー")            
    //     }else if(hands === choki){
    //         setOpponentHand("チョキ")            
    //     }else if(hands === pa){
    //         setOpponentHand("パー")            
    //     }
    //     console.log("0-1.【useEffect】handsは" + hands + "です"); 
    //     console.log("0-1.【useEffect】opponentHandは" + opponentHand + "です");     

    // },[hands]);

    // useEffect(()=>{
    //     if(hands === gu){
    //         setOpponentHand("グー")            
    //     }else if(hands === choki){
    //         setOpponentHand("チョキ")            
    //     }else if(hands === pa){
    //         setOpponentHand("パー")            
    //     }
    //     console.log("0-2.【useEffect】handsは" + hands + "です"); 
    //     console.log("0-2.【useEffect】opponentHandは" + opponentHand + "です");     

    // },[opponentHand]);


    const judge =  (e) => {
        setHands(handImg[handImgNo]);
        debugger
        console.log("2-1.【Judge】handsは" + hands + "です");        
        console.log("2-1.【Judge】handImgNoは" + handImgNo + "です")
        console.log("2-1.【Judge】opponentHandは" + opponentHand + "です")

        if(hands === gu){
            setHands(choki);
            setOpponentHand("チョキ");            
        }else if(hands === choki){
            setHands(pa);            
            setOpponentHand("パー");            
        }else if(hands === pa){
            setHands(gu);               
            setOpponentHand("グー");            
        }else{
            setOpponentHand("該当なし")
            console.log("【Judge】2.相手の手は該当なしです");
        }

        debugger

        console.log("2-2.【Judge】handsは" + hands + "です");        
        console.log("2-2.【Judge】handImgNoは" + handImgNo + "です")
        console.log("2-2.【Judge】opponentHandは" + opponentHand + "です")

        setMyhand(e);
        if(e === "グー"){
            if(opponentHand === "グー"){
                setResult("あいこ"); 
            }else if(opponentHand === "チョキ"){
                setResult("あなたの勝ち");
            }else{
                setResult("あなたの負け"); 
            }
        }else if(e === "チョキ"){
            if(opponentHand === "チョキ"){
                setResult("あいこ");
            }else if(opponentHand === "パー"){
                setResult("あなたの勝ち");
            }else{
                setResult("あなたの負け");
            }
        }else if(e === "パー"){
            if(opponentHand === "パー"){
                setResult("あいこ");
            }else if(opponentHand === "グー"){
                setResult("あなたの勝ち");
            }else{
                setResult("あなたの負け");
            }
        }
        console.log("2-3.【Judge】handsは" + hands + "です");        
        console.log("2-3.【Judge】handImgNoは" + handImgNo + "です")
        console.log("2-3.【Judge】opponentHandは" + opponentHand + "です")

    }

    return (
    <div className="App">
    <header className="App-header">

        <p>じゃんけんアプリ</p>
        <button type="button" onClick={() => start()}>
            スタート
        </button>

        <img src={hands} className="jankenPic" alt=""/>

        <div>
            <button type="button" className='handbutton' onClick={() => judge("グー")}>
            グー
            </button>
            <button type="button" className='handbutton' onClick={() => judge("チョキ")}>
            チョキ
            </button>
            <button type="button" className='handbutton' onClick={() => judge("パー")}>
            パー
            </button>
        </div> 
        <div>
            相手は：{opponentHand}
        </div>
        <div>
            あなたは：{myhand}
        </div>
        <div>
            勝負は：{result}
        </div>

        {opponentHand=="グー" && }


    </header>
    </div>
    )
}

export default App
