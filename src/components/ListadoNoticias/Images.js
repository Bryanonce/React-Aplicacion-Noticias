import React from 'react';
import PropTypes from 'prop-types';

export const Images = ({urlToImage,title,source}) => {
    return <div className="card-image">
        <img
            src={urlToImage}
            alt={title}
        />
        <span className="card-title">{source.name}</span>
    </div>
}

Images.propTypes = {
    urlToImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    source: PropTypes.object.isRequired
}