<template>
	<div class="page">
		<div class="section hi">
			<div class="banner">
				<div class="background">
					<Shapes />
				</div>
				<div class="main">
					<div class="title-text">Shugetsu Soft</div>
					<div class="subtitle-text">Software & Protocol.</div>
					<div class="split"></div>
				</div>
			</div>
		</div>
		<div class="section">
			<div class="container description">
				<div class="title-text">About Us</div>
				<div class="text-container">
					About Content
				</div>
			</div>
		</div>
		<div class="section">
			<div class="container team">
				<div class="title-text">Team Members</div>
				<div class="text-container">
					<div class="member">
						<img class="avatar" src="../assets/imgs/ro.jpg" />
						<div class="text">
							<div class="name">Rorical</div>
							<div class="split"></div>
							<div class="dec">敲代码的白毛萌妹</div>
						</div>
					</div>
					<div class="member">
						<img class="avatar" src="../assets/imgs/elf.jpg" />
						<div class="text">
							<div class="name">MatrewFile</div>
							<div class="split"></div>
							<div class="dec">指挥萌妹的讨厌PM</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="section footer">
			<div class="text">
				Copyright © 2021 Project Shugetsu. All Rights Reserved.
			</div>
		</div>
	</div>
</template>

<script>
	import Shapes from '../components/shapes.vue'
	export default {
		components: {
			Shapes
		},
		data() {
			return {

			};
		},
		mounted() {

		}
	};
</script>

<style lang="scss">
	.section {
		position: relative;
		width: 100%;
	}

	.hi {
		height: 100vh;
	}

	@keyframes expand-horizontal {
		from {
			width: 0%;
		}

		to {
			width: 100%;
		}
	}


	.split {
		height: 2px;
		animation: expand-horizontal 2s;
		background-color: white;

		margin: {
			top: 0.625rem;
			bottom: 0.625rem;
			left: auto;
			right: auto;
		}
	}

	.banner {
		position: relative;
		align-items: center;
		display: flex;
		margin: auto;
		height: 100%;
		width: 100%;
		overflow: hidden;

		.background {
			background: {
				image: linear-gradient(45deg, var(--color-blue) 50%, var(--color-red) 50%);
				attachment: fixed;
			}

			position: absolute;
			z-index: -1;
			top: 0;
			width: 100%;
			height: 100%;
			bottom: 0;
			left: 0;
			right: 0;
			background-position: center center;
			background-size: cover;

			&::after {
				content: "";
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				z-index: 0;

				background: {
					attachment: fixed;
					size: 1rem 1rem;
					image: url(../assets/svgs/bgshape.svg);
				}
			}


		}

		.main {
			z-index: 99;
			margin: auto;
			padding: 24px;
			position: relative;
			color: white;

			.title-text {
				text-align: center;
				text-shadow: 0.04em 0.04em rgba(3, 3, 3, 0.3);

				font: {
					family: "Righteous Regular";
					size: 6.5rem;
					style: Italic;
				}
			}

			.bold {
				font: {
					weight: 3.2rem;
				}
			}

			.subtitle-text {
				text-align: center;
				text-shadow: 0.07em 0.07em rgba(3, 3, 3, 0.3);

				font: {
					family: "Mononoki Regular";
					size: 1.5rem;
				}
			}
		}

	}

	.container {
		position: relative;
		align-items: center;
		display: flex;
		margin: auto;
		height: 100%;
		width: 100%;
	}

	.description {
		background-color: var(--color-red);

		.title-text {
			width: 20%;
			text-align: center;
			text-shadow: 0.07em 0.07em rgba(3, 3, 3, 0.3);
			color: white;

			font: {
				family: "Righteous Regular";
				size: 2em;
			}
		}

		.text-container {
			height: auto;
			width: 80%;
			background-color: white;
			margin: auto;
			padding: 96px 128px;
			display: block;
			color: rgba(0, 0, 0, .65);
			line-height: 32px;

			font: {
				family: "Consolas","Sarasa Light";
				size: 1.1em;
			}
		}
	}

	.team {
		display: block;
		background-color: var(--color-yellow);
		text-align: center;

		.title-text {
			display: block;
			width: 100%;
			text-align: center;
			text-shadow: 0.07em 0.07em rgba(3, 3, 3, 0.3);
			color: white;

			padding: {
				top: 2rem;
				bottom: 2rem;
			}

			font: {
				family: "Righteous Regular";
				size: 2em;
			}
		}

		.member {
			width: 27rem;
			height: 10rem;
			border: .0625rem solid rgba(0, 0, 0, .05);
			background-color: #6be2f5;
			border-radius: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: row;
			margin: 15px 1%;

			.avatar {
				width: 8rem;
				height: 8rem;
				flex-shrink: 0;

				margin: {
					right: 10px;
					left: 10px;
				}

				border-radius: 50%;

				object-fit: cover;

				border: white 0.2rem solid;
			}

			.text {
				width: 100%;
				text-align: center;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				color: white;

				.name {
					line-height: 1.5;

					font: {
						family: "Righteous Regular";
						size: 2.8em;
					}
				}

				.dec {
					font: {
						family: "Mononoki Regular","Sarasa Light";
						size: 1.2em;
					}
				}
			}
		}

		.text-container {
			height: auto;
			width: auto;
			background-color: transparent;
			margin: auto;
			padding: 96px 128px;
			display: inline-flex;
			color: rgba(0, 0, 0, 0.8);
			line-height: 32px;
			text-align: center;

			font: {
				family: "Consolas","Sarasa Light";;
				size: 1.1em;
			}
		}
	}
	.footer{
		background: #545454;
		text-align: center;
		.text {
			width: auto;
			background-color: transparent;
			margin: auto;
			padding: 1rem;
			display: inline-flex;
			color: rgba(255, 255, 255, 0.95);
			line-height: 32px;
			text-align: center;
		
			font: {
				family: "Consolas","Sarasa Light";;
				size: 1.1em;
			}
		}
	}
</style>
