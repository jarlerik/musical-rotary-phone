<script lang="ts">
import type { BookType } from '../types/bookType';

    import DefaultBook from './DefaultBook.svelte';
    export let book: BookType;
</script>

<div class='book'>
    <DefaultBook {book} />
</div>


<style>
    .book {
        display: inline-block;
        width: 30%;
    }

    @media screen and (max-width: 768px) {
        .book {
            width: 100%;
        }
    }

    .book :global(.coverImage) {
        width: 200px;
        height: 320px;
        border-radius: 6px;
    }
</style>