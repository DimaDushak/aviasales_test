import React from 'react';
import classNames from 'classnames';
import styles from './text.css';

export enum EColors {
    black = 'black',
    white = 'white',
    grey= 'grey',
    blue = 'blue'
}

type TTextSize = 9 | 10 | 11 | 12 | '12lh15' | 13 | 14 | 20 | 24;
type TTextWeight = 600;

interface ITextProps {
    As?: 'h2' | 'div' | 'span' | 'th' | 'td';
    size: TTextSize;
    mobileSize?: TTextSize;
    weight?: TTextWeight;
    color?: EColors;
    children?: React.ReactNode;
    className?: string;
    uppercase?: boolean;
}

export function Text(props: ITextProps) {
    const {
        As = 'span',
        size,
        mobileSize,
        color = 'black',
        children,
        weight = 400,
        className,
        uppercase
    } = props;
    
    const classes = classNames(
        styles[`s${size}`],
        styles[color],
        styles[`w${weight}`],
        { [styles[`m${mobileSize}`]]: mobileSize },
        { [styles.uppercase]: uppercase },
        className
    );

    return (
        <As className={classes}>
            {children}
        </As>
    );
}
