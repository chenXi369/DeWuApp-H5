<template>
	<view class="my-order">
		<view class="header-tabs">
			<u-tabs :list="tabList" :is-scroll="false" :current="current" @change="changeTab"></u-tabs>
		</view>
		
		<scroll-view class="main">
			<view v-for="good in goodList" :key="good.id">
				<Item :goodRow="good"></Item>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import Item from '@/components/orderItem.vue'
	
	export default {
		data() {
			return {
				tabList: [{
					name: '待付款'
				}, {
					name: '待发货'
				}, {
					name: '待收货'
				}, {
					name: '全部订单'
				}],
				current: null,
				goodList: [
					{
						id: 1,
						status: 3,
						size: '42',
						pic: null,
						name: '[闪电直发][11.11好价] adidasoriginals Forum 84 Low Adv 复古潮流',
						num: 1,
						price: '349.60'
					},
					{
						id: 2,
						status: 3,
						size: '42',
						pic: null,
						name: '',
						num: 1,
						price: '349.60'
					}
				]
			}
		},
		components: {
			Item
		},
		onLoad(options) {
			this.current = options.type ? options.type : 3
		},
		methods: {
			changeTab(e) {
				this.current = e
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my-order {
		width: 100%;
		height: 100vh;
		position: relative;
		
		.header-tabs {
			width: 100%;
		}
		
		.main {
			width: 100%;
			height: calc(100% - 100rpx);
			top: 100rpx;
			left: 0;
			position: absolute;
		}
	}
</style>