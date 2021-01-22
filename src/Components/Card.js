import React from 'react'
import "../Style/Card.css";

export const Card = ({src,title,description,price}) => {
    return (
        <div className='card'>
            <img src={src} alt=''/>
            <div className="card_info">
            <h2><strong>{title}</strong></h2>
            <h4><strong>{description}</strong></h4>
            <h3><strong>{price}</strong></h3>
            
            </div>
        </div>
    )
}
