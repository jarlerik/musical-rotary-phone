import { pathMatches } from './utils';

describe('Routing components', () => {

    test('route matches', () => {
        const match = pathMatches("/books", "/books")
        expect(match).toBeTruthy();
    });

    test('route do not matches', () => {
        const match = pathMatches("/audio-books", "/books")
        expect(match).toBeFalsy();
    });
});
