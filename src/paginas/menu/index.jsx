import React, { useEffect, useState } from "react";
import '../../output/style_menu.css';

export default function Menu() {
    const [open, setOpen] = useState(false);

    const [card1, setCard1] = useState(false);
    const [card2, setCard2] = useState(false);

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

    return (
        <div className="menu">
            {!open ? <div className='light'></div> : null}

            {card1 ? <div className="card-menu-about">
                <div className="top">
                    <div className="about-box">
                        <p>ABOUT ME</p>
                    </div>

                    <div className="content-about-text">
                        <p>
                            Hello! I'm Álison, a cat and coffee lover looking for opportunities to show what I love most, coding.
                            I believe in the power of collaboration and I look forward to working with people.
                            Let's create something amazing together! 🚀☕🐾
                        </p>
                    </div>
                </div>

                <div className="bottom">
                    <p>My skills</p>
                </div>
            </div> : null}

            {card2 ? <div className="card-menu-projects">
                <p className="number-box">02</p>
                <p className="title-box">PROJECTS</p>

                <div className="content-see">
                    <p>See my projects</p>
                </div>
            </div> : null}

        </div>
    );
}