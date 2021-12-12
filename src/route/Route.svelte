<script lang="ts">
    import svelte from 'svelte';
    import { routePath } from './store';
    import { getParams, pathMatches } from './utils';
    import type { SvelteComponent } from 'svelte/types/runtime';

    type Parameters = Record<string, string>;

    export let path: string;
    export const exact: boolean = false;
    export let Component: typeof SvelteComponent;
    export var loader: (loaderParams: Parameters | undefined) => any;
    
    let currentPath: string;
    routePath.subscribe((value) => currentPath = value);
    const parameters: Parameters | undefined = getParams(currentPath, path);
    const props = loader?.(parameters);

</script>

{#if pathMatches(currentPath, path)}
    <svelte:component { ...props} {parameters} this={Component}/>
{:else}
    <slot></slot>
{/if}
