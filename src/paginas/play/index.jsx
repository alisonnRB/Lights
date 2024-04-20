import React from "react";
import { useState, useEffect, useContext } from "react";

import { LanguageContext } from '../../provider/index';
import words from './language.json';
import sound from '../../assets/sound.mp3';

import Letra_braille from "./braille";
import Light_and_code from "./lightAndCode";

export default function Home() {
  const [turn, setTurn] = useState(true);
  const [code, setCode] = useState(false);
  const [audio] = useState(new Audio(sound));

  const { language, changeLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (!turn) {
      audio.play();
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

      <p className="change-language" onClick={()=>{changeLanguage()}}>{language == 'pt' ? 'PT-BR' : 'EN-US'}</p> 

      <div className={`botao ${!turn ? 'off' : null}`} onClick={() => { setTurn(!turn) }}>

        <span className="braille"><Letra_braille /></span>

        <p className="hello">{words[language].start}</p>

        <p className="message">{words[language].click}</p>
      </div>

      {code ? <Light_and_code /> : null}
    </div>
  );
}