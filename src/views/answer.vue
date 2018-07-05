<template>
	<div class="answer">
		<div class="topic" v-for="topics,index in itemImg" :key="index" v-show="index===mark">
			<img :src="topics.url" class="question" >
			
			<!-- <img src="../assets/two-question.png" class="question">
			<img src="../assets/three-question.png" class="question">
			<img src="../assets/four-question.png" class="question"> -->
		</div> <!-- 点击下一题 图片会改变 -->

		<div class="option" v-for="options,index in item">
			<div class="title">
				<span><img :src="options.url" class="shopp"></span>
				<div class="brand">
					<span>{{options.name}}</span>
					<span class="number">{{options.number}}</span>
				</div>
			</div>
			<div 
				class="options"  
				:class="{action:isChecked==index}" 
				@click="letters(index)"
			>
				{{options.letter}}
			</div>
		</div>
		<div class="next" @click="nextTitle">{{ next }}</div>

		<app-titles
		 v-bind:titlemag="titlemag"
		 v-show="prompt">	
		</app-titles><!-- 外部提示框 -->


	</div>
</template>
<script>
import Titles from './../components/Titles'
let item =[
		{
			url:require('../assets/bangbang.png'),
			name:"安踏",
			number:"￥500",
			letter:"A",
			
		},
		{
			url:require('../assets/bangbang.png'),
			name:"LV",
			number:"￥50000",
			letter:"B",	
		},
		{
			url:require('../assets/bangbang.png'),
			name:"YSL",
			number:"￥500",
			letter:"C",	
		},
];
let itemImg =[
	{
		url	:require('../assets/one-question.png')
	},
	{
		url	:require('../assets/two-question.png')
	},
	{
		url	:require('../assets/three-question.png')
	},
	{
		url	:require('../assets/four-question.png')
	},
	{
		url	:require('../assets/five-question.png')
	}
]

	export default{
		name:'answer',
		data(){
			return{
					mark:0,
					item:item,
					isChecked:-1,
					itemImg:itemImg,
					next:'下一题',
					prompt:false,
					titlemag:'请选择答案'

					
			}
		},
		methods:{
			letters(index){
				this.isChecked =index
			},
			//下一题
			nextTitle(){
				
				
				if(this.isChecked ==-1){
					this.prompt = !this.prompt;
					return
						 
				}else{
					this.isChecked=-1;
					this.mark++;
					
				}
				if (this.mark===4) {
					this.next="完成"
				};
				if(this.mark ===5){
					this.$router.push({
						path:'./share'
					});
					
					
				}

			}
			
		},
 		proto:{
	      title:{
	          type:String
	      }
	    },
	    components:{
	      "app-titles":Titles
	    }
	}
</script>
<style scoped lang="less">
@import "./../style/mixin.less";
	.answer{ 
		position: absolute;
		left: 0;
		top: 0;
		height: 1208*@rem;width: 750*@rem;
		background: url(../assets/answer-bg.png);
		background-size: 100% 100%;
		//题目
		.topic{

			.question{
				width: 677*@rem; height: 264*@rem;
				background-size: 100% 100%;
				display: block;margin:110*@rem auto 50*@rem auto;

			}
		}
		//选项
		.option{
			width: 640*@rem; height: 160*@rem;
			margin: 0 auto;
			box-shadow: 8*@rem 8*@rem 8*@rem #888888;
			margin-bottom: 65*@rem;
			background: #FFFFFF; border-radius: 20*@rem;
			.title{ font-size: 35*@rem;
				
				.shopp{ width: 114*@rem;height:134*@rem;
					float: left; margin-left: 37*@rem;
				}
				.brand{float: left; padding: 0 45*@rem; width: 325*@rem; padding-top: 35*@rem;
					.number{ color: #eb4b79;line-height: 75*@rem;}
				}
				
			}	
			.options{
				position: absolute;
				font-size: 42*@rem;
				float: left;
				line-height: 160*@rem;
				border-left:2*@rem dotted #d7cfd2;				
				display: inline-block;
				text-align: center;
				width: 164*@rem;
				color: #eb4b79;
				border-top-right-radius: 20*@rem;
				border-bottom-right-radius: 20*@rem;
			}
			.action{ background: #eb4b79;color:#FFFFFF}
		}
		
		.next{
			
			width: 250*@rem; height: 80*@rem;
			background: #ff278d;
			background-size: 100% 100%;
			border-radius: 10*@rem;
			margin: 0 auto;
			font-size: 37*@rem;
			text-align: center;
			color: #FFFFFF;
			font-weight: bold;
			line-height: 80*@rem;
		}//下一题
	}
</style>