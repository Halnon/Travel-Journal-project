import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styles from './Card.module.css';

export default function Card(props) {
    return (
        <>
            <div className={styles.card_container}>
                <img src={`../images/${props.coverImg}`} className={styles.main_img} alt="main location" />
                <div className={styles.card_info_container}>
                    <div className={styles.top_row}>
                        <FontAwesomeIcon icon={faLocationDot} className={styles.locationdot} />
                        <h3 className={styles.country}>{props.country}</h3>
                        <a href={props.mapsLink} className={styles.googlelink}>View on Google Maps</a>
                    </div>
                    <h1 className={styles.location}>{props.location}</h1>
                    <p className={styles.dates}>{props.dates}</p>
                    <p className={styles.description}>{props.description}</p>
                </div>
            </div>
            <hr />
        </>
    )
}

//card container should provide entire container to fit cards in
//large container will show card from list of data objects on left side of container larger then adjacent smaller cards
//small container will show only smaller images of other cards yet to be clicked on 