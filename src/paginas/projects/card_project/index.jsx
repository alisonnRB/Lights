import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Card_project(props) {
    const [ref, inView] = useInView();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (inView) {
            setOpen(true);     
        }
    }, [inView]);


    return (
        <div ref={ref} className="content-project" style={props.index % 2 == 0 ? { justifyContent: 'start' } : { justifyContent: 'end' }}>
            {open ? <a href={props.infos.ready ? props.infos.ref : null} className="card" style={props.index % 2 == 0 ? {} : { flexDirection: 'row-reverse' }}>
                <img src={props.infos.img} alt="" style={{ backgroundColor: props.infos.bg }} />

                <div className="content-infos">
                    <div className="title" style={props.index % 2 == 0 ? { justifyContent: 'start' } : { justifyContent: 'end' }}>{props.infos.name}</div>
                    <div className="desc" style={props.index % 2 == 0 ? { textAlign: "left" } : { textAlign: "right" }}>
                        <p>{props.infos.text}</p>
                    </div>
                </div>
            </a> : null}
        </div>
    );
}