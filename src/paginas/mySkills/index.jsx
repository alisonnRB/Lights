import React, {useState, useEffect} from "react";
import '../../output/style_mySkills.css';

export default function MySkills(){
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setOpen(true);

        }, 900);
        return () => clearTimeout(timeoutId);
    }, [])

    return(
        <div className="mySkills">
            {!open ? <div className="light"></div> : null}





            <div className="filtro"></div>
        </div>
    );
}