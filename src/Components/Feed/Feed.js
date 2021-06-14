import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const Feed = () => {
    const [modalPhoto, setMoldaPhoto] = React.useState(null);

    return (
        <div>
            {modalPhoto && <FeedModal photo={modalPhoto} setMoldaPhoto={setMoldaPhoto}/>}
            <FeedPhotos setMoldaPhoto={setMoldaPhoto} />
        </div>
    )
}

export default Feed;