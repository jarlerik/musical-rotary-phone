<script lang="ts">
    import type { BookType } from '../types/bookType';
	export let books: Array<BookType>;
</script>

<main>
	<h1>Books to do</h1>
    <h2>Add your favorite books, audio books and podcasts to read or listen later.</h2>
    <div>
        {#each books as book}
            <div>
                <h3>{book.title}</h3>
                <img src="{book.coverImage}" alt={book.title} />
            </div>
        {/each}
    </div>
</main>

<style lang="scss">
    $header-color: #d0785b;

    h1, h3 {

        color: $header-color;
        text-transform: uppercase;
        
    }
    h1 {
        font-size: 4em;
        font-weight: 100;
    }
    h2 {
        font-size: 2em;
        font-weight: 300;
        color: #a8a8a8;
    }
    h3 {
        font-size: 1.5em;
        font-weight: 500;
        
    }
</style>