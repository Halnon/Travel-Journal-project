import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styles from './Card.module.css';

export default function Card(props) {
    return (
        <div className={styles.card_container}>
            <img src={`../public/image/${props.coverImg}`} alt="main location" />
            <FontAwesomeIcon icon={faLocationDot} />
            <h3>{props.country}</h3>
            <p>{props.mapsLink}</p>
            <h1>{props.location}</h1>
            <p>{props.dates}</p>
            <p>{props.description}</p>
        </div>
    )
}

//card container should provide entire container to fit cards in
//large container will show card from list of data objects on left side of container larger then adjacent smaller cards
//small container will show only smaller images of other cards yet to be clicked on 