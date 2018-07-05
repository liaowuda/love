<template>
	<div class="invitedhome">
		<app-top></app-top>
		<div class="box">
			<div class="mag">
				您的小宝贝邀请您测试彼此的感情默契
			</div>
			<div class="tacit">
				默契值达到80%以上可以免费获得浪漫玫瑰哦
			</div>
			<div class="test" @click='goAnswer'>
				进入默契测试
			</div>
		</div>
	</div>	
</template>
<script>
import top from './../components/top'
	export default{
		nane:'invitedhome',
		data(){
			return{

			}
		},
		methods:{
			goAnswer(){
				this.$router.push({
					path:'./answer'
				})
			}
		},
    	components:{
      		"app-top":top
    	}
	}
</script>
<style scoped lang="less">
@import "./../style/mixin.less";
	.invitedhome{
		position: absolute;
		left: 0;
		top: 0;
	 	width: 750*@rem;
	  	height: 1208*@rem;
	  	overflow: hidden;
	  	background: url(../assets/home-bg.png) no-repeat;
	  	background-size: 100% 100%;
	  	.box{width: 725*@rem; height: 562*@rem;
	  		background: url(../assets/invitatation-box.png);
	  		background-size: 100% 100%; 
	  		margin: 0 auto;margin-top: 388*@rem;
	  		color: #ff278d;
	  		.mag{ font-size: 44*@rem;  padding: 0 120*@rem; padding-top: 182*@rem; text-align: center; font-weight: bold;}
	  		.tacit{ font-size: 25*@rem; margin-top: 40*@rem; text-align: center;}
	  		.test{ font-size: 40*@rem; font-weight: bold; width: 314*@rem; height: 80*@rem; background: #ff278d; color:#ffffff; text-align: center;margin: 0 auto; margin-top: 30*@rem; line-height: 80*@rem;border-radius: 10*@rem;}
	  	 }
	  	
	}
</style>
