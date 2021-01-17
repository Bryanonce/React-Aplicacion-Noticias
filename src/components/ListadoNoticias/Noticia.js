import React from 'react';
import PropTypes from 'prop-types';
//import Components
import {Images} from './Images';
//Import css
import './Noticias.css';

export const Noticia = ({ noticia }) => {
    const { urlToImage, url, title, description, source } = noticia;
    return <div className="col s12 m6 l4">
        <div className="card">
            {
                urlToImage? <Images urlToImage={urlToImage} title={title} source={source}/>:null
            }
            <div className="card-content">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>

            <div className="card-action">
                <div className="text-center">
                    <a
                        href={url}
                        target="_blanck"
                        rel="noopener noreferrer"
                        className="waves-effect waves-ligth btn"
                    >
                        Ver Noticia Completa
                    </a>
                </div>
            </div>
        </div>
    </div>
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}