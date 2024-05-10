import React from "react";
import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <nav className={styles.nav_bar}>
            <i class="fa-solid fa-earth-europe"></i>
            <h2>Adam's travel journal</h2>
        </nav>
    )
}