import React from "react";

export default function Lamp(props) {

    return (
        <div className={`lamp ${props.lamps[props.index] ? "on" : null} lamp-${props.index}`}
            onClick={props.start.length !== 0 && !props.cant && !props.pause ? () => { props.setLamps(props.index) } : () => { }}
        >

        </div>
    );
}