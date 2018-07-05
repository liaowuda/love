<template>
	<div class="top">
		<div class="site" @click="register">深圳万象城</div>
		<div class="rule" @click="goRule">活动规则</div>
	</div>
</template>
<script>
	export default{
		name:'app-top',
		data(){
			return{

			}
		},
		methods:{
			goRule(){
				this.$router.push({
					path:'./rule'
				})
			},
			register(){
				this.$router.push({
					path:'./register'
				})
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "./../style/mixin.less";
.top{
	.site,.rule{ font-size: 25*@rem; color: #FFFFFF;}
	  	.site{position: absolute; width: 157*@rem; background: #4594aa; height: 48*@rem; line-height: 48*@rem; margin-top: 19*@rem; border-bottom-right-radius:20*@rem;border-top-right-radius:20*@rem;padding-left: 11*@rem;  }
	  	.rule{right: 0; position: absolute; width: 100*@rem; height: 100*@rem;background: #e468a3;border-radius: 50%; line-height: 1.2;
	  		top: -9*@rem;
	    	right: -16*@rem;
	    	padding-left: 26*@rem; padding-top: 18*@rem;}
}
</style>