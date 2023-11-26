<!-- 商品详情 -->
<template>
	<view class="good-list">
		<view class="header">
			<u-search :show-action="false" @click="toSearch" shape="square" placeholder="搜索单品"></u-search>
		</view>
		
		<view class="main flex-between">
			<view class="side-bar">
				<view class="side-item" :class="{'active-bar': item.name === sideBarList[currentBar].name}"
					v-for="item in sideBarList" :key="item.name" @tap="changeCurTab(item)">{{item.name}}</view>
			</view>
			
			<view class="good-ctx">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sideBarList: [],
				currentBar: 0
			}
		},
		onLoad(options) {
			this.sideBarList = JSON.parse(options.tabs)
		},
		methods: {
			changeCurTab(row) {
				this.currentBar = this.sideBarList.findIndex(e => e.name === row.name)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.good-list {
		width: 100%;
		height: 100vh;
		background: #fff;
		
		.header {
			width: 100%;
			padding: 30rpx 24rpx;
		}
		
		.main {
			width: 100%;
			
			.side-bar {
				width: 180rpx;
				height: 100%;
				overflow-y: scroll;
				
				.side-item {
					width: 180rpx;
					height: 100rpx;
					line-height: 60rpx;
					background: #f5f5f5;
					text-align: center;
					line-height: 100rpx;
					font-size: 32rpx;
					color: #666666;
					margin-bottom: 4rpx;
				}
				
				.active-bar {
					background: #fff;
					color: $uni-color-primary;
				}
			}
		}
	}
</style>