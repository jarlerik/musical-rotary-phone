<script lang="ts">
    const handleClick = (url: string) =>  () => {
        console.log('link clicked', url);
        const state = {};
        const title = "";
        window.history.pushState(state, title, url);
    }
</script>
<div>
    <nav>
        <ul>
            <li><a on:click|preventDefault={handleClick("/")} href="/">Home</a></li>
            <li><a on:click|preventDefault={handleClick("/books")} href="/books">Books</a></li>
            <li><a on:click|preventDefault={handleClick("/audio-books")} href="/audio-books">Audio books</a></li>
            <li><a on:click|preventDefault={handleClick("/podcasts")} href="/podcasts">Podcasts</a></li>
            <li><a on:click|preventDefault={handleClick("/about")} href="/about">About</a></li>
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