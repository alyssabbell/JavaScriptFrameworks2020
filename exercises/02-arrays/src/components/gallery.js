import React from 'react';

const Gallery = (props) => {
    return (
        <>
            { props.files.map((image, index) => {
                return <img src={image} alt="" key={index}></img>
            })}
        </>
    )

}

export default Gallery;