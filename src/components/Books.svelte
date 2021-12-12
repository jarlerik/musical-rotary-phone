<script lang="ts">
    import type { BookType } from '../types/bookType';
    import Book from '../components/Book.svelte';
	export let books: Array<BookType>;
</script>
<div class="books">
    <h3>Books</h3>
    
    {#each books as book}
        <Book book={book} />
    {/each}
    <hr>
</div>

<style lang="scss">
    h3 {
        $header-color: #d0785b;
        color: $header-color;
    }

    .books {
        text-align: center;
    }
</style>