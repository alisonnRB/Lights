import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { LanguageContext } from "../../provider";
import words from './language.json';

import '../../output/style_menu.css';

import Paw from "./paw";

export default function Menu() {
    const { language } = useContext(LanguageContext);

    const [open, setOpen] = useState(false);
    const [turn, setTurn] = useState(false);

    const [card1, setCard1] = useState(false);
    const [card2, setCard2] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setOpen(true);

        }, 900);
        return () => clearTimeout(timeoutId);
    }, [])

    useEffect(() => {
        if (open) {
            const timeoutId = setTimeout(() => {
                setCard1(true);
            }, 300);

            return () => clearTimeout(timeoutId);
        }
    }, [open])

    useEffect(() => {
        if (card1) {
            const timeoutId = setTimeout(() => {
                setCard2(true);
            }, 300);
            return () => clearTimeout(timeoutId);
        }
    }, [card1])

    const Navigate_mySkills = () => {
        setTurn(true);
        setOpen(false);

        const timeoutId = setTimeout(() => {
            navigate('/menu/mySkills');
        }, 500);

        return () => clearTimeout(timeoutId);

    }

    const Navigate_myProjects = () => {
        setTurn(true);
        setOpen(false);

        const timeoutId = setTimeout(() => {
            navigate('/menu/projects');
        }, 500);

        return () => clearTimeout(timeoutId);
    }

    return (
        <div className="menu">

            <Paw />

            {!open ? <div className={`light ${turn ? 'off' : null}`}></div> : null}

            {card1 ? <div className="card-menu-about">
                <div className="top">
                    <div className="about-box">
                        <p>{words[language].about}</p>
                    </div>

                    <div className="content-about-text">
                        <p>
                        {words[language].text}☕🐾
                        </p>
                    </div>
                </div>

                <div className="bottom">
                    <p onClick={() => { Navigate_mySkills() }}>{words[language].skills}</p>
                </div>
            </div> : null}

            {card2 ? <div className="card-menu-projects">
                <p className="number-box">02</p>
                <p className="title-box">{words[language].project}</p>

                <div className="content-see">
                    <p onClick={() => { Navigate_myProjects() }}>{words[language].look}</p>
                </div>
            </div> : null}

        </div>
    );
}