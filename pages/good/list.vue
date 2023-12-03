<!-- 商品详情 -->
<template>
	<view class="good-list">
		<view class="header">
			<u-search :show-action="false" :disabled="true" @click="toSearch" shape="square" placeholder="搜索单品"></u-search>
		</view>
		
		<view class="main flex-between">
			<view class="side-bar">
				<view class="side-item" :class="{'active-bar': item.name === sideBarList[currentBar].name}"
					v-for="item in sideBarList" :key="item.name" @tap="changeCurTab(item)">{{item.name}}</view>
			</view>
			
			<view class="good-ctx">
				<view class="title">推荐</view>
				<view class="common-list flex">
					<view class="icon-item" v-for="item in commendList" :key="item.id">
						<good-icon :goodInfo="item"></good-icon>
					</view>
				</view>
				<view class="title">热门</view>
				<view class="common-list flex">
					<view class="icon-item" v-for="item in hotList" :key="item.id">
						<good-icon :goodInfo="item"></good-icon>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import GoodIcon from '@/components/GoodIcon.vue'
	
	export default {
		components: {
			GoodIcon
		},
		data() {
			return {
				sideBarList: [],
				currentBar: 0,
				commendList: [
					{
						id: 1, name: '商品1', pic: null
					},
					{
						id: 2, name: '商品1', pic: null
					},
					{
						id: 3, name: '商品1', pic: null
					},
					{
						id: 4, name: '商品1', pic: null
					},
					{
						id: 5, name: '商品1', pic: null
					},
					{
						id: 6, name: '商品1', pic: null
					},
					{
						id: 7, name: '商品1', pic: null
					},
				],
				hotList: [
					{
						id: 1, name: '商品1', pic: null
					},		
					{
						id: 2, name: '商品1', pic: null
					},
					{
						id: 3, name: '商品1', pic: null
					},
					
					{
						id: 4, name: '商品1', pic: null
					},
					{
						id: 5, name: '商品1', pic: null
					},
					{
						id: 6, name: '商品1', pic: null
					},
					{
						id: 7, name: '商品1', pic: null
					},
					{
						id: 8, name: '商品1', pic: null
					},
					
				]
			}
		},
		onLoad(options) {
			this.sideBarList = JSON.parse(options.tabs)
		},
		methods: {
			toSearch() {
				uni.navigateTo({
					url: '/pages/search/index'
				})
			},
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
				display: flex;
				flex-direction: column;
				overflow-y: scroll;
				
				.side-item {
					width: 180rpx;
					height: 120rpx;
					line-height: 60rpx;
					background: #f5f5f5;
					text-align: center;
					line-height: 120rpx;
					font-size: 32rpx;
					color: #666666;
					margin-bottom: 4rpx;
				}
				
				.active-bar {
					background: #fff;
					color: $uni-color-primary;
				}
			}
			
			.good-ctx {
				width: calc(100% - 204rpx);
				display: flex;
				flex-direction: column;
				align-items: center;
				
				.title {
					font-size: 30rpx;
					font-weight: 600;
					color: #666;
					line-height: 90rpx;
				}
				
				.common-list {
					width: 100%;
					flex-wrap: wrap;
					margin-bottom: 30rpx;
					
					.icon-item {
						width: 33.33%;
					}
				}
			}
		}
	}
</style>