import {
    ITicket,
    ADD_TICKETS,
    SORT_TICKETS,
    FILTER_TICKETS_BY_ALL,
    FILTER_TICKETS_BY_STOPS_COUNT,
    IAddTicketsAction,
    ISortTicketsAction,
    IFilterTicketsByAllAction,
    IFilterTicketsByStopsCountAction
} from './types'

export const addTickets = (ticketsArray: ITicket[]): IAddTicketsAction => ({
    type: ADD_TICKETS,
    ticketsArray
});

export const sortTickets = (sortBy: (array: ITicket[]) => ITicket[]): ISortTicketsAction => ({
    type: SORT_TICKETS,
    sortBy
});

export const filterTicketsByAll = (e: React.SyntheticEvent<HTMLInputElement>): IFilterTicketsByAllAction => ({
    type: FILTER_TICKETS_BY_ALL,
    e
});

export const filterTicketsByStopsCount = (e: React.SyntheticEvent<HTMLInputElement>): IFilterTicketsByStopsCountAction => ({
    type: FILTER_TICKETS_BY_STOPS_COUNT,
    e
});
