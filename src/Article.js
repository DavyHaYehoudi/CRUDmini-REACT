import axios from 'axios';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import Delete from './Delete';

const Article = ({dataNew}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState('')

const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString('fr-FR',{
        hour:'numeric',
        minute:'numeric'
    })
    return newDate;
}

const handleValider = () => {

    let dataEdit = {
        author: dataNew.author,
        //On ajoute une sécurité. Si on envoie sans rien avoir édité alors editContent ='' et non pas le texte qui existait avant. On fait un ternaire.
        content: editContent ? editContent : dataNew.content,
        date: new Date()
    }

    axios
        .put("http://localhost:3003/articles/" + dataNew.id, dataEdit)
        .then(() => setIsEditing(false))

}

    return (
        <div className='article' style={{background: isEditing && '#f3feff'}}>
          <div className="card-header">
            <h3>{dataNew.author}</h3>
            <em>Posté le {dateParser(dataNew.date)}</em>
          </div>

          {isEditing ? (
              <textarea
                autoFocus
                defaultValue={editContent ? editContent : dataNew.content}//voir note dessous
                onChange={e => setEditContent(e.target.value)}>
               </textarea>
                
          ) : (//Pour faire apparaître le post édité il faudrait utiliser Redux pour appeler la fonction getData(), au pire forcer le raffraichissement de la page. On va être astucieux et utiliser une condition dans la balise <p> suivante qui, avant modification s'écrivait : <p>{dataNew.content}</p>
            <p>{editContent ? editContent : dataNew.content}</p>
          )}
                <div className='btn-container'>
                    {isEditing ?
                     (<button onClick={handleValider}>Valider</button>)
                     :
                     (<button onClick={()=>setIsEditing(true)}>Edit</button>)}

                    <Delete dataNew={dataNew}/>
                </div>
            
        </div>
    );
};

export default Article;