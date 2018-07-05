<template>
	<div class="privity">
		<div class="title">
			<ul class="ranking">
				<li class="rankingLi">
					<span class="number">1</span> 
					<span class="head" >
						<img src="../assets/boy1-img.png">
					</span>
					<div class="value">
						<span class="valueSpan">您与138****4589的</span>
						<span class="valueS">默认度：100</span>
					</div>
					<div class="check"></div>
				</li>
				<li class="rankingLi"><span class="number">2</span> 
					<span class="head" ><img src="../assets/boy2-img.png"></span>
					<div class="value"><span class="valueSpan">您与138****1111的</span><span class="valueS">默认度：80</span></div>
					<div class="check"></div>
				</li>
				<li class="rankingLi"><span class="number">3</span> 
					<span class="head" ><img src="../assets/boy3-img.png"></span>
					<div class="value"><span class="valueSpan">您与138****4589的</span><span class="valueS">默认度：60</span></div>
					<div class="check"></div>
				</li>
				<li class="rankingLi"><span class="number">4</span> 
					<span class="head" ><img src="../assets/girl4-img.png"></span>
					<div class="value"><span class="valueSpan">您与138****4589的</span><span class="valueS">默认度：40</span></div>
					<div class="check"></div>
				</li>

			</ul>
			<ul class="crownGrade">
				<li class="grade"><img src="../assets/one-icon.png"></li>
				<li class="grade"><img src="../assets/two-icon.png"></li>
				<li class="grade"><img src="../assets/three-icon.png"></li>
			</ul><!-- 皇冠 -->
		</div><!-- 默认列表 -->
		<div class="invitation">
			
		</div><!-- 答题 -->
		<div class="once" @click="answer">
		</div><!-- 再来一次 -->
	</div>
</template>
<script>
	export default{
		name:'privity',
		data(){
			return{

			}
		},
		methods:{
			answer(){
				this.$router.push({
					path:'./answer'
				})
			}
		}
	}
</script>
<style scoped lang="less">
@import "./../style/mixin.less";
	.privity{
		position: absolute;
		top: 0;
		left: 0;
		width: 750*@rem; height: 1208*@rem;
		background: url(../assets/privity-bg.png) no-repeat;
		background-size: 100% 100%;
		.title{
			position: relative;
			width: 668*@rem; height: 857*@rem;
			background: url(../assets/privity-list.png) no-repeat;
			background-size: 100% 100%;
			margin: 47*@rem auto 0;
			margin-bottom: 45*@rem;
			.ranking{ 
				font-size: 26*@rem;
				padding-top: 160*@rem;
				padding-left: 28*@rem;
				.rankingLi{
					border-top: 1*@rem dotted #ccc;
					margin: 0 40*@rem;
					padding-top: 30*@rem;
					color:#e72934; 
					height: 170*@rem;
					.head{}
					.head img{width: 116*@rem; height: 116*@rem;  display: inline-block; float: left;}
					.number{display: inline-block; float: left;line-height: 116*@rem; margin-right: 25*@rem;font-weight: bold;}
					.value{float: left; margin: 0 27*@rem; width: 235*@rem;
						.valueSpan{ line-height: 83*@rem;}
						.valueS,.valueSpan{font-weight: bold;}
					}
					.check{
						float: left; margin-left: -27*@rem;
						background: url(../assets/see-btn.png) no-repeat;
						width: 140*@rem;height: 56*@rem;background-size: 100% 100%; margin-top: 40*@rem;}
				}
			}
			.crownGrade{
				position: absolute;
				top: 168*@rem;
				margin-left: 88*@rem;

				.grade{ width: 64*@rem; height: 62*@rem; background-size: 100% 100%; margin-bottom: 110*@rem;}
			}
		}
		.invitation{
			width:348*@rem; height: 98*@rem;
			background: url(../assets/invitation-btn.png) no-repeat;
			background-size: 100% 100%;
			float: left;
			margin:0 45*@rem;
		}
		.once{
			width: 266*@rem; height: 98*@rem;
			background:  url(../assets/once-btn.png) no-repeat;
			background-size: 100% 100%;
			float: left;
		}
	}
</style>