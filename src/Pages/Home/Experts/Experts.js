import React from 'react';
import './Expert.css';
import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg';
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg';
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg';
import mechanic5 from '../../../images/mechanic/mechanic-5.jpg';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic2,
        name: 'John Polin',
        expertize: '-Market Researcher-'
    },
    {
        img: mechanic3,
        name: 'John Andreson',
        expertize: '-Coloring Expert-'
    },
    {
        img: mechanic4,
        name: 'Michel Smith',
        expertize: '-Polish Expert-'
    },
    {
        img: mechanic5,
        name: 'Robin De Mario',
        expertize: '-Technical Expert-'
    }
]

const Experts = () => {
    return (
        <div className="container expert-bg mt-5">
            <h2 className="text-primary">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;