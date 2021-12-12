
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
	import { getBooks } from "./api/mockData";

	const books = getBooks();

	const loader = (params) => {
		const bookId = parseInt(params['bookId']);
		return bookId ? { book: books[bookId] } : { books }
	}
</script>

<div>
	<Nav />
	<Router>
		<!-- <Route exactpath={HOME} component={Home} /> -->
		<Route loader={loader} path="/books" Component={Books}>
			<Route loader={loader} path="/books/:bookId" Component={Book} />
		</Route>

		<!-- <Route path={AUDIOS} component={AudioBooks} />
		<Route path={PODCASTS} component={Podcasts} />
		<Route path={ABOUT} component={About} /> -->
	</Router>
	
</div>