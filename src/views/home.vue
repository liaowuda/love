<template>
	<div class="home">
		<app-top></app-top>	
		<div class="title"></div>
		<div class="sex">
			<div class="boy" :class="{boyBtn:boyStatus}" @click="goInvitation('1')">	
			</div>
			<div class="girl" :class="{girlBtn:girlStatus}" @click="goInvitation('2')">
			</div>
		</div>
		<div class="answer" @click="goAnswer" >
			开始回答<!-- <input type="submit" class="submit" name="" value="开始回答"> -->	
		</div>
		<div class="my">
			<span class="size"></span>
			<span class="word" @click="privity">查看我的默认列表</span>
			<span class="size"></span>
		</div><!-- 默认列表 -->

	<!--	<div class="prompt" v-show="prompt">
			<div class="box"></div>
			<div class="mag">
				<span>请选择性别</span>
				<span class="confirm" @click="confirm">确定</span>
			</div>
		</div> 提示选择性别 -->

		
		<app-titles
		 :titlemag="titlemag"
		 v-show="panelShow" :panelShow="panelShow">	
		</app-titles><!-- 外部提示框 -->
		
	</div>
</template>
<script>
import top from './../components/top'
import Titles from './../components/Titles'
export default{
	name:'home',
	data(){
		return{
			boyStatus:false,
			girlStatus:false,
			// prompt:false,
			panelShow:false,
			titlemag:'请选择性别'
		}
	},
	methods:{
		// 选择性别，切换状态
		goInvitation(sex){
			if(sex==="1"){
				this.boyStatus=true;
				this.girlStatus=false;
			}else if(sex ==="2"){
				this.boyStatus =false;
				this.girlStatus =true;
			}
		},
		goRule(){
			this.$router.push({
				path:'./rule'
			})
		},
		goAnswer(){
			let sex =this.boyStatus=!this.boyStatus;
			let sexs =this.girlStatus=!this.girlStatus
			//判断是否选择了性别
			if(sex&&sexs){
				// this.prompt = !this.prompt;
				this.panelShow = !this.panelShow;
				this.boyStatus="";
				this.girlStatus="";
					
			}else{
				this.$router.push({
					path:'./answer'
				})
			}
		},
		privity(){
			this.$router.push({
				path:'./notprivity'
			})
		}
		// confirm(){
		// 	this.prompt = !this.prompt
		// }	
	},
 	proto:{
      title:{
          type:String,
          required:true
      }
    },
    components:{
      "app-titles":Titles,
      "app-top":top
    }

}
</script>
<style type="text/css" scoped lang="less">
@import "./../style/mixin.less";
.home {
	position: absolute;
	left: 0;
	top: 0;
 	width: 750*@rem;
  	height: 1208*@rem;
  	overflow: hidden;
  	background: url(../assets/home-bg.png) no-repeat;
  	background-size: 100% 100%;
  	.title{ 
  		background:url(../assets/title-bg.png) no-repeat;
  	 	height: 186*@rem;
  		width:585*@rem; 
  		background-size: 100% 100%;
  		margin:313*@rem auto 0;
  	}
  	.sex{

  		height: 364*@rem;
  		.boy{background: url(../assets/boy-btn.png) no-repeat;
  		height: 364*@rem;
  		width: 364*@rem;
  		background-size: 100% 100%;
  		float: left;}
  		.boyBtn{background: url(../assets/boy-selected-btn.png) no-repeat;height: 364*@rem;
  		width: 364*@rem;
  		background-size: 100% 100%;}
  		.girl{background: url(../assets/girl-btn.png) no-repeat;
  		height: 364*@rem;
  		width: 364*@rem;
  		background-size: 100% 100%;
  		float: left;}
  		.girlBtn{background: url(../assets/girl-selected-btn.png) no-repeat;height: 364*@rem;
  		width: 364*@rem;
  		background-size: 100% 100%;}
  	}
  	.answer{ background: #ff57ac; width: 360*@rem; text-align: center; margin: 0 auto; font-weight: bold;  color: #FFFFFF;font-size: 50*@rem; padding: 26*@rem 0; border-radius: 20*@rem;
  		.submit{background:#ff57ac; font-weight: bold;  color: #FFFFFF;font-size: 50*@rem;}
  	}
  	.my{font-size: 26*@rem; margin-top: 50*@rem; color: #ff84b9; text-align: center; 
  		.word{display: inline-block; margin:0 16*@rem;}
  		.size{width: 66*@rem; height: 2*@rem; display: inline-block;background: #ff84b9;vertical-align: middle; }
  	}
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
}
</style>