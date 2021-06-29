import React from 'react';
import styles from './FeedPhotosItem.module.css';
import Image from '../../Helper/Image';


const FeedPhotosItem = ({ photo, setMoldaPhoto }) => {
    function handleClick() {
        setMoldaPhoto(photo);
    }

    return (
        <li className={styles.photo} onClick={handleClick}>
            <Image src={photo.src} alt={photo.title} />
            <span className={styles.visualizacao}>{photo.acessos}</span>
        </li>
    );
}

export default FeedPhotosItem;