import React from 'react';
import styles from './FeedPhotosItem.module.css';


const FeedPhotosItem = ({ photo, setMoldaPhoto }) => {
    function handleClick() {
        setMoldaPhoto(photo);
    }

    return (
        <li className={styles.photo} onClick={handleClick}>
            <img src={photo.src} alt={photo.title} />
            <span className={styles.visualizacao}>{photo.acessos}</span>
        </li>
    );
}

export default FeedPhotosItem;