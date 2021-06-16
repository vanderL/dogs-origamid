import React from 'react';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';
import Error from '../../Helper/Error';
import { COMMENT_POST } from '../../Service/api';

const PhotoCommentsForm = ({ id, setComments }) => {
    const [comment, setComment] = React.useState('');
    const {request, error} = useFetch();

    async function handleSubmit(e){
        e.preventDefault();

        const {url, options} = COMMENT_POST(id, {comment});
        const { response, json } = await request(url, options);
        if(response.ok) {
            setComments('');
            setComments((comments) => [...comments, json]);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <textarea 
                name="comment" 
                id="comment"
                placeholder="Comente..."
                value={comment}
                onChange={({target}) => setComment(target.value)} 
            />
            <button>
                <Enviar />
            </button>
            <Error error={error}/>
        </form>
    )
}

export default PhotoCommentsForm;