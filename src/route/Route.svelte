<script lang="ts">
    import svelte from 'svelte';
    export let path: string;
    export const exact: boolean = false;
    // TODO: what type is this?
    export let component: any;
    import { routePath } from './store';
    import { pathMatches } from './utils';
    
    let currentPath: string;
    routePath.subscribe((value) => currentPath = value);
</script>

{#if pathMatches(currentPath, path)}
    <svelte:component this={component}/>
{/if}