import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <h2 className="text-primary mt-3">Our Services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;





// WEB IMG
// https://i.ibb.co/J25tpXw/404-1.jpg
// https://i.ibb.co/s3L0R9n/404-2jpg.jpg
// https://i.ibb.co/dPs2yMM/404-3.jpg
// https://i.ibb.co/qDnLZrP/car-1.jpg
// https://i.ibb.co/5Mdghvd/car-2.jpg
// https://i.ibb.co/gvRyvSV/car-3.jpg
// https://i.ibb.co/MZqyZdx/car-4.jpg
// https://i.ibb.co/mv4vsZC/car-5.jpg
// https://i.ibb.co/W0rdXxc/car-6.jpg
// https://i.ibb.co/w6F7m9P/car-7.jpg
// https://i.ibb.co/n1VVYGy/car-8.jpg
// https://i.ibb.co/v45GyMD/car-service-banners-1.jpg
// https://i.ibb.co/FDM1MVL/car-service-banners-2.jpg