<script>
import config from "../lib/config";
</script>


<main>
	<h1 class="mb-3 text-xl font-medium tracking-wide">
		Welcome to {config.app.name}
	</h1>

	<div class="row">
		<a href={config.app.github_repo} target="_blank" rel="noreferrer">
			<img src="/lion/icon.svg" class="app-logo" alt="Tauri Logo" />
		</a>
	</div>

	<p class="mt-5 mb-8 text-teal-600">{config.app.description}</p>
</main>
