import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    // const (service) = props;
    const { name, price, description, img } = service;
    return (
        <div className="service p-2">
            <img className="service-img img-fluid" src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price:{price}</h5>
            <p><small>{description}</small></p>
        </div>
    );
};

export default Service;