<!-- 订单组件 -->
<template>
	<view class="order-item">
		<view class="status">{{goodRow.status}}</view>
		
		<view class="good-info">
			<image :src="goodRow.pic" mode=""></image>
			
			<view class="right-info">
				<view class="name">{{goodRow.name}}</view>
				<view class="size-num">
					{{goodRow.size}} 数量×{{goodRow.num}}
				</view>
				<view class="price">{{goodRow.price}}</view>
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
	.order-item {
		width: 100%;
		margin-bottom: 20rpx;
		background: #fff;
	}
</style>