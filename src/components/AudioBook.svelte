<script lang="ts">
    import type { BookType } from "../types/bookType";
import DefaultBook from "./DefaultBook.svelte";

    export let audioBook: BookType = { id: '', title: '', coverImage: ''};
</script>

<div class="audio">
    <DefaultBook type="audio-books" book={audioBook} />
</div>


<style lang="scss">
    .audio {
        display: inline-block;
        width: 25%;
    }

    @media screen and (max-width: 768px) {
        .audio {
            width: 50%;
        }
    }

    .audio :global(.coverImage) {
        width: 200px;
        height: 200px;
        border-radius: 12px;
    }
</style>