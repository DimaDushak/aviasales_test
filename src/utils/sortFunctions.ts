import { ITicket } from '../store/changeTickets/types';

function comparision<K extends string>(prop: K) {
    return <O extends Record<K, any>>(a: O, b: O) => a[prop] - b[prop];
}

export function sortByPrice(array: ITicket[]) {
    return array.sort(comparision('price'));
}

export function sortByTime(array: ITicket[]) {
    return array.sort(comparision('flightTime'));
}
