import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import styles from './FeedPhotos.module.css';
import { useSelector } from 'react-redux';

const FeedPhotos = ({ setMoldaPhoto}) => {
    const {list} = useSelector(state => state.feed);

        return (
            <ul className={`${styles.feed} animeLeft`}>
                {list.map((photo) => (
                    <FeedPhotosItem key={photo.id} photo={photo} setMoldaPhoto={setMoldaPhoto}/>
                ))}
            </ul>
        )
}

export default FeedPhotos;