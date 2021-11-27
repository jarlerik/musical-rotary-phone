<script lang="ts">
    import type { BookType } from "../types/bookType";
    import DefaultBook from "./DefaultBook.svelte";

    export let podcast: BookType = { id: '', title: '', coverImage: ''};
</script>

<div class="podcast">
    <DefaultBook book={podcast} />
</div>

<style lang="scss">
    
    .podcast {
        display: inline-block;
        width: 25%;
    }

    @media screen and (max-width: 768px) {
        .podcast {
            width: 50%;
        }
    }

    .podcast :global(.coverImage) {
        width: 200px;
        height: 200px;
        border-radius: 12px;
    }
</style>