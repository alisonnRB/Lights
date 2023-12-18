import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../output/style_project.css';

import Card_project from "./card_project";

import ihm from '../../drawble/IHM.png';
import palabraria from '../../drawble/Palabraria.png';

export default function Projects() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [openContent, setOpenContent] = useState(false)
    const [turn, setTurn] = useState(false);
    const list = {
        0: { 'img': ihm, 'bg': 'white', 'name': 'IHM', 'ref': 'https:\\www.literary-ihm.com', 'ready': true, 'text': 'IHM é uma rede social literateraria, que permite escevrever e ler livros assim como permite a interação entre os usuarios.' },
        1: { 'img': palabraria, 'bg': 'black', 'name': 'Palabraria', 'ref': '', 'ready': false, 'text': 'Um dicionário ilustrado e livre de lingua espanhola com onjetivo de ampliar o repertório da lingua de uma maneira cooperativa com as instituições educacionais' },
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setOpen(true);

        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [])

    useEffect(() => {
        if (open) {
            const timeoutId = setTimeout(() => {
                setOpenContent(true)
            }, 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [open])

    const gera_cards = () => {
        const itens = [];

        for (let i = 0; i < Object.keys(list).length; i++) {
            let a = <Card_project key={i} index={i} infos={list[i]} />
            itens.push(a);
        }

        return itens;
    }

    const Navigate_menu = () => {
        setTurn(true);
        setOpen(false);
        
        const timeoutId = setTimeout(() => {
            navigate('/menu')
        }, 1000);
        return () => clearTimeout(timeoutId);
    }

    return (
        <div className="projects">
            {!open ? <div className={`light ${turn ? 'off' : null}`}></div> : null}

            <div className={`title ${open ? 'turn' : null}`}>
                <p>My Projects</p>
            </div>

            {openContent ? <div className="content-cards">
                {gera_cards()}

                <div className="coming">New projects coming soon . . .</div>
            </div> : null}

            <div className="back-card">
                <p onClick={() => { Navigate_menu() }}>Return</p>
            </div>

        </div>
    )
}