import React from 'react';
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css'

export default function LandingPage() {
    return (
        <div>
            <h1 className={`${style.title}`}>Welcome to the Dog API!</h1>
            <Link to='/home'>
                <button className={`${style.button}`}>Click to enter</button>
            </Link>
            <div className={`${style.bgImage}`}></div>
        </div>
    )
}