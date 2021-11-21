<script lang="ts">
    import type { BookType } from "../types/bookType";

    export let book: BookType = { title: '', coverImage: ''};
</script>

<div>
    <h3>{book.title}</h3>
    <img class="coverImage" src="{book.coverImage}" alt={book.title} />
</div>

<style lang="scss">
    $header-color: #d0785b;
    h3 {

        font-size: 1.5em;
        font-weight: 500;
        color: $header-color;
        text-transform: uppercase;

    }
</style>