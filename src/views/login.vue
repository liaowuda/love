<template>
	<div class="login">
		<h3 class="meg"><span class="return" @click='register'><</span>手机快速注册</h3>
		<div class="box">
			<label class="cellphone">手机号码</label>
			<input class="number" type="text" name="" placeholder="请输入11位手机号码">
		</div>
		<div class="box">
			<label class="cellphone">手机验证码</label>
			<input class="number numberbox" type="text" name="" placeholder="请输入手机验证码">
			<!-- 验证码 -->
			<span class="btm" v-show="show" @click="getCode">获取验证码</span>
			<span v-show="!show" class="count btm">{{count}} s</span>
		</div>
		<div class="box">
			<label class="cellphone">设置密码</label>
			<input class="number setnumber" type="text" name="" placeholder="6到20位数字+字母或者符号组成">
		</div>
		<div class="agree">
			<span class="tick">√</span>
			<span class="agreemeg">同意</span>
			<span>《会员章程》</span>
			<span class="agreemeg">和</span> 
			<span>《协议》</span>
		</div>	
		<div class="sublogin">
			提交注册
		</div>
	</div>
</template>
<script>
	export default{
		name:'login',
		data(){
			return{
				show: true, //验证码
				count: '',//验证码
			}
		},
		methods:{
			register(){
				this.$router.push({
					path:'./register'
				})
			},
			getCode(){
			    const TIME_COUNT = 60;
			    if (!this.timer) {
			       	this.count = TIME_COUNT;
			        this.show = false;
			        this.timer = setInterval(() => {
			     		if (this.count > 0 && this.count <= TIME_COUNT) {
			         			this.count--;
			        	} else {
			         		this.show = true;
			         		clearInterval(this.timer);
			         		this.timer = null;
			        	}
			       }, 1000)
			    }
   			}
		}
	}
</script>
<style type="text/css" lang="less" scoped>
@import "./../style/mixin.less";
.login{
	position: absolute;
	left: 0;
	top: 0;
 	width: 750*@rem;
  	height: 1208*@rem;
  	overflow: hidden;
  	background: url(../assets/answer-bg.png) no-repeat;
  	background-size: 100% 100%;
  	font-size: 45*@rem;
  	.return{display: inline-block; float: left; margin-left: 20*@rem;}
	.meg{	
		text-align: center;
		padding: 10*@rem;
		border-bottom: 2*@rem #ff278d solid;
		color: #ff278d;
	}
	.box{
		background-color: #ffffff;
		padding: 5*@rem;
		margin-bottom: 15*@rem;
		.cellphone{
			font-size: 30*@rem;
			display: inline-block;
			width: 150*@rem;
		}
		.number{ height: 100*@rem; font-size: 30*@rem; padding-left:5*@rem; }
		.numberbox{ width: 320*@rem;}
		.btm{
			font-size: 30*@rem;
			border-left: #ccc solid 3*@rem;
			font-size: 25*@rem; 
			padding:35*@rem 50*@rem;
			display: inline-block;
			}
		.count{ font-size: 30*@rem; }
		.setnumber{width: 500*@rem;}
	}
	.agree{
		text-align: center;
		margin: 0 auto;
		span{ font-size: 28*@rem;}
		.tick{ display: inline-block;
			width: 28*@rem; 
			height: 28*@rem;
			vertical-align: middle;
			border:1*@rem solid orange;
			background-color: #ff278d; 
			color: #ffffff;
			line-height: 28*@rem; }
		.agreemeg{ color:#ff278d; }
	}
	.sublogin{ height: 80*@rem; background-color: #ff278d; line-height: 80*@rem;  width: 300*@rem; text-align: center; margin: 0 auto; margin-top: 20*@rem; border-radius: 12*@rem; color: #FFFFFF;}
}
</style>