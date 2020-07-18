import React from 'react';
import PopupContainer from '../containers/PopupContainer';
import FiltersFormContainer from '../containers/FiltersFormContainer';
import BaseContentContainer from '../containers/BaseContentContainer';
import { Layout } from './Layout';
import { Header } from './Header';
import { Main } from './Main';
import { Ticket } from './Main/BaseContent/Ticket';
import { Text } from './Text';
import { Break } from './Break';
import { sortByPrice } from '../utils/sortFunctions';
import { generateRandomString } from '../utils/generateRandomString';
import { ITicket } from '../store/changeTickets/types';
import { maxMobileWidth } from '../store/showingComponents/reducer';
import './main.global.css';

interface IAppProps {
    isMobile: boolean;
    isShownPopup: boolean;
    resizeWindow: (isMobile: boolean) => void;
    sortTickets: (sortBy: (array: ITicket[]) => ITicket[]) => void;
    addTickets: (array: ITicket[]) => void;
    toggleShowingPopup: (isShownPopup: boolean) => void;
}

export const App = (props: IAppProps) => {
    const { isMobile, isShownPopup, resizeWindow, sortTickets, addTickets, toggleShowingPopup } = props;
    const [ isLoaded, setIsLoaded ] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('resize', () => {
            resizeWindow(window.innerWidth < maxMobileWidth);
        });

        window.fetch('https://front-test.beta.aviasales.ru/search')
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                loadTickets([], response.searchId);
            });
    }, []);

    React.useEffect(() => {
        toggleShowingPopup(false);
    }, [isMobile]);

    React.useEffect(() => {
        document.body.style.overflow = (isShownPopup) ? 'hidden' : 'auto';
    }, [isShownPopup]);

    const loadTickets = (ticketsArray: ITicket[], searchId: string)  => {
        window.fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
            .then((response) => {
                if (response.status === 500) {
                    loadTickets(ticketsArray, searchId);
                }

                return response.json();
            })
            .then((response) => {
                const newTicketsArray = ticketsArray.concat(response.tickets);

                if (!response.stop) {
                    loadTickets(newTicketsArray, searchId);
                } else {
                    const extendedArray = newTicketsArray.map((item) => ({
                            ...item,
                            flightTime: item.segments[0].duration + item.segments[1].duration,
                            id: generateRandomString(),
                            content: <>
                                        <Ticket inform={item} />
                                        <Break size={19} mobileSize={10} top />
                                    </>
                    }));
                    
                    addTickets(extendedArray);
                    sortTickets(sortByPrice);
                    setIsLoaded(true);
                }
            });
    };

    if (isLoaded) {
        return (
            <>
                {isMobile && (
                    <PopupContainer children={<FiltersFormContainer />} />
                )}
                <Layout>
                    <Header />
                    <Main>
                        <BaseContentContainer />
                    </Main>
                </Layout>
            </>
        );
    } else {
        return <Text As={'div'} size={24} weight={600} className="flex">Загрузка</Text>;
    }
}
