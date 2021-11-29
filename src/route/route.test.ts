import { pathMatches, params } from './utils';

describe('Routing components', () => {

    describe('pathMatches', () => {

        test('route matches', () => {
            const match = pathMatches("/books", "/books")
            expect(match).toBeTruthy();
        });

        test('route do not matches', () => {
            const match = pathMatches("/audio-books", "/books")
            expect(match).toBeFalsy();
        });

        test('route matches with sub route', () => {
            const match = pathMatches("/books/1", "/books/:bookId");
            expect(match).toBeTruthy();
        });

        test('route matches with multiple resources', () => {
            const match = pathMatches("/users/2/books/1", "/users/:userId/books/:bookId");
            expect(match).toBeTruthy();
        });
    });

    describe('routing params', () => {

        test('should collect first parameter', () => {
            const currentPath = "/books/1";
            const path = "/books/:bookId";
            const paramsObject = params(currentPath, path);
            expect(paramsObject['bookId']).toBe('1');
        });

        test('should collect first and second parameter', () => {
            const currentPath = "/user/2/books/1";
            const path = "/user/:userId/books/:bookId";
            const paramsObject = params(currentPath, path);
            expect(paramsObject['bookId']).toBe('1');
            expect(paramsObject['userId']).toBe('2');
        });
    });
});
