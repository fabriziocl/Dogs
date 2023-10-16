import React from "react";
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <nav className={styles.header}>
            <input className={styles.menuBtn} type="checkbox" id="menu-btn" />
            <label className={styles.menuIcon} htmlFor="menu-btn"><span className={styles.navicon}></span></label>
            <Link to="/" className={styles.logo}>FCL's dog API</Link>
            <ul className={styles.menu}>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/dog">Dog creation</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}