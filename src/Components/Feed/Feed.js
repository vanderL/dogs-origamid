import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const Feed = ({user}) => {
    const [modalPhoto, setMoldaPhoto] = React.useState(null);

    return (
        <div>
            {modalPhoto && <FeedModal photo={modalPhoto} setMoldaPhoto={setMoldaPhoto}/>}
            <FeedPhotos user={user} setMoldaPhoto={setMoldaPhoto} />
        </div>
    )
}

export default Feed;