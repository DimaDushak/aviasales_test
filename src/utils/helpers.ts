const addZero = (arr: number[]) => {
    return arr.map((item) => (item < 10) ? ('0' + item) : item);
};

export const getFlightTimeInterval = (date: string, duration: number) => {
    const firstTime = `${date.slice(11, 13)}:${date.slice(14, 16)}`;
    
    const dateObject = new Date(+date.slice(0, 4), +date.slice(5, 7), +date.slice(8, 10), +date.slice(11, 13), +date.slice(14, 16));
    dateObject.setMinutes(dateObject.getMinutes() + duration);
    const secondTimeArray = [dateObject.getHours(), dateObject.getMinutes()];
    const newSecondTimeArray = addZero(secondTimeArray);
    const secondTime = `${newSecondTimeArray[0]}:${newSecondTimeArray[1]}`;

    return `${firstTime} – ${secondTime}`;
};

export const getTravelTime = (duration: number) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration - hours * 60;
    const timeArray = [hours, minutes];
    const newTimeArray = addZero(timeArray);

    return `${newTimeArray[0]}ч ${newTimeArray[1]}м`;
};

export const getStopsDeclination = (length: number) => {
    const declination = ['пересадки', '1 пересадка', '2 пересадки', '3 пересадки'];
    return declination[length];
};

export const getPrice = (price: number) => {
    const priceString = price.toString();
    const priceArray = [priceString.slice(0, priceString.length - 3), priceString.slice(-3)];

    return `${priceArray[0]} ${priceArray[1]} Р`;
};

export const changePhrase = (length: number) => {
    const forDeclination = [2, 0, 1, 1, 1, 2];
    const title = ['рейс', 'рейса', 'рейсов'];

    const rest = length % 100;
    const index = (rest > 10 && rest < 15) ? 2 : forDeclination[Math.min(length % 10, 5)];

    return `Мы нашли ${length} ${title[index]}, но ни один не соответствует заданным фильтрам.`;
};
