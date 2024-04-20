import React, { useState, useEffect, useContext } from "react";

import { LanguageContext } from "../../provider";
import words from './language.json';

import Rope from './rope/index';
import Lamps from "./lamps";

export default function MySkills() {
    const { language } = useContext(LanguageContext);
    const [open, setOpen] = useState(false);
    const [action, setAction] = useState(false);
    const [start, setStart] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setOpen(true);

        }, 900);
        return () => clearTimeout(timeoutId);
    }, [])

    useEffect(()=>{
        if(action){
            setStart((prevState)=>!prevState);
        }
    },[action])

    return (
        <div className="mySkills">
            {!open ? <div className={`light`}></div> : null}

            <>
                <Rope action={action} setAction={setAction} />
                {!start ? <p className={`instruction turn`}>{words[language].first_hint}</p> : null}
                {start ? <p className={`instruction turn`}>{words[language].pause}</p> : null}
            </>

            <div className="lampsContent">
                <Lamps />
            </div>
        </div>
    );
}