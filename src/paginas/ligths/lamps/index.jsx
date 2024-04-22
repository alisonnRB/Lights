import React, { useState, useEffect } from "react";
import Lamp from "../lamp";

export default function Lamps(props) {
    const [inPreview, setInPreview] = useState(false);
    const [clicks, setClicks] = useState([]);
    const [lamps, setLamps] = useState(
        [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
        ]
    )

    const LevelPreview = async () => {
        setInPreview(true);
        for (let i = 0; i < props.fase.length; i++) {
            await HandleLamp(props.fase[i], true);
        }
        setInPreview(false);
        props.setPause(false);
    }

    const HandleLamp = async (index, p = false) => {
        if (!p) {
            if (index === props.fase[clicks.length]) {
                setClicks((prevState) => {
                    let newState = [...prevState, index];
                    return newState;
                });
            } else {
                setInPreview(false);
                setClicks([]);
                props.setOver(true);
            }
        }

        await delay(60);

        setLamps((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
        });

        await delay(500);

        setLamps((prevState) => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });

    };

    const delay = (delayInms) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
    };

    const LampGem = () => {
        const list = [];
        for (let i = 0; i < lamps.length; i++) {
            let item = <Lamp key={i} index={i} setLamps={HandleLamp} lamps={lamps} cant={inPreview} pause={props.pause}/>;
            list.push(item);
        }

        return list;
    }

    useEffect(() => {
        if (props.fase[0]) {
            LevelPreview();
        }
    }, [props.fase])

    useEffect(() => {
        if (clicks.length === props.fase.length && clicks.every((value, index) => value === props.fase[index]) && props.fase.length !== 0) {
            props.setPause(true);
            setTimeout(() => {
                setClicks([]);
                props.ScoreIncrement(clicks.length);
            }, 1000);
        }
    }, [clicks, props.fase]);
    


    return (
        <div className="lamps">
            {LampGem()}
        </div>
    );
}