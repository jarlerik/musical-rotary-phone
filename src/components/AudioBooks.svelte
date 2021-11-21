<script lang="ts">
    import type { BookType } from '../types/bookType';
    import AudioBook from '../components/AudioBook.svelte';
	export let audioBooks: Array<BookType>;
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