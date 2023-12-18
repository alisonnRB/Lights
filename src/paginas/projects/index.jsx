import React, { useState, useEffect } from "react";
import '../../output/style_project.css';

export default function Projects() {
    const [open, setOpen] = useState(false);
    const [turn, setTurn] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setOpen(true);

        }, 900);
        return () => clearTimeout(timeoutId);
    }, [])

    return (
        <div className="projects">

            {!open ? <div className={`light ${turn ? 'off' : null}`}></div> : null}

        </div>
    )
}