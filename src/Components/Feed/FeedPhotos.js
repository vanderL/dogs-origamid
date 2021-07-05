import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';

import { PHOTOS_GET } from '../../Service/api';

import useFetch from '../../Hooks/useFetch';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';

import styles from './FeedPhotos.module.css';

const FeedPhotos = ({user, setMoldaPhoto}) => {
    const {data, loading, error, request} = useFetch();

    React.useEffect(() => {
        async function fetchPhotos(){
            const {url, options} = PHOTOS_GET({ page: 1, total: 4, user});
            const {json} = await request(url, options);

            console.log(json);
        }

        fetchPhotos();
    }, [request, user])

    if (error) return <Error error={error} />
    if (loading) return <Loading />
    if (data)
        return (
            <ul className={`${styles.feed} animeLeft`}>
                {data.map((photo) => (
                    <FeedPhotosItem key={photo.id} photo={photo} setMoldaPhoto={setMoldaPhoto}/>
                ))}
            </ul>
        )
    else return null;
}

export default FeedPhotos;