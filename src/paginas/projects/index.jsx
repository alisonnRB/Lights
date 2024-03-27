import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import '../../output/style_project.css';

import { LanguageContext } from "../../provider";
import words from './language.json';

import Card_project from "./card_project";

import ihm from '../../drawble/IHM.png';
import palabraria from '../../drawble/Palabraria.png';
import lines from '../../drawble/lines.png';

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
            'activity': 'O IHM foi um projeto extenso e denso, realizado com React e php com inituito de aprimorar minhas habilidades.',
            'activity_en' : 'The IHM was an extensive and dense project, carried out with React and PHP with the aim of improving my skills.',
            'text': 'IHM é uma rede social literária que permite escrever e ler livros, além de possibilitar a interação entre os usuários.',
            'text_en' : 'IHM is a literary social network that allows you to write and read books, as well as enabling interaction between users.'
        },

        1: {
            'img': palabraria,
            'bg': 'black',
            'name': 'Palabraria',
            'ref': '',
            'git': 'https://github.com/alisonnRB/new-palabraria',
            'ready': false,
            'activity': 'O projeto Palabraria foi realizado por meio de uma bolsa promovida pelo IFRS, com o objetivo de aprimorar a qualidade do ensino da língua espanhola. Com um servidor com paradgma orientado a objetos.',
            'activity_en': 'The Palabraria project was carried out through a grant promoted by IFRS, with the aim of improving the quality of Spanish language teaching. With a server with an object-oriented paradigm',
            'text': 'Um dicionário ilustrado e gratuito da língua espanhola, com o objetivo de ampliar o repertório linguístico de maneira colaborativa com as instituições educacionais.',
            'text_en': 'A free illustrated dictionary of the Spanish language, with the aim of expanding the linguistic repertoire in a collaborative way with educational institutions.'
        },

        2: {
            'img': lines,
            'bg': '#f1f1f1',
            'name': 'Analist-color',
            'ref': 'Analist-color.vercel.app',
            'git': 'https://github.com/alisonnRB/Interface-analist-color',
            'ready': true,
            'text': 'O projeto Analsit-color é na verdade um interface para interagir com a api criada por mim, sendo uma ferramenta para designs mais personalizados.',
            'text_en': 'The Analsit-color project is actually an interface to interact with the api created by me, being a tool for more personalized designs.',
            'activity': 'A interface foi construída em Vue.js e interage com a api criada em laravel mostrando as principais caracteristicas de cor em uma imagem.',
            'activity_en': 'The interface was built in Vue.js and interacts with the api created in Laravel, showing the main color characteristics in an image.'
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