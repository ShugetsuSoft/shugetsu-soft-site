<template>
	<div class="content" @click="$refs.typer.focus()">
		<span v-html="textNow"></span><div class="typer" v-show="end" contenteditable="true" ref="typer" v-on:keydown="typedown"></div><span class="cursor" :class="{'blink': end}"></span>
	</div>
</template>

<script>
	export default {
		name: "Typing",
		props: {
			"text": {
				type: String
			}
		},
		data() {
			return {
				textNow: "",
				textBef: this.text.split(" "),
				nowProcess: 0,
				end: false,
				flag: false,
				typer: "asddsa"
			}
		},
		methods:{
			addChars(texts) {
				if(texts.length > 0) {
					this.textNow += texts.charAt(0)
					setTimeout(() => this.addChars(texts.substr(1, texts.length)), 20)
				}else{
					this.textNow += " "
					this.flag = true
				}
				
			},
			addMore() {
				if(this.nowProcess < this.textBef.length){
					this.flag = false
					if(this.textBef[this.nowProcess].charAt(0) == "<"){
						this.textNow += this.textBef[this.nowProcess] + " "
						this.flag = true
					}else{
						this.addChars(this.textBef[this.nowProcess])
					}
					++ this.nowProcess
					let testFlag = () => {
						if(this.flag){
							setTimeout(() => this.addMore(), 50)
						}else{
							setTimeout(() => testFlag(), 100)
						}
					}
					testFlag()
				}else{
					this.end = true
				}
			},
			typedown(event){
				if(event.keyCode==13){
					
					this.textNow += this.$refs.typer.innerText + "<br> >"
					this.$refs.typer.innerText = ""
					event.preventDefault()
					event.stopPropagation()
				}
			}
		},
		mounted() {
			this.$nextTick(() => this.addMore())
		}
	}
</script>

<style lang="scss">
	@keyframes blink {
		0%, 100% {
			border:{
				color: rgba(120, 120, 120, 0);
			}
		}
	
		50% {
			border:{
				color: rgba(120, 120, 120, 100);
			}
		}
	}
	
	.cursor {
		background-color: rgba(120, 120, 120, 0.0);
		display: inline-block;
		width: 0.7rem;
		border: {
			bottom: 1px solid rgba(120, 120, 120, 100);
		}
	}
	.blink {
		animation: blink 1s step-start infinite;
	}
	
	.typer {
		display: inline-block;
		width: auto;
		caret-color: rgba(255,255,255,0);
		&:focus {
			outline: none;
		}
	}
</style>
