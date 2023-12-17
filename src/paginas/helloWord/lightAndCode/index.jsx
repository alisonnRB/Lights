import React from "react";
import { useState, useEffect } from "react";

export default function Light_and_code() {
    const [escreve, setEscreve] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setEscreve(true);
        }, 1500);

        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        if(escreve){
            const timeoutId = setTimeout(() => {
                setEscreve(false);
            }, 6800);

            return () => clearTimeout(timeoutId);   
        }

    }, [escreve]);

    return (
        <div className="light">
            {escreve ? <p className="hello cursor">HELLO WORLD!</p> : null}
        </div>
    );
}