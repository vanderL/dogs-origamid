import React from 'react';
import styles from './PhotoContent.module.css';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import { UserContext } from '../../Context/UserContext';
import PhotoDelete from './PhotoDelete';
import Image from '../../Helper/Image';
import { useSelector } from 'react-redux';

const PhotoContent = ({ data, single }) => {
    const user = React.useContext(UserContext)

    const {photo, comments} = useSelector(state => state.photo.data)

    return (
        <div className={`${styles.photo} ${single ? styles.single : ''}`}>
            <div className={styles.img}>
                <Image src={photo.src} alt={photo.title} />
            </div>
                <div className={styles.details}>
                    <div>
                        <p className={styles.author}>
                            {user.data && user.data.username === photo.author ? (
                                <PhotoDelete id={photo.id}/>
                            ) : (
                                <Link to={`/perfil/${photo.author}`}> @{photo.author} </Link>
                            )}
                            <span className={styles.visualizacoes}> { photo.acessos} </span>
                        </p>
                        <h1 className="title">
                            <Link to={`/foto/${photo.id}`}> {photo.title}</Link>
                        </h1>
                        <ul className={styles.attributes}>
                            <li> {photo.peso} KG</li>
                            <li> {photo.idade} Anos </li>
                        </ul>
                    </div>
                </div>
                <PhotoComments single={single} id={photo.id} comments={comments} />
        </div>
    )
}

export default PhotoContent;