import React from 'react';
import classNames from 'classnames';
import styles from './popup.css';

interface IPopupProps {
    children: React.ReactNode;
    isShownPopup: boolean;
    toggleShowingPopup: (isShownPopup: boolean) => void;
}

export function Popup({ children, isShownPopup, toggleShowingPopup }: IPopupProps) {
    const popup = React.useRef<HTMLDivElement>(null);
    
    const classes = classNames(
        styles.popup,
        { [styles.popupHidden]: !isShownPopup },
        { [styles.popupVisible]: isShownPopup }
    );

    return (
        <div
            ref={popup}
            className={classes}
            onClick={(e: React.SyntheticEvent) => {
                if (e.target === popup.current) toggleShowingPopup(false);
            }}
        >
            {children}
        </div>
    );
}
