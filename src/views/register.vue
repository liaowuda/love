<template>
	<div class="login">
		
		<h3 class="meg"><span class="return" @click='home'><</span>登录</h3>
		<div class="way">
			<span class="waymargin" :class='{colorBtn:account}' @click="loginway('1')">账户密码登录</span>
			<span class=" waymag"  :class='{colorBtn:mobile}' @click="loginway('2')">手机验证码登录</span>
		</div>
		<div class="callBox" v-show ="callBox">
			<div class="box">
				<label class="cellphone">手机号</label>
				<input class="number" type="text" name="" placeholder="请输入手机号">
			</div>
			<div class="box">
				<label class="cellphone">手机验证码</label>
				<input class="number numberbox" type="text" name="" placeholder="请输入手机验证码">
				<!-- 验证码 -->
				<span class="count" v-show="show" @click="getCode">获取验证码</span>
				<span v-show="!show" class="count">{{count}} s</span>
			</div>
		</div>
		<div class="accountBox" v-show="account">
			<div class="box">
				<label class="cellphonemag">账号</label>
				<input class="number" type="text" name="" placeholder="手机号/邮箱/用户名">
			</div>
			<div class="box">
				<label class="cellphonemag">密码</label>
				<input class="number setnumber" type="text" name="" placeholder="请输入6-20位密码">
			</div>
		</div>
			
		<div class="sublogin">
			登录
		</div>
		<div class="take">
			<div class="forget">忘记密码?</div>
		</div>
		<div class="rapid" @click='login'>
			快速注册
		</div>
		<div class="rest">
			<div class="restRegister">
				<span class="restWire"></span>其它登录方式<span class="restWire"></span>	
			</div>
			QQ 微信 支付宝
		</div>
	</div>
</template>
<script>
	export default{
		name:'login',
		data(){
			return{
				mobile:false,
				account:true,
				show: true, //验证码
				count: '',//验证码
				//手机登陆
				callBox:false,
				account:true

			}
		},
		methods:{
			// 登陆方式 
			loginway(sex){
				if(sex ==='1'){
					this.mobile=false;
					this.account=true;
					this.callBox = false;
					this.account = true
				}else if(sex ==='2'){
					this.mobile=true;
					this.account=false;
					this.callBox = true;
					this.account = false;
				}
			},
			login(){
				this.$router.push({
					path:'./login'
				})
			},
			home(){
				this.$router.push({
					path:'./'
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
		border-bottom: 2*@rem #666666 solid;
		color: #ff278d;
	}
	.way{
		padding:35*@rem 0;
		font-size: 30*@rem;
		border-bottom: 2*@rem #666666 solid;
		text-align: center;
		color: #666666;
		margin-bottom: 80*@rem;
		.waymargin{margin-right: 50*@rem;}
		.waymag{}
		.colorBtn{border-bottom: 2*@rem #ff278d solid;color: #ff278d; padding: 35*@rem 0;}
	}
	.box{
		border-bottom: 1*@rem solid  #ff278d;
		height: 100*@rem;
		padding: 5*@rem;
		.cellphone{
			font-size: 30*@rem;
			display: inline-block;
			width: 150*@rem;
			padding-left: 20*@rem;
		}
		.count{ font-size: 30*@rem;}
		.cellphonemag{ 
			font-size: 30*@rem;
			display: inline-block; 
			padding-right: 30*@rem; 
			text-indent: 20*@rem;}
		.number{background-color:inherit; 
			height: 100*@rem; 
			font-size: 30*@rem; 
			padding-left:5*@rem;}
		.numberbox{ width: 270*@rem;}
		.btm{
			font-size: 25*@rem; 
			padding:35*@rem 50*@rem;
			display: inline-block;
			}
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
	.sublogin{ height: 80*@rem; 
		background-color: #ff278d; 
		line-height: 80*@rem;  
		width: 650*@rem; 
		text-align: center; 
		margin: 0 auto; 
		margin-top: 50*@rem;
		border-radius: 12*@rem; 
		color: #FFFFFF;}
	.take{
		height: 100*@rem;
		.forget{ float: right; font-size: 25*@rem; padding:30*@rem 50*@rem;}
	}
	.rapid{margin: 0 auto; font-size: 30*@rem; border: 1*@rem solid #ff278d; padding: 15*@rem 0; width: 200*@rem; text-align: center; border-radius: 10*@rem; color:#ff278d;}
	.rest{  top: 200*@rem; text-align: center; position: relative;
		.restRegister{font-size: 30*@rem;
			.restWire{display: inline-block; width: 150*@rem; height: 3*@rem; background-color: #666666; vertical-align: middle;margin: 0 30*@rem;}
		}
	}
}
</style>