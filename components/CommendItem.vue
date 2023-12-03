<!-- 商品组件 -->
<template>
	<view class="item flex">
		<image class="avatar" src=""></image>
		
		<view class="good-info flex">
			<view class="name">凑字数的名称就是要长一点点点点安东尼等待安定</view>
			
			<view class="price-num flex-between">
				<text class="price">￥239</text>
				<text class="num">2.7万人付款</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		// props: {
		// 	goodRow: {
		// 		type: Object,
		// 		default: () => {}
		// 	}
		// }
	}
</script>

<style lang="scss" scoped>
	.item {
		width: 100%;
		flex-direction: column;
		background: #fff;
		
		.avatar {
			width: 100%;
			height: 350rpx;
		}
		
		.good-info {
			width: 100%;
			box-sizing: border-box;
			padding: 30rpx 24rpx;
			flex-direction: column;
			
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
			
			.price-num {
				height: 50rpx;
				margin-top: 20rpx;
				line-height: 50rpx;
				
				.price {
					color: #333;
					font-size: 40rpx;
					font-weight: 600;
				}
				.num {
					color: #999;
					font-size: 26rpx;
					font-weight: 500;
					margin-top: 4rpx;
				}
			}
		}
	}
</style>