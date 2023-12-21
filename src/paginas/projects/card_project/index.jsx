import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import gitHub from '../../../drawble/icon-github.png';
import atalho from '../../../drawble/icon-atalho.png';

export default function Card_project(props) {
    const [ref, inView] = useInView();
    const [open, setOpen] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (inView) {
            setOpen(true);
        }
    }, [inView]);

    const cancelAnimation = () => {
        const timeoutId = setTimeout(() => {
            setHovered(false);

        }, 500);
        return () => clearTimeout(timeoutId);
    }

    return (
        <div ref={ref} className="content-project">
            {open ? <div onMouseEnter={() => { setHovered(true) }} onMouseLeave={() => { cancelAnimation() }} className={`card ${hovered ? (props.index % 2 == 0 ? 'hovered-reverse' : 'hovered-row') : null}`} style={!hovered ? props.index % 2 == 0 ? { flexDirection: 'row' } : { flexDirection: 'row-reverse' } : null}>
                <img src={props.infos.img} alt={props.infos.name + ' logotipo'} style={{ backgroundColor: props.infos.bg }} className={`imagem ${!hovered ? (props.index % 2 == 0 ? 'reverse' : 'row') : null}`} />

                {!hovered ?
                    <div className="content-infos" style={{animation: 'content 1s ease'}}>
                        <div className="title" style={props.index % 2 == 0 ? { justifyContent: 'start' } : { justifyContent: 'end' }}>{props.infos.name}</div>
                        <div className="desc" style={props.index % 2 == 0 ? { textAlign: "left" } : { textAlign: "right" }}>
                            <p>{props.infos.text}</p>
                        </div>
                        {!props.infos.ready ? <div className="coming-soon" style={props.index % 2 == 0 ? { justifyContent: 'end' } : { justifyContent: 'start' }}>coming soon . . .</div> : null}
                    </div>
                    :
                    <div className={`content-links ${props.index % 2 == 0 ? 'row' : 'reverse'}`}>

                        <div className="links" style={{animation: 'content 1s ease'}}>

                            <a href={props.infos.git}>
                                <span>Repository</span>
                                <img src={gitHub} alt="GitHub logotipo" />
                            </a>

                            {props.infos.ready ?
                                <a href={props.infos.ref}>
                                    <span>Website</span>
                                    <img className="atalho" src={atalho} alt="GitHub logotipo" />
                                </a>
                                : null}

                        </div>

                        <div className="activity" style={{animation: 'content 1s ease'}}>
                            {props.infos.activity}
                        </div>

                    </div>
                }
            </div> : null}
        </div>
    );
}