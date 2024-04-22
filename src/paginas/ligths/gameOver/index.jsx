import React from "react";

export default function Over(props) {
    return (
        <div className="card-content">

            <div className="card">
                <span>
                    <h2>GAME OVER!</h2>
                    <p>Parabéns, seu Score foi de: {props.score}</p>
                </span>
                <button onClick={()=>{props.clear()}}>
                    Recomeçar
                </button>
            </div>

        </div>
    );
}