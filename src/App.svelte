
<script lang="ts">

	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Router from "./route/Router.svelte";
	import Route from "./route/Route.svelte";
	import Nav from "./components/nav/Nav.svelte";
</script>

<div class="frontPage">
	<Nav />
	<Router>
		<Route path="/" component={Home} />
		<Route path="/about" component={About} />
	</Router>
	
</div>