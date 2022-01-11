import axios from 'axios';
import React from 'react';

const Delete = ({dataNew}) => {

    const handleDelete =()=> {

        if(window.confirm('Etes-vous sûr de vouloir supprimer ce post ?')){

            axios
                .delete("http://localhost:3003/articles/" + dataNew.id)//N'ayant pas Redux pour appeler getData()on passe par un raffraichissent 'manuel'
                 window.location.reload()
        }
    }

    return (
        
            <button onClick={handleDelete}>Supprimer</button>
       
    );
};

export default Delete;