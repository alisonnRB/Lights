import React from "react";

export default function Lamp(props) {

    return (
        <div className={`lamp ${props.lamps[props.index] ? "on" : null}`}
            onClick={!props.cant && !props.pause ? () => { props.setLamps(props.index) } : () => { }}
        >

        </div>
    );
}