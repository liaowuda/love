<!-- 默契值 -->
<template>
	<div class="defaults">
		<div class="box">
			
		</div>
	</div>		
</template>
<script>
	export default{
		name:'defaults',
		data(){
			return{

			}
		},
		methods:{

		}
	}
</script>
<style type="text/css" lang='less'>
@import "./../style/mixin.less";
	.defaults{
	position: absolute;
	left: 0;
	top: 0;
 	width: 750*@rem;
  	height: 1208*@rem;
  	overflow: hidden;
  	background: url(../assets/answer-bg.png) no-repeat;
  	background-size: 100% 100%;
  	.box{
  		margin: 0 auto;
  		margin-top: 50*@rem;	
  		width: 620*@rem;
  		height: 912*@rem;
  		background: url(../assets/five-star.png) no-repeat;
  		background-size: 100% 100%;
  	}
  }
</style>