<!-- 订单组件 -->
<template>
	<view class="order-item">
		<view class="status">{{statusArr[goodRow.status]}}</view>
		
		<view class="good-info flex-between">
			<image class="avatar" :src="goodRow.pic" mode=""></image>
			
			<view class="right-info">
				<view class="name">{{goodRow.name}}</view>
				<view class="size-num">
					{{goodRow.size}} 数量×{{goodRow.num}}
				</view>
				<view class="price">￥{{goodRow.price}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			goodRow: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {
				statusArr: ['待付款', '代发货', '待收货', '交易成功']
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order-item {
		width: 100%;
		margin-bottom: 20rpx;
		background: #fff;
		padding: 24rpx 30rpx 30rpx;
		box-sizing: border-box;
		
		.status {
			margin-bottom: 24rpx;
		}
		
		.good-info {
			width: 100%;
			
			.avatar {
				width: 220rpx;
				height: 220rpx;
				border-radius: 10rpx;
			}
			.right-info {
				width: calc(100% - 256rpx);
				margin-left: 26rpx;
				position: relative;
				
				.name {
					line-height: 40rpx;
					font-size: 30rpx;
					font-weight: 600;
					word-break: break-all;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}
				.size-num {
					font-size: 26rpx;
					color: #999;
					margin-top: 20rpx;
				}
				
				.price {
					position: absolute;
					left: 0rpx;
					bottom: 10rpx;
					font-size: 36rpx;
					color: #333;
					font-weight: 600;
				}
			}
		}
	}
</style>