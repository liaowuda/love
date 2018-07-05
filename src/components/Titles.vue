<template>
	<div class='titles' >		
		<div class="prompt" v-if="panelShow">
			<div class="box"></div>
			<div class="mag">
				<span>{{ titlemag }}</span>
				<span class="confirm" @click="confirm">确定</span>
			</div>
		</div>

	</div>
</template>

<script>
	export default{
		name:'app-titles',
		porps:{
			panelShow: {
            	type: Boolean
       		}
		},
		props:['titlemag'],
		data(){
			return{
				panelShow:true
			}
		},
		methods:{
			confirm(){
				this.panelShow = !this.panelShow

			}
		},
		mounted(){

		}
	}
</script>

<style lang="less" scoped>
@import "./../style/mixin.less";
.prompt{
  		.box{
  			background: #000000;
  			width: 750*@rem; height: 1208*@rem;
  			position: absolute;
  			z-index: 1;
  			left: 0;
  			top: 0;
  			opacity: 0.5;

  		}
  		.mag{
  			width: 488*@rem; height: 350*@rem;
  			background: #FFFFFF;z-index: 2;
  			position: absolute;
  			top: 30%;
  			left: 50%;
  			left: 144*@rem;
  			border-radius: 20*@rem;
  			font-size: 45*@rem;
  			text-align: center;
  			padding-top: 50*@rem;
  			color:#ff278d;
  			.confirm{ 
  				color: #FFFFFF; 
  				display: block;
  				background: #ff278d;  
  				padding: 19*@rem ; 
  				width: 240*@rem; 
  				margin: 0 auto;
  				margin-top:100*@rem; 
  				border-radius: 20*@rem;
  			}
  		}
  		
  	}/*提示选择性别*/
</style>