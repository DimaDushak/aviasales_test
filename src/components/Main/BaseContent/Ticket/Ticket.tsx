import React from 'react';
import { TicketInform } from './TicketInform';
import { Text, EColors } from '../../../Text';
import { Break } from '../../../Break';
import { ITicketFromServer } from '../../../../store/changeTickets/types';
import { getPrice } from '../../../../utils/helpers';
import styles from './ticket.css';

interface ITicketProps {
    inform: ITicketFromServer;
}

export function Ticket({ inform }: ITicketProps) {
    return (
        <div className={styles.ticket}>
            <div className={styles.ticketTop}>
                <Text size={24} mobileSize={20} weight={600} color={EColors.blue}>
                    {getPrice(inform.price)}
                </Text>
                <img
                    className={styles.ticketImage}
                    src={`//pics.avs.io/99/36/{${inform.carrier}}.png`}
                />
            </div>
            <Break size={17} top />
            <TicketInform segment={inform.segments[0]} />
            <Break size={7} top />
            <TicketInform segment={inform.segments[1]} />
            <Break size={7} top />
        </div>
    );
}
