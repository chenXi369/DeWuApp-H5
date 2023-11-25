<!-- name: 搜索页 -->
<template>
	<view class="search-page">
		<view class="search-btn">
			<u-search v-model="searchVal"></u-search>
		</view>
		<view class="main">
			<view class="title">热门搜索</view>
			<view class="content">
				<text class="tag" v-for="(item,index) in hotSearchArr" :key="index" 
					@tap="searchCurItem(item)">{{item}}</text>
			</view>
			<view class="title">历史搜索</view>
			<view class="content">
				<text class="tag" v-for="(item,index) in historySearchArr" :key="index">{{item}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchVal: null,
				hotSearchArr: ['AJ11白蓝康扣', '冰淇淋'],
				historySearchArr: []
			}
		},
		methods: {
			searchCurItem(e) {
				console.log(e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search-page {
		width: 100vw;
		height: 100vh;
		background: #fff;
		padding: 30rpx 24rpx;
		box-sizing: border-box;
		
		.search-btn {
			
		}
		
		.main {
			width: 100%;
			margin-top: 40rpx;
			
			.title {
				font-size: 30rpx;
				font-weight: 600;
			}
			
			.content {
				width: calc(100% - 20rpx);
				margin: 28rpx 10rpx 40rpx;
				display: flex;
				flex-wrap: wrap;
				
				.tag {
					color: #686868;
					font-size: 28rpx;
					padding: 12rpx 18rpx;
					border-radius: 10rpx;
					background: #f3f3f3;
					margin-right: 20rpx;
				}
			}
		}
	}
</style>