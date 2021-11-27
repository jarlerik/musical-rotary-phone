
<script lang="ts">
    import { getBooks, getAudioBooks, getPodcasts } from '../api/mockData';
	import Books from '../components/Books.svelte';
    import AudioBooks from '../components/AudioBooks.svelte';
    import Podcasts from '../components/Podcasts.svelte';

    export let books = getBooks();
    export let audioBooks = getAudioBooks();
    export let podcasts = getPodcasts();
</script>

<div>
    <header>
        <h1>Books to do</h1>
    </header>
    <main>
        <h2>Is Your personal library where You can collect your favorite books, audio books and podcasts You'd like read or listen.</h2>
        <Books {books} />
        <AudioBooks {audioBooks} />
        <Podcasts {podcasts} />
    </main>
</div>

<style lang="scss">
    $header-color: #d0785b;

    h1 {

        color: $header-color;
        text-transform: uppercase;
        margin-left: 2rem;
        
    }
    h1 {
        font-size: 4em;
        font-weight: 100;
    }
    h2 {
        margin-left: 2rem;
        font-size: 2em;
        font-weight: 300;
        color: #a8a8a8;
    }
    
</style>