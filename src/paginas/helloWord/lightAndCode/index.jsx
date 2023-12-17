import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Light_and_code() {
    const [escreve, setEscreve] = useState(false);
    const [move, setMove] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setEscreve(true);
        }, 1500);

        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        if (escreve) {
            const timeoutId = setTimeout(() => {
                setEscreve(false);
            }, 6800);

            const Timer = setTimeout(() => {
                setMove(true);
            }, 7000);

            return () => clearTimeout(timeoutId);
        }
    }, [escreve]);

    useEffect(() => {
        if (move) {
            const timeoutId = setTimeout(() => {
                navigate('/Menu');
            }, 1000);

            return () => clearTimeout(timeoutId);
        }
    }, [move])

    return (
        <div className="light">
            {escreve ? <p className="hello cursor">HELLO WORLD!</p> : null}
        </div>
    );
}