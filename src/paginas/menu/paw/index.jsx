import React from "react";

import paw from '../../../drawble/paw.png';

export default function Paw() {
    return (
        <>
            <div className="paw zero">
                <img src={paw} alt="PAW OF CATS" />
            </div>

            <div className="paw one">
                <img src={paw} alt="PAW OF CATS" />
            </div>

            <div className="paw two">
                <img src={paw} alt="PAW OF CATS" />
            </div>
        </>
    );
}