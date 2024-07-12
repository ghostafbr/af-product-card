import React, {CSSProperties, useContext} from 'react';
import styles from '../styles/styles.module.css';
import {ProductContext} from './ProductCard';

export interface Props {
    title?: string;
    className?: string;
    activeClass?: string;
    style?: CSSProperties;
}

export const ProductTitle = ({title, className, style}: Props) => {
    const {product} = useContext(ProductContext);
    return (
        <div className={`${styles.productTitle} ${className}`} style={style}>{title || product.title}</div>
    );
};