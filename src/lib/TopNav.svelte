<script>
	import { base } from '$app/paths';
	import { Instagram, Linkedin } from 'lucide-svelte';
</script>

<div class="top-nav">
	<div class="socials">
		<div>
			<img
		alt="Professional young women with ivy covered bricks in the background."
		style="width: 50px; height: 50px;"
		src="{base}/eCm.png"
	/>
		</div>
		<a class="nav-link" href="https://www.instagram.com/lensofemc">
			<Instagram size="24" />
		</a>
		<a class="nav-link" href="https://www.linkedin.com/in/emilymwebb/">
			<Linkedin size="24" />
		</a>
	</div>
	<div class="nav-links">
		<a class="nav-link" href="{base}/about">About</a>
		<a class="nav-link" href="{base}/service">Service</a>
		<a class="nav-link" style="color:lightgrey; cursor:not-allowed" href="{base}/">Shop</a>
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

	.socials {
		display: flex;
		width: 100%;
		align-items: center
	}

	.nav-links {
		align-self: flex-end;
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
