<!-- 商品组件 -->
<template>
	<view class="good-item flex">
		<image class="avatar" :src="goodRow.pic"></image>
		
		<view class="good-info flex">
			<view class="name">{{goodRow.name}}</view>
			
			<view class="price-num flex-between">
				<text class="price">￥{{goodRow.price}}</text>
				<text class="num">{{goodRow.personNum}}人付款</text>
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
		}
	}
</script>

<style lang="scss" scoped>
	.good-item {
		width: 100%;
		flex-direction: column;
		border-bottom: 1rpx solid #eaeaea;
		
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
		}
	}
</style>