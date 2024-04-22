import React, { useState, useEffect, useContext } from "react";

import { LanguageContext } from "../../provider";
import words from './language.json';

import Rope from './rope/index';
import Lamps from "./lamps";
import Over from './gameOver/index';

export default function MySkills() {
    const { language } = useContext(LanguageContext);
    const [open, setOpen] = useState(false);
    const [action, setAction] = useState(false);
    const [start, setStart] = useState(false);
    const [pause, setPause] = useState(false);

    const [fase, setFase] = useState([]);
    const [score, setScore] = useState(0);

    const [over, setOver] = useState(false);

    const geraLevel = () => {
        const list = [];

        for (let i = 0; i < (score !== 0 ? score : 2); i++) {
            let randomNumber = Math.floor(Math.random() * 16);
            list.push(randomNumber);
        }

        setFase(list);
    }

    const ScoreIncrement = (num) => {
        setScore((prevState) => prevState + num);
        geraLevel();
    }

    const clear = () => {
        setScore(0);
        setFase([]);
        setStart(false);
        setAction(false);
        setOver(false);
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setOpen(true);

        }, 900);
        return () => clearTimeout(timeoutId);
    }, [])

    useEffect(() => {
        if (action) {
            setStart((prevState) => !prevState);
        }
    }, [action])

    useEffect(() => {
        if (start) {
            geraLevel();
        }
    }, [start])

    return (
        <div className="mySkills">
            {!open ? <div className={`light`}></div> : null}
            <p className="score">Score: {score}</p>
            <>
                <Rope action={action} setAction={setAction} />
                {!start ? <p className={`instruction turn`}>{words[language].first_hint}</p> : null}
            </>

            <div className="lampsContent">
                {over ? <Over score={score} clear={clear}/> : null}
                <Lamps fase={fase} ScoreIncrement={ScoreIncrement} setOver={setOver} pause={pause} setPause={setPause}/>
            </div>
        </div>
    );
}