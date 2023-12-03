<!-- 确认订单 -->
<template>
	<view class="confirm-order">
		<view class="main">
			<view class="address flex-column">
				<view class="area-name">宝安区 石岩街道 石岩街道料坑愉盛工业园C栋1楼</view>
				
				<view class="name-phone">
					<text>方祥宏</text>
					<text>130****6339</text>
				</view>
				<view class="right-area">
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="good-ctx">
				<view class="top-good flex-column">
					<view class="top-nav">
						<text style="color: #333; font-size: 32rpx; font-weight: 600;">品牌专供·直发</text>
						<u-icon name="arrow-right" color="#999"></u-icon>
					</view>
					<view class="pic-good-info flex-between">
						<u-image width="150" height="150" src=""></u-image>
						
						<view class="right-info">
							<view class="name-price flex-between">
								<text class="name">The Simpsons 辛普森一家 百搭 防风 加厚舒适女鞋</text>
								<text class="price">￥99</text>
							</view>
							
							<view class="size-num">
								<text>鸳鸯 36</text>
								<text>数量 ×1</text>
							</view>
							
							<view class="tags-info flex-between">
								<view class="good-tags">
									<text class="tag" v-for="item in 6" :key="item">七天无理由退货</text>
								</view>
								<u-icon name="arrow-right" color="#999"></u-icon>
							</view>
						</view>
					</view>
					<view class="service flex-between">
						<text class="title">配送服务</text>
						
						<view class="timer flex">
							<text>包邮 计划11月25日送达 晚到必赔</text>
							<u-icon name="arrow-right" color="#999"></u-icon>
						</view>
					</view>
				</view>
				<view class="small-num">
					<text>小计：</text>
					<text style="font-size: 42rpx; font-weight: 600; font-family:'Franklin Gothic Medium';">{{oncePrice}}</text>
				</view>
			</view>
			<view class="user-know flex-column">
				<view class="title">买家须知</view>
				<view class="customer">
					<text>商家id:{{customerId}}</text>
					<text class="down-line">查看商家资质</text>
				</view>
				<view class="customer">
					<text>提交订单即表示同意</text>
					<text class="down-line">买家须知</text>
				</view>
			</view>
		</view>
		<view class="other-info flex-between">
			<view class="icon-text">
				<!-- <image></image> -->
				<text>全新正品保障</text>
			</view>
			
			<view class="icon-text">
				<!-- <image></image> -->
				<text>假一赔三</text>
			</view>
		</view>
		
		<view class="footer-btn flex-bwtween">
			<view class="left-num-price">
				<view class="top">
					<text>共{{total}}件</text>
					<text style="margin: 0 4rpx">|</text>
					<text>合计：</text>
					<text class="real-price">{{curPrice}}</text>
				</view>
				<view class="preferential">优惠：{{youHuiPrice}}</view>
			</view>
			<view class="right-btn">
				<u-button type="primary">提交订单</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customerId: null,
				total: 1,
				curPrice: '￥99',
				youHuiPrice: '￥0',
				oncePrice: '￥99'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.confirm-order {
		width: 100vw;
		height: 100vh;
		padding: 24rpx;
		position: relative;
		
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
			
			.top {
				font-size: 24rpx;
				color: #565656;
				
				.real-price {
					font-size: 40rpx;
					color: red;
					font-weight: 600;
				}
			}
			
			.preferential {
				font-size: 24rpx;
				color: #333;
				margin-top: 10rpx;
			}
		}
		
		.main {
			width: 100%;
			
			.user-know {
				width: 100%;
				height: 220rpx;
				background: #fff;
				padding: 30rpx 24rpx;
				border-radius: 4rpx;
				margin-top: 30rpx;
				
				.title {
					font-size: 32rpx;
					font-weight: 600;
					color: #333;
					margin-bottom: 20rpx;
				}
				
				.customer {
					font-size: 26rpx;
					font-weight: 500;
					color: #999;
					line-height: 54rpx;
					
					.down-line {
						font-weight: 500;
						color: #333;
						margin-left: 4rpx;
						text-decoration: underline;
					}
				}
			}
			.address {
				width: 100%;
				background: #fff;
				padding: 30rpx 24rpx;
				position: relative;
				
				.right-area {
					position: absolute;
					right: 20rpx;
					top: 38rpx;
				}
				
				.area-name {
					width: calc(100% - 30rpx);
					line-height: 50rpx;
					font-size: 36rpx;
					font-weight: 600;
				}
				.name-phone {
					font-size: 24rpx;
					color: #999;
					padding-top: 20rpx;
					
					text {
						margin-right: 30rpx;
					}
				}
			}
			.good-ctx {
				width: 100%;
				background: #fff;
				padding: 30rpx 24rpx 0rpx;
				margin-top: 30rpx;
				
				.small-num {
					width: 100%;
					height: 100rpx;
					line-height: 100rpx;
					text-align: right;
					border-top: 1rpx solid #eaeaea;
				}
				
				.pic-good-info {
					margin-top: 30rpx;
					
					.right-info {
						width: calc(100% - 170rpx);
						
						.name-price {
							font-size: 26rpx;
							color: #333;
							width: 100%;
							
							.name {
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
								width: calc(100% - 80rpx)
							}
						}
						
						.size-num {
							font-size: 26rpx;
							color: #333;
							width: 100%;
							line-height: 42rpx;
						}
						
						.tags-info {
							width: 100%;
							align-items: center;
							
							.good-tags {
								width: calc(100% - 50rpx);
								display: flex;
								flex-wrap: wrap;
								
								.tag {
									color: red;
									padding: 2rpx 10rpx;
									border: 1rpx solid red;
									font-size: 24rpx;
									margin: 4rpx 6rpx;
								}
							}
						}
					}
				}
				
				.service {
					width: 100%;
					height: 80rpx;
					line-height: 80rpx;
					
					.title {
						font-size: 24rpx;
						color: #333;
					}
					
					.timer {
						font-size: 26rpx;
						color: #333;
					}
				}
			}
		}
		
		.other-info {
			margin-top: 50rpx;
			width: 100%;
			
			.icon-text {
				text-align: center;
				width: 50%;
			}
		}
	}
</style>