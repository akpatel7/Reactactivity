import React from 'react';
import { ICar } from './demo';

interface IProps {
    car : ICar
}

export const CarItem: React.FC<IProps> = ({car}) => {
    return (
        <div>
           <h1>{car.color} {car.model} {car.topSpeed}</h1>
        </div>
    )
}
