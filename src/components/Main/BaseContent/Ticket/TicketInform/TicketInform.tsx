import React from 'react';
import { Text, EColors } from '../../../../Text';
import { ISegment } from '../../../../../store/changeTickets/types';
import {
    getStopsDeclination,
    getFlightTimeInterval,
    getTravelTime
} from '../../../../../utils/helpers';
import styles from './ticketinform.css';

interface ITicketInformProps {
    segment: ISegment;
}

export function TicketInform({ segment }: ITicketInformProps) {
    return (
        <table className={styles.ticketTable}>
            <thead className={styles.ticketTableHead}>
                <tr>
                    <Text
                        As={'th'}
                        size={'12lh15'}
                        mobileSize={9}
                        weight={600}
                        color={EColors.grey}
                        className={styles.firstTh}
                        uppercase
                    >
                        {`${segment.origin} - ${segment.destination}`}
                    </Text>
                    <Text
                        As={'th'}
                        size={'12lh15'}
                        mobileSize={9}
                        weight={600}
                        color={EColors.grey}
                        className={styles.secondTh}
                        uppercase
                    >
                        В пути
                    </Text>
                    <Text
                        As={'th'}
                        size={'12lh15'}
                        mobileSize={9}
                        weight={600}
                        color={EColors.grey}
                        uppercase
                    >
                        {getStopsDeclination(segment.stops.length)}
                    </Text>
                </tr>
            </thead>
            <tbody className={styles.ticketTableBody}>
                <tr>
                    <Text As={'td'} size={14} mobileSize={11} weight={600}>
                        {getFlightTimeInterval(segment.date, segment.duration)}
                    </Text>
                    <Text As={'td'} size={14} mobileSize={11} weight={600}>
                        {getTravelTime(segment.duration)}
                    </Text>
                    <Text As={'td'} size={14} mobileSize={11} weight={600}>
                        {`${(segment.stops.length > 0) ? `${segment.stops.join(', ')}` : 'Прямой'}`}
                    </Text>
                </tr>
            </tbody>
        </table>
    );
}
