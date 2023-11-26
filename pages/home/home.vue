<template>
	<view class="home-page">
		<view class="search-header">
			<view class="search flex-between">
				<u-search :show-action="false" @click="toSearch" shape="square" placeholder="搜索单品"></u-search>
				<view class="right-title" @tap="toGoodList">
					<text class="en">{{$t('home.allCategory')}}</text>
					<!-- <text class="zh">分类</text> -->
				</view>
			</view>

			<view class="header-title">
				<u-tabs :list="list" font-size="34" :current="current" @change="change"
					bar-width="0" inactive-color="#999999" active-color="#111111"></u-tabs>
			</view>
			
			<view class="title-text flex-between">
				<text class="name">{{$t('home.identify')}}</text>
				
				<view class="right-icon flex">
					<view class="label-icon">
						<image src="" mode=""></image>
						<text>{{$t('home.multipleDiscrimination')}}</text>
					</view>
					<view class="label-icon">
						<image src="" mode=""></image>
						<text>{{$t('home.pieceByPieceInspection')}}</text>
					</view>
					<view class="label-icon">
						<image src="" mode=""></image>
						<text>{{$t('home.genuineGuarantee')}}</text>
					</view>
				</view>
			</view>
		</view>
		
		<scroll-view class="scroll-main">
			<view class="good-list">
				<view class="item" v-for="item in goodList" :key="item.id" @click="toGoodDetail(item)">
					<Good :goodRow="item"></Good>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import Good from '@/components/goodItem.vue'
	import lang from '@/common/locales/index.js'
	export default {
		data() {
			return {
				list: [{
					name: '推荐'
				}, {
					name: '艺术'
				}, {
					name: '饮食'
				}, {
					name: '女装'
				}, {
					name: '车品'
				}, {
					name: '家居'
				}, {
					name: '家电'
				}, {
					name: '鞋类'
				}, {
					name: '手表'
				}],
				current: 0,
				goodList: [
					{
						id: 1,
						name: '',
						pic: '',
						price: '',
						personNum: ''
					},
					{
						id: 2,
						name: '',
						pic: '',
						price: '',
						personNum: ''
					}
				]
			}
		},
		components: {
			Good
		},
		methods: {
			// 跳转搜索页
			toSearch() {
				uni.navigateTo({
					url: '/pages/search/index'
				})
			},
			// 跳商品列表页
			toGoodList() {
				uni.navigateTo({
					url: `/pages/good/list?tabs=${JSON.stringify(this.list)}`
				})
			},
			// 跳转商品详情
			toGoodDetail(row) {
				uni.navigateTo({
					url: '/pages/good/detail'
				})
			},
			change(e) {
				this.current = e
			}
		}
	}
</script>

<style lang="scss">
	.home-page {
		width: 100vw;
		height: calc(100vh - 90rpx);
		position: relative;

		.scroll-main {
			width: 100%;
			height: calc(100% - 290rpx);
			background: #fff;
			
			.good-list {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				width: 100%;
				
				.item{
					width: 50%;
					
					&:nth-of-type(2n - 1) {
						border-right: 1rpx solid #eaeaea;
					}
				}
			}
		}
		.search-header {
			width: 100%;
			height: 300rpx;
			background: #fff;
			border-bottom: 1rpx solid #eaeaea;
			
			.search {
				width: 100%;
				box-sizing: border-box;
				padding: 30rpx 24rpx 6rpx;
			}

			.right-title {
				display: flex;
				flex-direction: column;
				margin-left: 20rpx;
				font-weight: 600;
				justify-content: center;
				align-items: center;

				.en {
					font-size: 34rpx;
				}

				.zh {
					font-size: 24rpx;
				}
			}
			
			.title-text {
				height: 72rpx;
				line-height: 72rpx;
				margin: 0 24rpx 30rpx;
				background: #eaeaea;
				padding: 0 30rpx;
				
				.name {
					font-weight: 600;
				}
				
				.right-icon {
					width: calc(100% - 220rpx);
					
					.label-icon {
						text-align: right;
						flex: 1;
						
						image {
							width: 26rpx;
							height: 26rpx;
							margin-right: 6rpx;
						}
						text {
							font-size: 22rpx;
							color: #999;
						}
					}
				}
			}
		}
	}
</style>