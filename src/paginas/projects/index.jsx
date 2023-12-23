import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import '../../output/style_project.css';

import { LanguageContext } from "../../provider";
import words from './language.json';

import Card_project from "./card_project";

import ihm from '../../drawble/IHM.png';
import palabraria from '../../drawble/Palabraria.png';

export default function Projects() {
    const { language } = useContext(LanguageContext);
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
            'activity': 'O IHM foi um projeto extenso e denso, realizado com o objetivo de aprimorar minhas habilidades no desenvolvimento web.',
            'activity_en' : 'IHM was an extensive and dense project, carried out with the aim of improving my web development skills.',
            'text': 'IHM é uma rede social literária que permite escrever e ler livros, além de possibilitar a interação entre os usuários.',
            'text_en' : 'IHM is a literary social network that allows you to write and read books, as well as enabling interaction between users.'
        },

        1: {
            'img': palabraria,
            'bg': 'black',
            'name': 'Palabraria',
            'ref': '',
            'git': 'https://github.com/alisonnRB/Palabraria',
            'ready': false,
            'activity': 'O projeto Palabraria está sendo realizado por meio de uma bolsa promovida pelo IFRS, com o objetivo de aprimorar a qualidade do ensino da língua espanhola.',
            'activity_en' : 'The Palabraria project is being carried out through a grant promoted by IFRS, with the aim of improving the quality of Spanish language teaching.',
            'text': 'Um dicionário ilustrado e gratuito da língua espanhola, com o objetivo de ampliar o repertório linguístico de maneira colaborativa com as instituições educacionais.',
            'text_en': 'A free illustrated dictionary of the Spanish language, with the aim of expanding the linguistic repertoire in a collaborative way with educational institutions.'
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
            let a = <Card_project key={i} index={i} infos={list[i]} language={language}/>
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
                <p>{words[language].project}</p>
            </div>

            {openContent ? <div className="content-cards">
                {gera_cards()}

                <div className="coming">{words[language].new}</div>
            </div> : null}

            <div className="back-card">
                <p onClick={() => { Navigate_menu() }}>{words[language].back}</p>
            </div>

        </div>
    )
}