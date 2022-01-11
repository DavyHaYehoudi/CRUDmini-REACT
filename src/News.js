import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Article from './Article';

const News = () => {

    const [dataNews, setDataNews] = useState([]);
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        getData();
    },[])

    const getData = () => {
        axios.
        get('http://localhost:3003/articles')
        .then(res => setDataNews(res.data))
    }

    const handleSubmit =(e)=>{
        e.preventDefault();

        if(content.length >140){
            setError(true)
        }else{
            let dataPost = {
                author,
                content,
                date : new Date()
            }
    
            axios
                .post('http://localhost:3003/articles',dataPost)
                .then(() =>
                     getData(),
                     setAuthor(''),
                     setContent(''),
                     setError(false)
                     )
        }

    }

    return (
        <div className ='news-container'>
            <h1>NEWS</h1>

            <form onSubmit={handleSubmit}> 

                <input
                 type='text'
                 placeholder='Nom'
                 value={author}
                 onChange={e => setAuthor(e.target.value)}/>

                <textarea
                 style={{border : error && '1px red solid'}} placeholder="Message"
                 value={content}
                 onChange={e => setContent(e.target.value)}></textarea>

                <input
                 type='submit'
                 value= 'Envoyer' />

            { error && (<p>Veuillez écrire un maximum de 140 caractères</p>)
            }
            </form>


            <ul>
                { dataNews
                    .sort((a,b)=> b.date - a.date)
                    .map(dataNew => 
                        <Article key={dataNew.id} dataNew={dataNew}/>
                    )
                }
            </ul>
        </div>
    );
};

export default News;