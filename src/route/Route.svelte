<script lang="ts">
    import svelte from 'svelte';
    export let path: string;
    // TODO: what type is this?
    export let component: any;

    const currentPath = location.pathname;
</script>

{#if currentPath === path}
    <svelte:component this={component}/>
{/if}