<!-- 确认订单 -->
<template>
	<view class="order-detail">
		<view class="main">
			
		</view>
		
		<view class="footer-btn flex-bwtween">
			<view class="left-collect">
				
			</view>
			<view class="right-btn">
				<u-button type="primary">提交订单</u-button>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.order-detail {
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
		}
	}
</style>