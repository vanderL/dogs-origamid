import React, {useEffect, useState} from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { loadNewPhotos, resetFeedState } from '../../store/feed';
import Loading from '../../Helper/Loading';
import Error from '../../Helper/Error';

const Feed = ({user}) => {
    const [modalPhoto, setMoldaPhoto] = useState(null);
    const { infinite, loading, list, error} = useSelector(state => state.feed);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(resetFeedState())
        dispatch(loadNewPhotos({user, total: 6}))
    }, [dispatch, user])

    useEffect(() => {
        let wait = false;

        function infiniteScroll(){
            if(infinite){
                const scroll = window.scrollY;
                const height = document.body.scrollHeight - window.innerHeight;
                if (scroll > height * 0.75 && !wait) {
                    dispatch(loadNewPhotos({user, total: 6}))
                    wait = true;
    
                    setTimeout(() => {
                        wait = false;
                    }, 3000);
                }
            }
        }

        window.addEventListener('wheel', infiniteScroll);
        window.addEventListener('scroll', infiniteScroll);
        return () => {
            window.addEventListener('wheel', infiniteScroll);
            window.addEventListener('scroll', infiniteScroll);
        };

    }, [infinite, dispatch, user]);

    return (
        <div>
            {modalPhoto && <FeedModal photo={modalPhoto} setMoldaPhoto={setMoldaPhoto}/>}
            {loading && <Loading />}
            {error && <Error error={error}/>}
            {list.length > 0 && <FeedPhotos setMoldaPhoto={setMoldaPhoto} />}
            {!infinite && !user && (
                <p style={{
                    textAlign: 'center',
                    padding: '2rem 0 4rem 0',
                    color: '#888'
                }}>
                    N??o existem mais postagens.
                </p>
            )}
        </div>
    );
};

Feed.defaultProps = {
    user: 0
}

Feed.propTypes = {
    user: propTypes.oneOfType([
        propTypes.string.isRequired,
        propTypes.number.isRequired, 
    ])
}

export default Feed;