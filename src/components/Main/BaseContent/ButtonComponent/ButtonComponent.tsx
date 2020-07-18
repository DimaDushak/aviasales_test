import React from 'react';
import classNames from 'classnames';
import styles from './buttoncomponent.css';

interface IButtonComponent {
    children: React.ReactNode;
    onClick: () => void;
    active?: boolean;
    className?: string;
}

export function ButtonComponent(props: IButtonComponent) {
    const { children, onClick, active, className } = props;
    
    const classes = classNames(
        { [styles.activeButton]: active },
        { [styles.notActiveButton]: !active },
        className
    );

    return (
        <button onClick={onClick} className={classes}>
            {children}
        </button>
    );
}
