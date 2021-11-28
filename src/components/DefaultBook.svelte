<script lang="ts">
    import { to } from "../route/store";
    import type { BookType } from "../types/bookType";
    export let book: BookType = { id: '', title: '', coverImage: ''};
</script>

<a href={`/books/${book.id}`} on:click|preventDefault={to(`/books/${book.id}`)}>
    <h3>{book.title}</h3>
    <img class="coverImage" src="{book.coverImage}" alt={book.title} />
</a>

<style lang="scss">
    $header-color: #d0785b;
    h3 {

        font-size: 1.5em;
        font-weight: 500;
        color: $header-color;
        text-transform: uppercase;

    }
</style>