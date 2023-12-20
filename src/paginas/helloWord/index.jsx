import React from "react";
import { useState, useEffect } from "react";

import Letra_braille from "./braille";
import Light_and_code from "./lightAndCode";

export default function Home() {
    const [turn, setTurn] = useState(true);
    const [code, setCode] = useState(false);

    useEffect(() => {
        if (!turn) {
          const timeoutId = setTimeout(() => {
            setTurn(true);
            clearTimeout(timeoutId)
          }, 250);

          const timeoutIds = setTimeout(() => {
            setCode(true)
            clearTimeout(timeoutIds)
          }, 500);
        }
      }, [turn]);

    return (
        <div className="home">
            <p className="lets">Let's say hello to the world together?</p>

            <div className={`botao ${!turn ? 'off' : null}`} onClick={()=>{setTurn(!turn)}}>

                <span className="braille"><Letra_braille /></span>

                <p className="hello">HELLO WORLD</p>

                <p className="message">click here and let's go</p>
            </div>

            <p className="apresentation">My name is Álison, nice to meet you!</p>

            {code ? <Light_and_code /> : null}
        </div>
    );
}