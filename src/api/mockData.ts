
import faker from 'faker';
import type { BookType } from '../types/bookType';


const getData = (count: number, type: string, imageSize: string) => {
    const books = Array.from(Array(count)).map((_, index) => {
        const id = `${type}-${index}`;
	return { id, coverImage: `https://via.placeholder.com/${imageSize}?text=${type}`, title: `${faker.random.words()}`};
    });
    return books;
}


export const getBooks = ():Array<BookType> => {
    const books = getData(9, 'BOOK', '200x320');
    return books;
}

export const getAudioBooks = ():Array<BookType> => {
    const audio = getData(4, 'AUDIO', '200x200');
    return audio;
}

export const getPodcasts = ():Array<BookType> => {
    const podcasts = getData(4, 'PODCAST', '200x200');
    return podcasts;
}