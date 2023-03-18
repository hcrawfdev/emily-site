<script>
      import { base } from "$app/paths";

</script>
<div class="top-nav">
	<a class="name-title" href="{base}/">Emily Crawford</a>
	<div class="nav-links">
		<a class="nav-link" href="{base}/about">About</a>
		<a class="nav-link" href="{base}/service">Service</a>
		<a class="nav-link" href="{base}/">Shop</a>
	</div>
</div>

<style>
	@font-face {
		font-family: 'Amsterdam One';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url('/fonts/AmsterdamOne.ttf') format('truetype');
	}

	.name-title {
		font-family: 'Amsterdam One';
		padding: 10px;
		font-size: 1.5em;
		text-decoration: none;
		color: black;
		text-align: center;
	}
	.top-nav {
		grid-area: nav;
		padding: 5px;
		margin-bottom: 10px;
		display: flex;
		justify-content: space-between;
		align-content: center;
	}

	.nav-links {
		align-self: center;
		display: flex;
	}

	.nav-link {
		padding: 0 20px 0 20px;
	}

	@media only screen and (max-width: 600px) {
		.top-nav {
			flex-direction: column;
		}

		.nav-link {
			padding-top: 25px;
			padding-bottom: 15px;
		}
	}
</style>
