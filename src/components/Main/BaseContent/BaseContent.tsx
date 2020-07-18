import React from 'react';
import classNames from 'classnames';
import FiltersFormContainer from '../../../containers/FiltersFormContainer';
import { ButtonComponent } from './ButtonComponent';
import { GenericList } from '../../GenericList';
import { Break } from '../../Break';
import { Text } from '../../Text';
import { ITicket } from '../../../store/changeTickets/types';
import { sortByPrice, sortByTime } from '../../../utils/sortFunctions';
import { changePhrase } from '../../../utils/helpers';
import styles from './basecontent.css';

const leftButton = classNames(styles.sortButton, styles.leftButton);
const rightButton = classNames(styles.sortButton, styles.rightButton);

interface IBaseContentProps {
    isMobile: boolean;
    ticketsArray: ITicket[];
    reserveTicketsArray: ITicket[];
    sortTickets: (sortBy: (array: ITicket[]) => ITicket[]) => void;
    toggleShowingPopup: (isShownPopup: boolean) => void;
}

export function BaseContent(props: IBaseContentProps) {
    const { isMobile, ticketsArray, reserveTicketsArray, sortTickets, toggleShowingPopup } = props;
    const [ activeButton, setActiveButton ] = React.useState(true);

    const clickSort = (active: boolean, sortBy: (array: ITicket[]) => ITicket[]) => {
        if (!active) {
            setActiveButton(!activeButton);
            sortTickets(sortBy);
        }
    };

    const fiveTickets = ticketsArray.filter((item, index) => index < 5);

    return (
        <div className={styles.contentBlock}>
            {!isMobile && (
                <>
                    <FiltersFormContainer />
                    <Break size={19} />
                </>
            )}
            <div className={styles.ticketsBlock}>
                <div className={styles.sortButtonsBlock}>
                    <ButtonComponent
                        className={leftButton}
                        active={activeButton}
                        onClick={() => clickSort(activeButton, sortByPrice)}
                    >
                        Самый дешевый
                    </ButtonComponent>
                    <ButtonComponent
                        className={rightButton}
                        active={!activeButton}
                        onClick={() => clickSort(!activeButton, sortByTime)}
                    >
                        Самый быстрый
                    </ButtonComponent>
                </div>
                <Break size={20} mobileSize={10} top/>
                <ul>
                    <GenericList list={fiveTickets} />
                </ul>
                {ticketsArray.length == 0 && reserveTicketsArray.length > 0 && (
                    <Text size={14} mobileSize={12} className={styles.phraseStyle}>
                        {changePhrase(reserveTicketsArray.length)}
                    </Text>
                )}
                {isMobile && (
                    <ButtonComponent
                        className={styles.showFiltersButton}
                        active
                        onClick={() => toggleShowingPopup(true)}
                    >
                        Фильтры
                    </ButtonComponent>
                )}
            </div>
        </div>
    );
}
