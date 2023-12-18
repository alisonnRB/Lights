import React, { useState, useEffect } from "react";
import '../../output/style_mySkills.css';

import engrenagem from '../../drawble/engrenagem.png';

import Rope from './rope/index';

export default function MySkills() {
    const [open, setOpen] = useState(false);
    const [action, setAction] = useState(false);

    const [operations, setOperation] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setOpen(true);

        }, 900);
        return () => clearTimeout(timeoutId);
    }, [])

    useEffect(() => {
        if (action) {
            setOperation(true);
        }
    }, [action])

    return (
        <div className="mySkills">
            {!open ? <div className="light"></div> : null}

            <Rope action={action} setAction={setAction} />

            <div className="operations">
                <img className={`engrenagem zero ${operations ? 'turn' : null}`} src={engrenagem} alt="engrenagem" />
                <img className={`engrenagem one ${operations ? 'turn' : null}`} src={engrenagem} alt="engrenagem" />
                <img className={`engrenagem two ${operations ? 'turn' : null}`} src={engrenagem} alt="engrenagem" />
            </div>

            <div className="lamps">
                <span className="row">
                    <div className={`lamp ${operations ? 'turn' : null} zero`}>React</div>
                    <div className={`lamp ${operations ? 'turn' : null} one`}>PHP</div>
                    <div className={`lamp ${operations ? 'turn' : null} two`}>Sass</div>
                    <div className={`lamp ${operations ? 'turn' : null} three`}>NodeJS</div>
                </span>
                <span className="row">
                    <div className={`lamp ${operations ? 'turn' : null} four`}>GIT</div>
                    <div className={`lamp ${operations ? 'turn' : null} five`}>CSS</div>
                    <div className={`lamp ${operations ? 'turn' : null} six`}>HTML</div>
                    <div className={`lamp ${operations ? 'turn' : null} seven`}>SQL</div>
                    <div className={`lamp ${operations ? 'turn' : null} eight`}>JS</div>
                </span>
            </div>

            <div className="filtro"></div>
        </div>
    );
}