import React from "react";
import st from './Card.module.css'

export default function Card({ name, image, temperament, temperaments, weight }) {
    return (
        <div className={st.card}>
            <img src={image ? image : "https://i.ibb.co/5YNSvfn/procer.jpg"} alt={name} width="250px" />
            <div className={st.cardheader}>
                <h2>{name}</h2>
            </div>
            <div className={st.cardfooter}>
            <h6>
            {temperaments && temperaments.length > 0? temperaments.map(t => t.name).join(", ") :
                temperament ? temperament :
                    <p>Unknown temperament</p>
            }    
            </h6>
            <h6>{weight.includes("NaN") ? <p>Unknown weight</p> : weight + " kg"}</h6>
            </div>
        </div>
    )
} 