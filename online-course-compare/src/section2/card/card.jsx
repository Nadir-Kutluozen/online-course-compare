import React from 'react';
import './card.css';

const Card = ({ title, description,Icon  }) => {
    return (
        <div className="card-custom">
            {Icon && <Icon size={50}  className="mb-3 text-primary" />}
            <div className="card-content">
                <h3 className="card-tit">{title}</h3>
                <p className="card-desc">{description}</p>
            </div>
        </div>
    );
};

export default Card;