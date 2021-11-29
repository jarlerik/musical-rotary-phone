
<script lang="ts">
	import Home from "./pages/Home.svelte";
	import Books from "./components/Books.svelte";
	import Book from './components/Book.svelte';
	import AudioBooks from './components/AudioBooks.svelte';
	import Podcasts from './components/Podcasts.svelte';
	import About from "./pages/About.svelte";
	import Router from "./route/Router.svelte";
	import Route from "./route/Route.svelte";
	import Nav from "./components/nav/Nav.svelte";
	import { HOME, ABOUT, BOOKS, AUDIOS, PODCASTS } from './route/routePaths';
</script>

<div>
	<Nav />
	<Router>
		<Route exact path={HOME} component={Home} />
		<Route path={BOOKS} component={Books}>
			<Route path={'/books/:bookId'} component={Book} />
		</Route>

		<Route path={AUDIOS} component={AudioBooks} />
		<Route path={PODCASTS} component={Podcasts} />
		<Route path={ABOUT} component={About} />
	</Router>
	
</div>