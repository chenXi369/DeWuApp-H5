<!-- 确认订单 -->
<template>
	<view class="confirm-order">
		<view class="main">
			<view class="address">
				
			</view>
			<view class="good-ctx">
				
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
		<view class="other-info">
			
		</view>
		
		<view class="footer-btn flex-bwtween">
			<view class="left-num-price">
				<view class="top">
					<text>共{{total}}件</text>
					<text>|</text>
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
				youHuiPrice: '￥0'
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
		
		.main {
			width: 100%;
			
			.user-know {
				width: 100%;
				height: 200rpx;
				background: #fff;
				padding: 30rpx 24rpx;
				border-radius: 4rpx;
			}
		}
	}
</style>