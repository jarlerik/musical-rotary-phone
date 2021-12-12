import { pathMatches, getParams } from './utils';
import Route from './Route.svelte';
import { getByTestId, render } from '@testing-library/svelte';
import TestComponent from '../test/TestComponent.svelte';

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
            const paramsObject = getParams(currentPath, path);
            expect(paramsObject['bookId']).toBe('1');
        });

        test('should collect second parameter', () => {
            const currentPath = "/user/2/books/1";
            const path = "/user/:userId/books/:bookId";
            const paramsObject = getParams(currentPath, path);
            expect(paramsObject['bookId']).toBe('1');
        });
    });

    describe('<Route>', () => {
        test('should render child component if currentPath and path match', () => {
            const result = render(Route, { props: { Component: TestComponent, path: '/' } });
            const element = getByTestId(result.container, 'test-component');
            expect(element.textContent).toContain('Test component');
        });

        test('should not render child component if currentPath and path do not match', () => {
            const result = render(Route, { props: { Component: TestComponent, path: '/foo' } });
            expect(() => getByTestId(result.container, 'test-component')).toThrow();
        });

        test('should call the loader function given as prop', () => {
            const loader = jest.fn();
            const result = render(Route, { props: { Component: TestComponent, path: '/', loader } });
            expect(loader).toHaveBeenCalled();
        });
    });
});
