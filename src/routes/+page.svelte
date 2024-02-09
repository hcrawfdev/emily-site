<script>
	import { goto } from '$app/navigation';
  import { base } from "$app/paths";
</script>

<div id="content-div">
	<img
		alt="Professional young women with ivy covered bricks in the background."
		class="cta-image"
		src="{base}/EMC-LinkedIn.png"
	/>
	<div class="link-buttons">
		<!-- svelte-ignore a11y-click-events-have-key-events -->

		<button on:click={() => goto(`${base}/about`)} class="link-button">
			<span>About</span>
		</button>
		<button class="link-button">
			<span>Service</span>
		</button>
		<button class="link-button disabled" disabled>
			<span>Shop (Coming Soon)</span>
		</button>
	</div>
</div>

<style>
	.cta-image {
		grid-column-start: 1;
		grid-column-end: span col4-start;
		grid-row-start: 2;
		grid-row-end: span 2;
		width: 100%;
		height: auto;
	}

	#content-div {
		grid-area: content;
	}

	.link-buttons {
		display: flex;
		margin-top: 2vw;
	}

	:global(.link-button) {
		overflow: hidden;
		transition: all 300ms ease;
		min-height: 100px;
		height: 100%;
		width: 33%;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 0.8s ease;
		position: relative;
		border: 2px solid #111;
		margin: 0 40px;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	}

	:global(.link-button.disabled) {
		pointer-events: none;
		color:lightgrey;
		background-color: lightgrey;
	}

	.link-button:not(.disabled)::before,
	.link-button:not(.disabled)::after {
		position: absolute;
		display: block;
		content: '';
		width: 100%;
		height: 100%;
	}

	.link-button span {
		color: #111;
	}

	.link-button:not(.disabled):after {
		width: 300%;
		height: 450%;
		left: -300%;
		transform: rotate(45deg);
		background-color: #e1a177;
		transition: all 300ms ease;
	}

	.link-button:not(.disabled):hover span {
		color: #fff;
		z-index: 10;
		font-weight: 600;
	}

	.link-button:not(.disabled):hover::after {
		left: -100%;
	}

	.link-button:not(.disabled):hover {
		border: 2px solid #1b0c3d;
		cursor: pointer;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.9) 0px 30px 60px -30px;
	}

	:global(body) {
		margin: 0;
	}

	@media (max-width: 480px) {
		.link-buttons {
			flex-direction: column;
		}

		.link-button {
			width: 75%;
			margin-top: 20px;
		}
	}
</style>
