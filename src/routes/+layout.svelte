<script>
 import DevInfo from "$lib/popups/dev-info.svelte";
    import "../app.css"
 import NavBar from "../lib/components/nav-bar.svelte";
</script>

<DevInfo />
<NavBar />

<main class="row py-20 text-center">
	<slot />
</main>