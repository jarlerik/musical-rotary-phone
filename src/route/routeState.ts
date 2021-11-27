import { writable } from "svelte/store";

const path = location.pathname;
export const routePath = writable(path);