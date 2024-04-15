import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import '../../output/style_mySkills.css';

import { LanguageContext } from "../../provider";
import words from './language.json';
import engrenagem from '../../drawble/engrenagem.png';

import Rope from './rope/index';

export default function MySkills() {
    const navigate = useNavigate();
    const { language } = useContext(LanguageContext);
    const [open, setOpen] = useState(false);
    const [action, setAction] = useState(false);

    const [operations, setOperation] = useState(false);
    const [hints, setHints] = useState(false);
    const [blackout, setBlackout] = useState(false);
    const [control, setControl] = useState(false);
    const [fail, setFail] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setOpen(true);

        }, 900);
        return () => clearTimeout(timeoutId);
    }, [])

    useEffect(() => {
        if (action && !hints) {
            setOperation(true);
        } else if (action && hints) {
            const timeoutId = setTimeout(() => {
                setBlackout(true);
                clearTimeout(timeoutId);
            }, 500);
            setFail(true);
        }
    }, [action])

    useEffect(() => {
        if (blackout && !control) {
            setControl(true);

            const timeoutId = setTimeout(() => {
                setBlackout(false);
                clearTimeout(timeoutId);
            }, 100);

            const timeoutId1 = setTimeout(() => {
                setBlackout(true);
                clearTimeout(timeoutId1);
            }, 200);

            const timeoutId2 = setTimeout(() => {
                setBlackout(false);
                clearTimeout(timeoutId2);
            }, 300);

            const timeoutId3 = setTimeout(() => {
                setBlackout(true);
                clearTimeout(timeoutId3);
            }, 800);

            const timeoutId4 = setTimeout(() => {
                setBlackout(false);
                clearTimeout(timeoutId4);
            }, 900);

            const timeoutId5 = setTimeout(() => {
                setBlackout(true);
                clearTimeout(timeoutId5);
            }, 1000);

            const timeoutId6 = setTimeout(() => {
                setBlackout(false);
                clearTimeout(timeoutId6);
            }, 1100);

            const timeoutId7 = setTimeout(() => {
                setBlackout(true);
                setFail(false);
                clearTimeout(timeoutId7);
            }, 1500);

            const timeoutId8 = setTimeout(() => {
                setOpen(false);
                clearTimeout(timeoutId8);
            }, 4100);

            const timeoutId9 = setTimeout(() => {
                navigate('/menu');
                clearTimeout(timeoutId9);
            }, 4500);
        }
    }, [blackout])

    useEffect(() => {
        if (operations) {
            const timeoutId = setTimeout(() => {
                setHints(true);

            }, 950);
            return () => clearTimeout(timeoutId);
        }
    }, [operations])

    return (
        <div className="mySkills">
            {!open ? <div className={`light ${control ? 'turn' : null}`}></div> : null}

            <>
                <Rope action={action} setAction={setAction} operations={operations} />
                {!hints ? <p className={`instruction ${operations ? 'turn' : null}`}>{words[language].first_hint}</p> : null}
                {!hints ? null : <p className={`instruction on turn`}>{words[language].last_hint}</p>}
            </>

            <div className="operations">
                <img className={`engrenagem zero ${operations ? 'turn' : null}`} src={engrenagem} alt="engrenagem" />
                <img className={`engrenagem one ${operations ? 'turn' : null}`} src={engrenagem} alt="engrenagem" />
                <img className={`engrenagem two ${operations ? 'turn' : null}`} src={engrenagem} alt="engrenagem" />
            </div>

            <div className="lamps">
                <span className="row">
                    <div className={`lamp ${operations ? 'turn' : null} zero ${blackout ? 'off' : null} ${fail ? 'fail' : null}`}>React</div>
                    <div className={`lamp ${operations ? 'turn' : null} one ${blackout ? 'off' : null} ${fail ? 'fail' : null}`}>PHP</div>
                    <div className={`lamp ${operations ? 'turn' : null} two ${blackout ? 'off' : null} ${fail ? 'fail' : null}`}>Sass</div>
                    <div className={`lamp ${operations ? 'turn' : null} three ${blackout ? 'off' : null} ${fail ? 'fail' : null}`}>NodeJS</div>
                    <div className={`lamp ${operations ? 'turn' : null} ten ${blackout ? 'off' : null} ${fail ? 'fail' : null}`}>VueJS</div>
                    <div className={`lamp ${operations ? 'turn' : null} eleven ${blackout ? 'off' : null} ${fail ? 'fail' : null}`}>TS</div>
                </span>
                <span className="row">
                    <div className={`lamp ${operations ? 'turn' : null} four ${blackout ? 'off' : null} ${fail ? 'fail' : null}`}>GIT</div>
                    <div className={`lamp ${operations ? 'turn' : null} five ${blackout ? 'off' : null} ${fail ? 'fail' : null}`}>CSS</div>
                    <div className={`lamp ${operations ? 'turn' : null} six ${blackout ? 'off' : null} ${fail ? 'fail' : null}`}>HTML</div>
                    <div className={`lamp ${operations ? 'turn' : null} seven ${blackout ? 'off' : null} ${fail ? 'fail' : null}`}>SQL</div>
                    <div className={`lamp ${operations ? 'turn' : null} nine ${blackout ? 'off' : null} ${fail ? 'fail' : null}`}>Laravel</div>
                    <div className={`lamp ${operations ? 'turn' : null} twice ${blackout ? 'off' : null} ${fail ? 'fail' : null}`}>TailWind</div>
                    <div className={`lamp ${operations ? 'turn' : null} eight ${blackout ? 'off' : null} ${fail ? 'fail' : null}`}>JS</div>
                </span>
            </div>

            <div className="filtro"></div>
        </div>
    );
}