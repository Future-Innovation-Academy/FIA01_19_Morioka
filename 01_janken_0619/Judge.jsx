import React from 'react'

export const Judge = ({props}) => {
  return (
    <div>
    {/* ぐーのあいこ */}
    {props.aite ===0 && props.jibun === 0 && (
        <>
            <div>相手
                <img src={props.gu} alt="" className='jankenPic'/>
            </div>
            <div>わたし
                <img src={props.gu} alt="" className='jankenPic'/>
            </div>
            <div>
                あいこです
            </div>
        </>
    )}
    {/* ぐーで勝ち */}
    {props.aite === 1 && props.jibun === 0 && (
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
    {/* ぐーで負け */}
    {props.aite === 2 && props.jibun === 0 && (
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
    {/* ちょきのあいこ */}
    {props.aite ===1 && props.jibun === 1 && (
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
    {/* ちょきで勝ち */}
    {props.aite === 2 && props.jibun === 1 && (
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
    {/* ちょきで負け */}
    {props.aite === 0 && props.jibun === 1 && (
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
    {/* ぱーのあいこ */}
    {props.aite ===2 && props.jibun === 2 && (
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
    {/* ぱーで勝ち */}
    {props.aite === 0 && props.jibun === 2 && (
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
    {/* ぱーで負け */}
    {props.aite === 1 && props.jibun === 2 && (
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

  )
}

export default Judge;