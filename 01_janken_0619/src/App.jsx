import { useState ,useEffect } from 'react'
import './App.css'
import guImg from './image/janken_gu.png'
import chokiImg from './image/janken_choki.png'
import paImg from './image/janken_pa.png'

// import Judge from '../Judge'

function App() {
    const [opponentHand, setOpponentHand] = useState(""); //相手の手
    const [myhand, setMyhand] = useState(""); //自分の手

    // startで相手の手を変更
    const start = () => {
        // 0=グー、1=チョキ、2=パー
        const  opponent = Math.floor(Math.random()*3);
        // const  my = Math.floor(Math.random()*3);
        setOpponentHand(opponent);
        setMyhand("");
    }

    return (
    <div className="App">
    <header className="App-header">

        <p>じゃんけんアプリ</p>
        <button type="button" onClick={() => start()}>
            スタート
        </button>
        <div>
        <button type="button" className='handbutton' onClick={() => setMyhand(0)}>
            グー
            </button>
            <button type="button" className='handbutton' onClick={() => setMyhand(1)}>
            チョキ
            </button>
            <button type="button" className='handbutton' onClick={() => setMyhand(2)}>
            パー
            </button>

            {/* グーのあいこ */}
            {opponentHand ===0 && myhand === 0 && (
                <>
                    <div>相手
                        <img src={guImg} alt="" className='jankenPic'/>
                    </div>
                    <div>わたし
                        <img src={guImg} alt="" className='jankenPic'/>
                    </div>
                    <div>
                        あいこです
                    </div>
                </>
            )}
            {/* グーで勝ち */}
            {opponentHand === 1 && myhand === 0 && (
                <>
                    <div>相手
                        <img src={chokiImg} alt="" className='jankenPic'/>
                    </div>
                    <div>わたし
                        <img src={guImg} alt="" className='jankenPic'/>
                    </div>
                    <div>
                        勝ちです
                    </div>
                </>
            )}
                {/* グーで負け */}
                {opponentHand === 2 && myhand === 0 && (
                <>
                    <div>相手
                        <img src={paImg} alt="" className='jankenPic'/>
                    </div>
                    <div>わたし
                        <img src={guImg} alt="" className='jankenPic'/>
                    </div>
                    <div>
                        負けです
                    </div>
                </>
            )}
            {/* チョキのあいこ */}
            {opponentHand ===1 && myhand === 1 && (
                <>
                    <div>相手
                        <img src={chokiImg} alt="" className='jankenPic'/>
                    </div>
                    <div>わたし
                        <img src={chokiImg} alt="" className='jankenPic'/>
                    </div>
                    <div>
                        あいこです
                    </div>
                </>
            )}
            {/* チョキで勝ち */}
            {opponentHand === 2 && myhand === 1 && (
                <>
                    <div>相手
                        <img src={paImg} alt="" className='jankenPic'/>
                    </div>
                    <div>わたし
                        <img src={chokiImg} alt="" className='jankenPic'/>
                    </div>
                    <div>
                        勝ちです
                    </div>
                </>
            )}
            {/* チョキで負け */}
            {opponentHand === 0 && myhand === 1 && (
                <>
                    <div>相手
                        <img src={guImg} alt="" className='jankenPic'/>
                    </div>
                    <div>わたし
                        <img src={chokiImg} alt="" className='jankenPic'/>
                    </div>
                    <div>
                        負けです
                    </div>
                </>
            )}
            {/* パーのあいこ */}
            {opponentHand ===2 && myhand === 2 && (
                <>
                    <div>相手
                        <img src={paImg} alt="" className='jankenPic'/>
                    </div>
                    <div>わたし
                        <img src={paImg} alt="" className='jankenPic'/>
                    </div>
                    <div>
                        あいこです
                    </div>
                </>
            )}
            {/* パーで勝ち */}
            {opponentHand === 0 && myhand === 2 && (
                <>
                    <div>相手
                        <img src={guImg} alt="" className='jankenPic'/>
                    </div>
                    <div>わたし
                        <img src={paImg} alt="" className='jankenPic'/>
                    </div>
                    <div>
                        勝ちです
                    </div>
                </>
            )}
            {/*　パーで負け */}
            {opponentHand === 1 && myhand === 2 && (
                <>
                    <div>相手
                        <img src={chokiImg} alt="" className='jankenPic'/>
                    </div>
                    <div>わたし
                        <img src={paImg} alt="" className='jankenPic'/>
                    </div>
                    <div>
                        負けです
                    </div>
                </>
            )}
        </div>

    </header>
    </div>
    )
}

export default App
