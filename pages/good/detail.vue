<!-- 确认订单 -->
<template>
	<view class="order-detail">
		<scroll-view scroll-y="true" class="scroll-area">
			<view class="header">
				<u-swiper height="900" :list="swiperList"></u-swiper>
			</view>
			
			<view class="main">
				<view class="delivery-method">
					<text class="border-red">包邮</text>
					<text class="more">更多</text>
				</view>
				
				<view class="good-info">
					<view class="price flex-between">
						<text>￥599</text>
						<text>33人付款</text>
					</view>
					<view>我是商品的名字</view>
				</view>
				<!-- 最近购买 -->
				<view class="recently-purchased">
					<view class="title-all flex-between">
						<text>全部购买（33）</text>
						<text class="right-allow">全部</text>
					</view>
					
					<scroll-view>
						<view class="bug-history">
							<view>
								<u-image></u-image>
								<text></text>
							</view>
							<view>
								<text></text>
								<text></text>
							</view>
							<view>
								<text></text>
							</view>
						</view>
					</scroll-view>
				</view>
				<!-- 穿搭精选 -->
				<view class="dressing-area">
					<view class="title-all flex-between">
						<text>全部购买（33）</text>
						<text class="right-allow">全部</text>
					</view>
					
					<scroll-view>
						<view class="bug-history">
							<view>
								<u-image></u-image>
								<text></text>
							</view>
							<view>
								<text></text>
								<text></text>
							</view>
							<view>
								<text></text>
							</view>
						</view>
					</scroll-view>
				</view>
				
				<!-- 商品参数 -->
				<view class="good-base-info">
					<view class="title-all flex-between">
						<text>全部购买（33）</text>
						<text class="right-allow">全部</text>
					</view>
					
					<scroll-view>
						<view class="bug-history">
							<view>
								<u-image></u-image>
								<text></text>
							</view>
							<view>
								<text></text>
								<text></text>
							</view>
							<view>
								<text></text>
							</view>
						</view>
					</scroll-view>
				</view>
				<!-- 商品介绍 -->
				<view class="good-intro">
					
				</view>
				<!-- 商品展示 -->
				<view class="good-shows">
					
				</view>
				<!-- 品牌故事 -->
				<view class="brand-Story">
					
				</view>
				<!-- 购物须知 -->
				<view class="buyer-reading">
					
				</view>
				<!-- 为你推荐 -->
				<view class="recommend-list">
					
				</view>
			</view>
		</scroll-view>
		
		<view class="footer-btn flex-bwtween">
			<view class="left-collect">
				<u-icon name="heart"></u-icon><text style="margin-left: 12rpx">想要</text>
			</view>
			<view class="right-btn">
				<u-button type="primary">立即购买</u-button>
			</view>
		</view>
		<buy-bottom></buy-bottom>
	</view>
</template>

<script>
	import BuyBottom from '@/components/BuyBottom.vue'
	
	export default {
		components: {
			BuyBottom
		},
		data() {
			return {
				swiperList: []
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order-detail {
		width: 100vw;
		height: 100vh;
		background: #fff;
		position: relative;
		
		.scroll-area {
			width: 100%;
			height: calc(100% - 150rpx);
			
			.header {
				width: 100%;
				height: 900rpx;
			}
			
			.main {
				box-sizing: border-box;
				padding: 24rpx;
				width: 100%;
			}
		}
		
		.footer-btn {
			width: 100%;
			height: 150rpx;
			box-sizing: border-box;
			padding: 20rpx 38rpx;
			bottom: 0;
			left: 0;
			position: absolute;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: #fff;
			
			.left-collect {
				width: 70rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: baseline;
				margin-right: 30rpx;
			}
			
			.right-btn {
				width: calc(100% - 100rpx);
			}
		}
	}
</style>