<!-- 没有默契好友 -->
<template>
	<div class="notprivity">
		<div class="title">	
			<div class="img">
				<img src="../assets/none-img.png">
			</div>
			<div class="details">
				<div class="box">
					<p class="meg">还没有人与您进行默契测试~</p>
					<p class="meg">别灰心送你一个么么哒</p>
					<p class="meg">下次一定有收获惊喜</p>
				</div>
				<div class="boxshow">
					<p class="meg">别让爱情成为漫长的等待，立即完成测试题</p>
					<p class="meg">邀请TA来参加测试吧</p>
				</div>	
			</div>
		</div>
		<div class="answer" @click="answer">
			邀请TA来答题
		</div>
		<div class="again" >
			再来一次
		</div>
	</div>
</template>
<script>
	export default{
		name:'notprivity',
		data(){
			return{
   					timer: null
			}
		},
		methods:{
			answer(){

			},
			a(){
				const number = 1;
				if(!this.timer1){
					this.asd = number;
					this.timer1 = setInterval(() => {
							this.asd++;
					},1000) 
				}
				return 1
			}  

		}
	}
</script>
<style lang='less' scoped> 
@import "./../style/mixin.less";
.notprivity{
	position: absolute;
		left: 0;
		top: 0;
	 	width: 750*@rem;
	  	height: 1208*@rem;
	  	overflow: hidden;
	  	background: url(../assets/answer-bg.png) no-repeat;
	  	background-size: 100% 100%;
	  	.title{
			position: relative;
			width: 668*@rem; height: 857*@rem;
			background: url(../assets/privity-list.png) no-repeat;
			background-size: 100% 100%;
			margin: 47*@rem auto 0;
			margin-bottom: 45*@rem;
			padding-top: 212*@rem;
			.img{ margin: 0 auto; width: 192*@rem; height: 332*@rem; }
			.details{font-size: 28*@rem; 
				text-align: center;
				color: #666666;
				margin-top: 50*@rem;
				.boxshow{ display:none;}
				.meg{margin-bottom: 25*@rem; }
				}
		}
		
		
		.again,.answer{ font-size: 38*@rem; 
			height: 80*@rem;
			float: left;
			background-color: #ff278d; 
			border-radius: 15*@rem;
			color: #FFFFFF; 
			text-align: center;
			line-height: 80*@rem;
			padding: 0 31*@rem;

			}
		.answer{ margin: 0 110*@rem 0 60*@rem;}
		.again{background-color: #fa46b3;}

}
</style>