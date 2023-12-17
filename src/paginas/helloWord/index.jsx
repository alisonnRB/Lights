import React from "react";
import Letra_braille from "./braille";
import { useState, useEffect } from "react";

export default function Home() {
    const [turn, setTurn] = useState(true);

    useEffect(() => {
        if (!turn) {
          const timeoutId = setTimeout(() => {
            console.log('apagou');
          }, 2000);
          return () => clearTimeout(timeoutId);
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
        </div>
    );
}