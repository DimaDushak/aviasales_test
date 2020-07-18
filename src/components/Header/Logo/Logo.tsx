import React from 'react';
import styles from './logo.css';

export function Logo() {
    return (
        <a href="#">
            <img className={styles.image} src="/images/Logo.svg" />
        </a>
    );
}
