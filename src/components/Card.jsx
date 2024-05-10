import React from "react";
import styles from './Card.module.css';

export default function Card(props) {
    return (
        <div className={styles.card_container}>
            <div className={styles.large_container}>
                <img src={'#'} alt="main location" />
                <h1>{}</h1>

            </div>

            <div className={styles.small_container}>

            </div>
        </div>
    )
}

//card container should provide entire container to fit cards in
//large container will show card from list of data objects on left side of container larger then adjacent smaller cards
//small container will show only smaller images of other cards yet to be clicked on 