import React from "react";
import styles from './NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {
    return (
        <nav className={styles.nav_bar}>
            <FontAwesomeIcon icon={faEarthEurope} className={styles.earth_icon} />
            <h2>Adam's travel journal</h2>
        </nav>
    )
}