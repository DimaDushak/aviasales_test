import React from 'react';
import styles from './header.css';
import { Logo } from './Logo';

export function Header() {
    return (
        <header className={styles.header}>
            <Logo />
        </header>
    );
}
