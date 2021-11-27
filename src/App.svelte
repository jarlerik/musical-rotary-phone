
<script lang="ts">
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Router from "./route/Router.svelte";
	import Route from "./route/Route.svelte";
	import Nav from "./components/nav/Nav.svelte";
	import { HOME, ABOUT } from './route/routePaths';
</script>

<div class="frontPage">
	<Nav />
	<Router>
		<Route path={HOME} component={Home} />
		<Route path={ABOUT} component={About} />
	</Router>
	
</div>