<script lang="ts">
 import config from "../config";
</script>

<navbar class="navbar bg-base-100 fixed">
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-xl text-teal-600" href="/">{config.app.name}</a>
	</div>
	<a href="/download" class="btn btn-ghost rounded-btn">🔻 Download</a>
	<a href={config.app.github_repo} target="_blank" rel="noreferrer" class="btn btn-ghost rounded-btn">⭐ GitHub</a>
	<!-- The drop down icon for the nav bar. -->
	<!-- see https://daisyui.com/components/navbar/#navbar-with-search-input-and-dropdown -->
	<div class="dropdown dropdown-end">
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label tabindex="0" class="btn btn-ghost btn-circle avatar">
			<!-- svelte-ignore a11y-missing-attribute -->
			<div class="w-10 rounded-full">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img src="lion/512px.png" />
			</div>
		</label>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<ul
			tabindex="0"
			class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
		>
			<li><a href={config.app.community.discord} target="_blank" rel="noreferrer">Discord Server 🌐</a></li>
			<li><label for="my-modal-3">Dev Information 🧑🏽‍💻</label></li>
		</ul>
	</div>
</navbar>