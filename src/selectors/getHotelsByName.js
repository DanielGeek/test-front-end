
export const getHotelsByName = (name = '', Hotels) => {

    if (name === '') {
        return [];
    }

    name = name.toLocaleLowerCase();
    return Hotels.filter(hotel => hotel.name.toLocaleLowerCase().includes(name));
}