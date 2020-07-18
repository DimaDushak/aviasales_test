import React from 'react';
import { Text } from '../../Text';
import styles from './filter.css';

interface IFilterProps {
    name: string;
    text: string;
    checked: boolean;
    id: string;
    onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}

export function Filter({ name, text, checked, id, onChange }: IFilterProps) {
    return (
        <>
            <input
                type="checkbox"
                id={id}
                name={name}
                className={styles.filterInput}
                checked={checked}
                onChange={onChange}
            />
            <Text size={13} className={styles.filterSpan}>{text}</Text>
        </>
    );
}
