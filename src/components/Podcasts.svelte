<script lang="ts">
    import type { BookType } from '../types/bookType';
    import Podcast from '../components/Podcast.svelte';
    import { getPodcasts } from '../api/mockData';
	export let podcasts: Array<BookType> = getPodcasts();
</script>
<div class="podcasts">
    <h3>Podcasts</h3>
    
    {#each podcasts as podcast}
        <Podcast {podcast} />
    {/each}
    <hr>
</div>

<style lang="scss">
    h3 {
        $header-color: #d0785b;
        color: $header-color;
    }

    .podcasts {
        text-align: center;
    }
</style>