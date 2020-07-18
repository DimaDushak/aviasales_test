import {
    ITicket,
    IFilter,
    TChangeTicketsActionsTypes,
    ADD_TICKETS,
    SORT_TICKETS,
    FILTER_TICKETS_BY_ALL,
    FILTER_TICKETS_BY_STOPS_COUNT
} from './types';
import { generateRandomString } from '../../utils/generateRandomString';

const filtersNamesArray = [ 'all', '0', '1', '2', '3' ];

const filtersArray: IFilter[] = filtersNamesArray.map((item) => ({
    name: item,
    checked: true,
    id: generateRandomString()
}));

interface IState {
    ticketsArray: ITicket[];
    reserveTicketsArray: ITicket[];
    filtersArray: IFilter[];
}

const initialState: IState = {
    ticketsArray: [],
    reserveTicketsArray: [],
    filtersArray
};

export const changeTickets = (state = initialState, action: TChangeTicketsActionsTypes) => {
    switch(action.type) {
        case ADD_TICKETS:
            return {
                ...state,
                ticketsArray: action.ticketsArray,
                reserveTicketsArray: action.ticketsArray
            };

        case SORT_TICKETS:
            return {
                ...state,
                ticketsArray: action.sortBy(state.ticketsArray.slice()),
                reserveTicketsArray: action.sortBy(state.reserveTicketsArray.slice())
            };

        case FILTER_TICKETS_BY_ALL:
            return {
                ...state,
                ticketsArray: (action.e.currentTarget.checked) ? state.reserveTicketsArray : [],
                filtersArray: state.filtersArray.map((item) => ({ ...item, checked: action.e.currentTarget.checked }))
            };

        case FILTER_TICKETS_BY_STOPS_COUNT:
            const newFiltersArray = state.filtersArray.map((item) => {
                return (item.id == action.e.currentTarget.id) ? { ...item, checked: !item.checked } : item;
            });
            const filteredNewFiltersArray = newFiltersArray.filter((item) => item.checked);
            if (filteredNewFiltersArray.length > 3) newFiltersArray[0].checked = !newFiltersArray[0].checked;
            const filtersNamesArray = filteredNewFiltersArray.map((item) => +item.name);

            return {
                ...state,
                ticketsArray: state.reserveTicketsArray.filter((item) => {
                    return filtersNamesArray.includes(item.segments[0].stops.length)
                        || filtersNamesArray.includes(item.segments[1].stops.length);
                }),
                filtersArray: newFiltersArray
            };

        default:
            return state;
    }
};
