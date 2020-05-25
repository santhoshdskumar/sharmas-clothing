
import React from 'react';
import './menu-items.styles.scss';

const MenuItem = ({ name, imageUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <div
                className="background-image" style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="content">
                <h1 className="title">{name.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div >
    )
}

export default MenuItem;