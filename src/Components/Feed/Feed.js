import React, {useEffect, useState} from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const Feed = ({user}) => {
    const [modalPhoto, setMoldaPhoto] = useState(null);
    const [pages, setPages] = useState([1]);
    const [infinite, setInfinite] = useState(true);

    useEffect(() => {
        let wait = false;

        function infiniteScroll(){
            if(infinite){
                const scroll = window.scrollY;
                const height = document.body.scrollHeight - window.innerHeight;
                if (scroll > height * 0.75 && !wait) {
                    setPages((pages) => [...pages, pages.length + 1]);
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

    }, [infinite]);

    return (
        <div>
            {modalPhoto && <FeedModal photo={modalPhoto} setMoldaPhoto={setMoldaPhoto}/>}
            {pages.map(page => 
                <FeedPhotos 
                    user={user} 
                    key={page} 
                    page={page} 
                    setMoldaPhoto={setMoldaPhoto}
                    setInfinite={setInfinite}
                />
            )}
            
        </div>
    )
}

export default Feed;