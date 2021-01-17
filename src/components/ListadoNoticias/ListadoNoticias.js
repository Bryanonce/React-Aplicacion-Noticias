import React from 'react';
import PropTypes from 'prop-types';
//Noticia
import {Noticia} from './Noticia';

export const ListadoNoticias = ({noticias})=>{
    return <div className="row">
        {
            noticias.map((noticia,index)=>{
                return <Noticia key={index} noticia={noticia}/>
            })
        }
    </div>
}

ListadoNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
}