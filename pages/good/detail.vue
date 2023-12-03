<!-- 确认订单 -->
<template>
	<view class="order-detail">
		<scroll-view scroll-y="true" class="scroll-area">
			<view class="header">
				<u-swiper height="900" :list="swiperList"></u-swiper>
			</view>

			<view class="main">
				<view class="delivery-method flex-between">
					<view class="left-box">
						<text class="border-red">包邮</text>
					</view>

					<text class="more">更多</text>
				</view>

				<view class="good-info flex-column">
					<view class="price-person flex-between">
						<text class="price">￥599</text>
						<text class="person">33人付款</text>
					</view>
					<view class="name">我是商品的名字</view>
				</view>
				<!-- 最近购买 -->
				<view class="recently-purchased">
					<view class="title-all flex-between">
						<text class="all-buy">全部购买（33）</text>
						<text class="right-allow">全部</text>
					</view>

					<scroll-view scroll-y="true" class="user-scroll flex-column">
						<view class="bug-history flex-between" v-for="item in 10" :key="item">
							<view class="left-area flex-between">
								<view class="avatar-name flex">
									<u-image shape="circle" width="25" height="25"></u-image>
									<text class="name">得*</text>
								</view>
								<view class="good-size">
									<text>瓦尔登蓝41</text>
									<text style="margin-left: 20rpx;">￥99</text>
								</view>
							</view>
							
							<text class="timer">刚刚</text>
						</view>
					</scroll-view>
				</view>
				<!-- 穿搭精选 -->
				<view class="recently-purchased">
					<view class="title-all flex-between">
						<text class="all-buy">穿搭精选（33）</text>
					</view>

					<view class="pic-list flex">
						<view class="one-pic" v-for="item in 6" :key="item" src="">
							<u-image width="220" height="220"></u-image>
						</view>
					</view>
				</view>

				<!-- 商品参数 -->
				<view class="recently-purchased">
					<view class="title-all flex-between">
						<text class="all-buy">商品参数</text>
					</view>
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
					<view class="title flex">为你推荐</view>
					
					<view class="commend-area">
						<view class="commend-item" v-for="item in 10" :key="item">
							<CommendItem></CommendItem>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>

		<view class="footer-btn flex-bwtween">
			<view class="left-collect">
				<u-icon name="heart"></u-icon><text style="margin-left: 12rpx">想要</text>
			</view>
			<view class="right-btn">
				<u-button @click="toBuy" type="primary">立即购买</u-button>
			</view>
		</view>
		<buy-bottom :showBuy="showBuy" @toConfirmOrder="toConfirmOrder"></buy-bottom>
	</view>
</template>

<script>
	import CommendItem from '@/components/CommendItem.vue'
	import BuyBottom from '@/components/BuyBottom.vue'

	export default {
		components: {
			BuyBottom,
			CommendItem
		},
		data() {
			return {
				showBuy: false,
				swiperList: []
			}
		},
		methods: {
			toBuy() {
				this.showBuy = true
			},
			toConfirmOrder(e) {
				uni.navigateTo({
					url: './confirmOrder?' + e
				})
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
				width: 100%;

				.delivery-method {
					padding: 0 24rpx;
					height: 120rpx;
					align-items: center;
					border-bottom: 1rpx solid #eaeaea;

					.more {
						width: 82rpx;
						color: #999;
						font-size: 30rpx;
						position: relative;

						&::after {
							content: "";
							display: inline-block;
							border-top: 1px solid #999;
							border-right: 1px solid #999;
							width: 8px;
							height: 8px;
							bottom: 6px;
							right: 0;
							position: absolute;
							transform: rotate(45deg);
						}
					}
					
					.left-box {
						width: calc(100% - 150rpx);
						padding-left: 20rpx;
						
						.border-red {
							color: red;
							font-size: 27rpx;
							display: inline-block;
							padding: 4rpx 10rpx;
							border: 1rpx solid red;
						}
					}
				}
				
				.good-info {
					padding: 0 24rpx;
					width: 100%;
					
					.price-person {
						height: 130rpx;
						padding-top: 40rpx;
						
						.price {
							font-size: 60rpx;
							font-weight: 600;
						}
						
						.person {
							margin-top: 30rpx;
							font-size: 28rpx;
							color: #999;
							font-weight: 500;
						}
					}
					
					.name {
						font-size: 32rpx;
						color: #333;
						line-height: 42rpx;
						margin-bottom: 30rpx;
					}
				}
				
				.recently-purchased {
					width: 100%;
					padding: 30rpx 24rpx;
					border-top: 20rpx solid #eaeaea;
					
					.pic-list {
						width: 100%;
						flex-wrap: wrap;
						padding: 20rpx 0;
						
						.one-pic {
							width: 220rpx;
							height: 220rpx;
							margin: 8rpx;
						}
					}
					
					.title-all {
						.all-buy {
							font-size: 40rpx;
						}
						.right-allow {
							width: 82rpx;
							color: #999;
							font-size: 30rpx;
							position: relative;
							
							&::after {
								content: "";
								display: inline-block;
								border-top: 1px solid #999;
								border-right: 1px solid #999;
								width: 8px;
								height: 8px;
								bottom: 14px;
								right: 0;
								position: absolute;
								transform: rotate(45deg);
							}
						}
					}
					
					.user-scroll {
						width: 100%;
						height: 300rpx;
						overflow: hidden;
						padding: 20rpx 0 0rpx;
						
						.bug-history {
							width: 100%;
							height: 70rpx;
							line-height: 70rpx;
							justify-content: space-between;
							font-size: 24rpx;
							
							.left-area {
								width: calc(100% - 230rpx);
								display: flex;
								justify-content: space-between;
							}
							
							.avatar-name {
								display: flex;
								align-items: center;
								padding: 0 20rpx;
								width: 40%;
								max-width: 180rpx;
								flex-direction: row;
								
								.name {
									width: 80rpx;
									margin-left: 20rpx;
									color: #333;
								}
							}
							
							.good-size {
								margin-left: 20rpx;
								color: #333;
							}
							
							.timer {
								margin-left: 20rpx;
								color: #999;
							}
						}
					}
				}
				
				.recommend-list {
					width: 100%;
					background: #f5f5f5;
					
					.title {
						width: 100%;
						height: 150rpx;
						line-height: 150rpx;
						justify-content: center;
						font-size: 30rpx;
					}
					
					.commend-area {
						width: 100%;
						display: flex;
						flex-wrap: wrap;
						
						.commend-item {
							width: calc(50% - 36rpx);
							margin-left: 24rpx;
							margin-bottom: 24rpx;
						}
					}
				}
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