<script lang="ts">
    import svelte from 'svelte';
    export let path: string;
    export const exact: boolean = false;
    // TODO: what type is this?
    export let component: any;
    import { routePath } from './store';
    import { params, pathMatches } from './utils';
    
    let currentPath: string;
    routePath.subscribe((value) => currentPath = value);
    const parameters = params(currentPath, path); 
</script>

{#if pathMatches(currentPath, path)}
    <svelte:component {parameters} this={component}/>
{:else}
    <slot></slot>
{/if}
