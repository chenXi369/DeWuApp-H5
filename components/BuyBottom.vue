<template>
	<view class="bottom-buy">
		<u-popup v-model="showBuy" mode="bottom">
			<view class="popup-header flex-between">
				<u-image src="" width="150" height="150"></u-image>
				
				<view class="right-info">
					<view class="price">￥1419</view>
					<view class="cur-size-time flex-between">
						<text>已选 40.5</text>
						<text class="timer">到货时间
							<u-icon style="margin-left: 8rpx" name="question-circle"></u-icon>
						</text>
					</view>
				</view>
			</view>
			
			<view class="popup-size-list">
				<view class="size-item" v-for="item in 16" :key="item">
					<text class="size">38</text>
					<text class="price">￥1249</text>
				</view>
			</view>
			
			<view class="popup-footer flex-between">
				<u-button :custom-style="btnStyle" type="primary" @click="toConfirmOrder(1)">
					<text class="btn-price">￥1419</text>
					<text style="margin: 10rpx;">|</text>
					<text class="timer">约2-3天到</text>
				</u-button>
				<u-button :custom-style="btnStyle" type="success" @click="toConfirmOrder(2)">
					<text class="btn-price">￥1269</text>
					<text style="margin: 10rpx;">|</text>
					<text class="timer">约1-3天到</text>
				</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		props: {
			showBuy: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			btnStyle() {
				return {
					'width': '48%',
					'height': '130rpx',
					'margin-top': '10rpx'
				}
			}
		},
		methods: {
			toConfirmOrder(type) {
				this.$emit('toConfirmOrder', type)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bottom-buy {
		width: 100%;
		background: #f5f5f5;
		position: relative;
		
		.popup-footer {
			width: 100%;
			height: 150rpx;
			padding-bottom: 10rpx;
			position: absolute;
			bottom: 0rpx;
			left: 0;
			background: #fff;
			
			.btn-price {
				font-size: 42rpx;
				font-weight: 600;
			}
			.timer {
				margin-top: 10rpx;
				font-size: 26rpx;
				font-weight: 500;
			}
		}
		
		.popup-size-list {
			width: 100%;
			height: 600rpx;
			display: flex;
			flex-wrap: wrap;
			padding: 20rpx;
			box-sizing: border-box;
			padding: 10rpx 10rpx 160rpx;
			background: #f5f5f5;
			overflow-y: scroll;
			
			.size-item {
				display: inline-block;
				width: calc(25% - 20rpx);
				margin: 10rpx;
				align-items: center;
				padding: 30rpx 0rpx;
				display: flex;
				flex-direction: column;
				background: #fff;
				
				.size {
					line-height: 50rpx;
					color: #333;
					font-size: 38rpx;
					font-weight: 600;
				}
				.price {
					line-height: 40rpx;
					color: #999;
					font-size: 24rpx;
					font-weight: 600;
				}
			}
		}
		
		.popup-header {
			width: 100%;
			height: 200rpx;
			background: #fff;
			padding: 25rpx;
			box-sizing: border-box;
			
			.right-info {
				width: calc(100% - 175rpx);
				margin-left: 25rpx;
				
				.price {
					font-size: 50rpx;
					font-weight: 600;
					line-height: 80rpx;
				}
				
				.cur-size-time {
					align-items: center;
					line-height: 80rpx;
					color: #999;
					
					.timer {
						color: #666;
						font-size: 28rpx;
					}
				}
			}
		}
	}
</style>