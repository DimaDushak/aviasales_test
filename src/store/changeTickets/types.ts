export interface ITicketFromServer {
    carrier: string;
    price: number;
    segments: ISegment[];
}

export interface ITicket {
    carrier: string;
    price: number;
    segments: ISegment[];
    id: string;
    content: React.ReactNode;
    flightTime: number;
}

export interface ISegment {
    origin: string;
    destination: string;
    date: string;
    duration: number;
    stops: string[];
}

export interface IFilter {
    name: string;
    checked: boolean;
    id: string;
}

export const ADD_TICKETS = 'ADD_TICKETS';
export const SORT_TICKETS = 'SORT_TICKETS';
export const FILTER_TICKETS_BY_ALL = 'FILTER_TICKETS_BY_ALL';
export const FILTER_TICKETS_BY_STOPS_COUNT = 'FILTER_TICKETS_BY_STOPS_COUNT';

export interface IAddTicketsAction {
    type: typeof ADD_TICKETS;
    ticketsArray: ITicket[];
}

export interface ISortTicketsAction {
    type: typeof SORT_TICKETS;
    sortBy: (array: ITicket[]) => ITicket[];
}

export interface IFilterTicketsByAllAction {
    type: typeof FILTER_TICKETS_BY_ALL;
    e: React.SyntheticEvent<HTMLInputElement>;
}

export interface IFilterTicketsByStopsCountAction {
    type: typeof FILTER_TICKETS_BY_STOPS_COUNT;
    e: React.SyntheticEvent<HTMLInputElement>;
}

export type TChangeTicketsActionsTypes = IAddTicketsAction | ISortTicketsAction
    | IFilterTicketsByAllAction | IFilterTicketsByStopsCountAction;
