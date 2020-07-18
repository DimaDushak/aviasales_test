import React from 'react';
import classNames from 'classnames';
import { GenericList } from '../GenericList';
import { Filter } from './Filter/Filter';
import { Text } from '../Text';
import { generateRandomString } from '../../utils/generateRandomString';
import { IFilter } from '../../store/changeTickets/types';
import styles from './filtersform.css';

interface IFiltersFormProps {
    isMobile: boolean;
    isShownPopup: boolean;
    filtersArray: IFilter[];
    filterTicketsByAll: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    filterTicketsByStopsCount: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    toggleShowingPopup: (isShownFilters: boolean) => void;
}

const filtersTitlesArray = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

const filtersList = filtersTitlesArray.map(() => ({
        As: 'label' as const,
        id: generateRandomString(),
        className: styles.label
}));

export function FiltersForm(props: IFiltersFormProps) {
    const {
        isMobile,
        filtersArray,
        isShownPopup,
        filterTicketsByAll,
        filterTicketsByStopsCount,
        toggleShowingPopup
    } = props;

    const onChangeArray = [
        filterTicketsByAll,
        filterTicketsByStopsCount,
        filterTicketsByStopsCount,
        filterTicketsByStopsCount,
        filterTicketsByStopsCount
    ];

    const newFiltersList = filtersList.map((item, index) => ({
            ... item,
            content: <Filter
                         id={filtersArray[index].id}
                         name={filtersArray[index].name}
                         text={filtersTitlesArray[index]}
                         checked={filtersArray[index].checked}
                         onChange={(e: React.SyntheticEvent<HTMLInputElement>) => onChangeArray[index](e)}
                     />
    }));

    const classes = classNames(
        styles.filtersForm,
        { [styles.filtersFormHidden]: !isShownPopup },
        { [styles.filtersFormVisible]: isShownPopup }
    );

    return (
        <form className={classes}>
            {isMobile && (
                <button
                    type="button"
                    className={styles.closeButton}
                    onClick={() => toggleShowingPopup(false)}
                >
                    &#215;
                </button>
            )}
            <Text
                As={'h2'}
                size={12}
                mobileSize={10}
                weight={600}
                uppercase
                className={styles.heading}
            >
                Количество пересадок
            </Text>
            <GenericList list={newFiltersList}/>
        </form>
    );
}
