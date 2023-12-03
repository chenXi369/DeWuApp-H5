<!-- 确认订单 -->
<template>
	<view class="confirm-order">
		<view class="main">
			<view class="address">
				<view class="area-name"></view>
			</view>
			<view class="good-ctx">
				<view class="top-good">
					<view class="top-nav">
						<text>品牌专供·直发</text>
						<u-icon name=""></u-icon>
					</view>
					<view class="pic-good-info">
						
					</view>
					<view class="service"></view>
				</view>
				<view class="small-num">
					<text>小计：</text>
					<text>{{oncePrice}}</text>
				</view>
			</view>
			<view class="user-know">
				<view class="title">买家须知</view>
				<view class="customer">
					<text>商家id:{{customerId}}</text>
					<text class="down-line">查看商家资质</text>
				</view>
				<view class="know-text">
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
				height: 200rpx;
				background: #fff;
				padding: 30rpx 24rpx;
				border-radius: 4rpx;
				margin-top: 30rpx;
			}
			.address {
				width: 100%;
				background: #fff;
				padding: 30rpx 24rpx;
			}
			.good-ctx {
				width: 100%;
				background: #fff;
				padding: 30rpx 24rpx;
				margin-top: 30rpx;
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