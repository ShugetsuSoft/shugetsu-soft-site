<template>
	<div id="app">
		<transition mode="out-in">
			<keep-alive v-if="$route.meta.keepAlive">
				<router-view></router-view>
			</keep-alive>
			<router-view v-else></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'App',
	}
</script>

<style lang="scss">
	:root {
		--color-red: #ff6347;
		--color-purple: #483d8b;
		--color-blue: #21d5fd;
		--color-yellow: #fff018;
	}

	html,
	body {
		margin: 0;
		font-family: 'Sarasa Light';
	}

	::-webkit-scrollbar {
		width: 6px;
		height: 5px;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
		background: var(--color-blue);
	}

	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		background: var(--color-red);
	}

	@font-face {
		font-family: 'Righteous Regular';
		src: url('./assets/fonts/Righteous-Regular.ttf');
	}

	@font-face {
		font-family: 'Mononoki Regular';
		src: url('./assets/fonts/mononoki-Regular.ttf');
	}
	
	@font-face {
		font-family: 'Sarasa Light';
		src: url('./assets/fonts/sarasa-ui-k-light.ttf');
	}
	
</style>
