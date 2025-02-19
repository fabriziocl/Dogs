// import React from "react";
// import st from './Card.module.css'

// export default function Card({ name, image, temperament, temperaments, weight }) {
//     return (
//         <div className={st.card}>
//             <img src={image ? image : "https://i.ibb.co/5YNSvfn/procer.jpg"} alt={name} width="250px" />
//             <div className={st.cardheader}>
//                 <h2>{name}</h2>
//             </div>
//             <div className={st.cardfooter}>
//             <h6>
//             {temperaments && temperaments.length > 0? temperaments.map(t => t.name).join(", ") :
//                 temperament ? temperament :
//                     <p>Unknown temperament</p>
//             }    
//             </h6>
//             <h6>{weight.includes("NaN") ? <p>Unknown weight</p> : weight + " kg"}</h6>
//             </div>
//         </div>
//     )
// } 

import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import st from "./Card.module.css";

export default function Card({ name, image, temperament, temperaments, weight }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [showSkeleton, setShowSkeleton] = useState(true);

    useEffect(() => {
        if (isLoaded) {
            const delay = setTimeout(() => {
                setShowSkeleton(false);
            }, 500); 

            return () => clearTimeout(delay);
        }
    }, [isLoaded]);

    return (
        <div className={st.card}>
            {showSkeleton && <Skeleton className={st.skeletonImg} baseColor="#b0c4b1" highlightColor="#98b7a0" />}
            
            <img
                src={image || "https://i.ibb.co/5YNSvfn/procer.jpg"}
                alt={name}
                className={`${st.image} ${showSkeleton ? st.hidden : ""}`}
                onLoad={() => setIsLoaded(true)}
            />

            <div className={st.cardheader}>
                {showSkeleton ? <Skeleton className={st.skeletonText} baseColor="#b0c4b1" highlightColor="#98b7a0" /> : <h2>{name}</h2>}
            </div>

            <div className={st.cardfooter}>
                {showSkeleton ? (
                    <Skeleton className={st.skeletonText} baseColor="#b0c4b1" highlightColor="#98b7a0"/>
                ) : (
                    <h6>
                        {temperaments?.length > 0
                            ? temperaments.map((t) => t.name).join(", ")
                            : temperament || "Unknown temperament"}
                    </h6>
                )}

                {showSkeleton ? (
                    <Skeleton className={st.skeletonText} baseColor="#b0c4b1" highlightColor="#98b7a0"/>
                ) : (
                    <h6>{weight.includes("NaN") ? "Unknown weight" : weight + " kg"}</h6>
                )}
            </div>
        </div>
    );
}
