import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import '../../output/style_menu.css';

import Paw from "./paw";

export default function Menu() {
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
                        <p>ABOUT ME</p>
                    </div>

                    <div className="content-about-text">
                        <p>
                            Hello! I'm Álison, a full stack developer passionate about transforming ideas into digital reality.
                            With solid back-end and front-end skills.
                            Outside of the world of code, my heart beats for cats and a good cup of coffee.
                            Let's create something amazing together?☕🐾
                        </p>
                    </div>
                </div>

                <div className="bottom">
                    <p onClick={() => { Navigate_mySkills() }}>My skills</p>
                </div>
            </div> : null}

            {card2 ? <div className="card-menu-projects">
                <p className="number-box">02</p>
                <p className="title-box">PROJECTS</p>

                <div className="content-see">
                    <p onClick={() => { Navigate_myProjects() }}>See my projects</p>
                </div>
            </div> : null}

        </div>
    );
}