<script lang="ts">
    import { navigate } from '../../route/store'
    import { BOOKS, HOME, AUDIOS, PODCASTS, ABOUT } from '../../route/routePaths';
    const to = (url: string) => () => navigate(url);

</script>
<div>
    <nav>
        <ul>
            <li><a on:click|preventDefault={to(HOME)} href="/">Home</a></li>
            <li><a on:click|preventDefault={to(BOOKS)} href="/books">Books</a></li>
            <li><a on:click|preventDefault={to(AUDIOS)} href="/audio-books">Audio books</a></li>
            <li><a on:click|preventDefault={to(PODCASTS)} href="/podcasts">Podcasts</a></li>
            <li><a on:click|preventDefault={to(ABOUT)} href="/about">About</a></li>
        </ul>
    </nav>
</div>



<style lang="scss">
    nav {
        ul {
            display: block;
            padding-left: 0;
            li {
                
                margin: 2rem;
                display: inline;
                border-bottom: 1px solid #d0785b;
                a {
                    color: #d0785b;
                }
                a:hover {
                    text-decoration: none;
                }
            }
        }
    }
</style>