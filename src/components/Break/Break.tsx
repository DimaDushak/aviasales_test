import React from 'react';
import classNames from 'classnames';
import styles from './break.css';

type TBreakSize = 7 | 10 | 17 | 19 | 20 | 30;

interface IBreakProps {
    size: TBreakSize;
    mobileSize?: TBreakSize;
    inline?: boolean;
    top?: boolean;
}

export function Break(props: IBreakProps) {
    const {
        inline = false,
        top = false,
        size,
        mobileSize
    } = props;

    const classes = classNames(
        styles[`s${size}`],
        { [styles[`m${mobileSize}`]]: mobileSize },
        { [styles.inline]: inline },
        { [styles.top]: top }
    );

    return (
        <div className={classes}></div>
    );
}
