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
					<Typing text="> python -m shugetsu.soft.description <br> Shugetsu Soft (Or Akizuki Soft) is an organization founded in the architecture of Project Shugetsu. As an individual development team, we've successfully maintained some successful project such as Pixivel.
					In the future, we plan to further down into the frontier of the structure of a new internet, extending maximum ability of it. <br> Traceback (most recent call last): <br> &nbsp;&nbsp; File '/usr/lib64/python/shugetsu/soft/description.py' , line 246, in &lt; module &gt; <br> &nbsp;&nbsp;&nbsp;&nbsp; rorical.sleep() <br> AttributeError: module 'rorical' has no attribute 'sleep'<br> >"></Typing>
				</div>
			</div>
		</div>
		<div class="section">
			<div class="container projects">
				<div class="title-text">Projects</div>
				<div class="text-container container-projects">
					<a class="project card lift-hover" href="https://pixivel.moe/" target="_blank" style="background-color: #6be2f5">
						<img class="img" src="../assets/imgs/pixivel.png" style="background-color: white;" />
						<div class="text">
							<div class="name">Pixivel</div>
							<div class="dec">优雅的Pixiv镜像站</div>
						</div>
					</a>
				</div>
			</div>
		</div>
		<div class="section">
			<div class="container team">
				<div class="title-text">Team Members</div>
				<div class="text-container team-members">
					<a class="member card lift-hover" href="https://rorical.blue/" target="_blank">
						<img class="avatar" src="../assets/imgs/ro.jpg" />
						<div class="text">
							<div class="name">Rorical</div>
							<div class="split"></div>
							<div class="dec">敲代码的白毛萌妹</div>
						</div>
					</a>
					<a class="member card lift-hover"  href="https://elfile4138.moe/" target="_blank">
						<img class="avatar" src="../assets/imgs/elf.jpg" />
						<div class="text">
							<div class="name">MatrewFile</div>
							<div class="split"></div>
							<div class="dec">指挥萌妹的讨厌PM</div>
						</div>
					</a>
          <a class="member card lift-hover"  href="https://blog.daihan.top/" target="_blank">
            <img class="avatar" src="../assets/imgs/ssf.jpg" />
            <div class="text">
              <div class="name">Sukanu</div>
              <div class="split"></div>
              <div class="dec">啥也不会的团欺咸鱼</div>
            </div>
          </a>
				</div>
			</div>
		</div>
    <div class="section">
      <div class="container links">
        <div class="title-text">Links</div>
        <div class="text-container">
          <a> Project ZERONE </a>
        </div>
      </div>
    </div>
		<div class="section footer">
			<div class="text">
				Copyright © 2022 Project Shugetsu. All Rights Reserved.
			</div>
		</div>
	</div>
</template>

<script>
	import Shapes from '../components/shapes.vue'
	import Typing from '../components/typing.vue'
	export default {
		components: {
			Shapes,
			Typing
		},
		data() {
			return {

			};
		},
		methods:{
			
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

      @media screen and (max-width: 844px) {
        .title-text {
          font: {
            size: 3.5rem !important;
          }
        }
        .subtitle-text {
          font: {
            size: 1.1rem !important;
          }
        }
      }

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
			padding: 76px 108px;
			display: block;
			color: rgba(0, 0, 0, .65);
			line-height: 32px;

      @media screen and (max-width: 844px) {
        padding: 16px 16px;
      }

      .content {
        overflow-wrap: anywhere;
      }
			font: {
				family: "Consolas","Sarasa Light";
				size: 1.1em;
			}
		}
	}
  .links {
    display: block;
    background-color: var(--color-red);
    text-align: center;

    overflow: hidden;

    .title-text {
      display: block;
      width: 100%;
      text-align: center;
      text-shadow: 0.07em 0.07em rgba(3, 3, 3, 0.3);
      color: white;

      padding: {
        top: 2rem;
      }

      font: {
        family: "Righteous Regular";
        size: 2em;
      }
    }

    .text-container {
      height: auto;
      width: auto;
      background-color: transparent;
      margin: auto;
      padding: 76px 108px;
      display: inline-flex;
      color: rgba(0, 0, 0, 0.8);
      line-height: 32px;
      text-align: center;

      font: {
        family: "Consolas","Sarasa Light";;
        size: 1.1em;
      }

      a {
        color: white;
        text-decoration: underline;
      }

    }
  }

	.projects {
		display: block;
		background-color: var(--color-blue);
		text-align: center;
		
		overflow: hidden;

    .container-projects {
      flex-wrap: wrap;
      justify-content: center;
      width: 80% !important;
      padding: 46px 0 !important;
    }
		
		.title-text {
			display: block;
			width: 100%;
			text-align: center;
			text-shadow: 0.07em 0.07em rgba(3, 3, 3, 0.3);
			color: white;

			padding: {
				top: 2rem;
			}

			font: {
				family: "Righteous Regular";
				size: 2em;
			}
		}

		.text-container {
			height: auto;
			width: auto;
			background-color: transparent;
			margin: auto;
			padding: 76px 108px;
			display: inline-flex;
			color: rgba(0, 0, 0, 0.8);
			line-height: 32px;
			text-align: center;

			font: {
				family: "Consolas","Sarasa Light";;
				size: 1.1em;
			}
			
			.project {
				border: .0625rem solid rgba(0, 0, 0, .05);
				background-color: var(--color-red);
				border-radius: 1rem;
        width: 20rem;
        height: 27rem;
				justify-content: center;
				align-items: center;
				margin: 15px 1%;
				user-select: none;
				text-decoration: none;
				overflow: initial;
				.img {
					margin: 40px 24px 18px;
					
					width: 14rem;
					height: 14rem;
					margin: {
						right: 10px;
						left: 10px;
					}
					object-fit: cover;
					border-radius: 10px;
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
		}
	}
  .team-members {
    flex-wrap: wrap;
    justify-content: center;
    width: 80% !important;
    padding: 46px 0 !important;
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
			user-select: none;
			text-decoration: none;
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
	
	.lift-hover {
		transition: transform .1s ease-in-out, shadow .1s ease-in-out;
		&:hover {
			transform: translate(0px, -10px);
		}
	}
	
	.card {
		box-shadow: 0 0 8px rgba(0,0,0,.175);
	}
</style>
