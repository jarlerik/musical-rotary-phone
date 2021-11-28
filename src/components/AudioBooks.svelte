<script lang="ts">
    import type { BookType } from '../types/bookType';
    import AudioBook from '../components/AudioBook.svelte';
    import { getAudioBooks } from '../api/mockData';
	export let audioBooks: Array<BookType> = getAudioBooks();
</script>
<div class="audioBooks">
    <h3>Audio books</h3>
    {#each audioBooks as audioBook}
        <AudioBook {audioBook} />
    {/each}
    <hr>
</div>

<style lang="scss">
    h3 {
        $header-color: #d0785b;
        color: $header-color;
    }

    .audioBooks {
        text-align: center;
    }
</style>