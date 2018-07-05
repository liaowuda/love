<!-- 提示框 -->
<template>
	<div class="tooltip">
		<div class="prompt" v-show="prompt">
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
		name:'tooltip',
		porps:{
			title:{
				type:String
			}
		},
		props:['titlemag'],
		data(){
			return{

			}
		}
	}
</script>
<style type="text/css" scoped lang="less">
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
  		
  	}//提示选择性别
</style>