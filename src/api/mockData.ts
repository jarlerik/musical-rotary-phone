
import faker from 'faker';

export interface BookType {
    coverImage?: string;
    title?: string;
}

export const getBooks = ():Array<BookType> => {
    const books = Array.from(Array(9)).map((_, index) => {
	return { coverImage: 'https://via.placeholder.com/200x320?text=BOOK', title: `#${index + 1} ${faker.random.words()}`};
    });
    return books;
}

export const getAudioBooks = ():Array<BookType> => {
    const books = Array.from(Array(4)).map((_, index) => {
	return { coverImage: 'https://via.placeholder.com/200x200?text=AUDIOBOOK', title: `#${index + 1} ${faker.random.words()}`};
    });
    return books;
}

export const getPodcasts = ():Array<BookType> => {
    const books = Array.from(Array(4)).map((_, index) => {
	return { coverImage: 'https://via.placeholder.com/200x200?text=PODCAST', title: `#${index + 1} ${faker.random.words()}`};
    });
    return books;
}