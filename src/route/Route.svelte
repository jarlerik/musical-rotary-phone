<script lang="ts">
    import svelte from 'svelte';
    export let path: string;
    export let exact: boolean = false;
    // TODO: what type is this?
    export let component: any;
    import { routePath } from './store';
    
    let currentPath;
    routePath.subscribe((value) => currentPath = value);
</script>

{#if currentPath === path}
    <svelte:component this={component}/>
{/if}