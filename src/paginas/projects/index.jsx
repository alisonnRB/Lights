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
        0: {
            'img': ihm,
            'bg': 'white',
            'name': 'IHM',
            'ref': 'https://www.literary-ihm.com',
            'git': 'https://github.com/alisonnRB/IHM.git',
            'ready': true,
            'activity' : 'O IHM foi um projeto extenso e denso, realizado com o objetivo de aprimorar minhas habilidades no desenvolvimento web.',
            'text': 'IHM é uma rede social literária que permite escrever e ler livros, além de possibilitar a interação entre os usuários.'
        },

        1: {
            'img': palabraria,
            'bg': 'black',
            'name': 'Palabraria',
            'ref': '',
            'git': 'https://github.com/alisonnRB/Palabraria',
            'ready': false,
            'activity': 'O projeto Palabraria está sendo realizado por meio de uma bolsa promovida pelo IFRS, com o objetivo de aprimorar a qualidade do ensino da língua espanhola.',
            'text': 'Um dicionário ilustrado e gratuito da língua espanhola, com o objetivo de ampliar o repertório linguístico de maneira colaborativa com as instituições educacionais.'
        },
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