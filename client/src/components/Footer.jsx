import React from "react";
import st from './Footer.module.css'
export default function Footer(){
    const year = new Date().getFullYear();
    return(
        <div>
            <footer>
                {`©${year} Fabrizio Castro López`}
            </footer>
        </div>
    )
}