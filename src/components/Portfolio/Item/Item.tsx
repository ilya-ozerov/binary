import React from 'react';
import '../portfolio.scss';
import "antd/dist/antd.css";
import {Image} from "antd";

type ItemProps = {
    imageUrl: string,
    imageAlt: string,
}

export const Item: React.FC<ItemProps> = ({imageUrl, imageAlt}) => {
    return (
        <div className="portfolio__item">
            <div className="portfolio__image">
                <Image width='100%' height='100%' src={imageUrl} alt={imageAlt}/>
            </div>
        </div>
    );
}