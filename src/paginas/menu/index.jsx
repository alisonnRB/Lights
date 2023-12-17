import React, { useEffect, useState } from "react";
import '../../output/style_menu.css';

export default function Menu() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setOpen(true);
        }, 700);
        return () => clearTimeout(timeoutId);
    }, [])

    return (
        <div className="menu">
            {!open ? <div className='light'></div> : null}

            <div className="card-menu-about">
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
                    <p></p>
                </div>
            </div>

            <div className="card-menu-projects"></div>

        </div>
    );
}