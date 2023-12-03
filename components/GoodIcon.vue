<template>
	<view class="name-icon flex-column">
		<image class="pic" :src="goodInfo.pic"></image>
		<view class="name">{{goodInfo.name}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			goodInfo: {
				type: Object,
				default: () => {}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.name-icon {
		width: 100%;
		justify-content: center;
		align-items: center;
		
		.pic {
			width: 100rpx;
			height: 100rpx;
			margin-bottom: 20rpx;
		}
		
		.name {
			text-align: center;
			font-size: 26rpx;
			font-weight: 600;
			color: #333;
		}
	}
</style>