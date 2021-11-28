import { writable } from 'svelte/store';

export const routePath = writable('/');

export const to = (url: string) => () => navigate(url);

export const navigate = (path: string) => {
        const state = {};
        const title = "";
        window?.history.pushState(state, title, path);
        routePath.update(() => path);
}