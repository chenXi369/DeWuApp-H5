<!-- name: 地址列表 -->
<template>
	<view class="address-list">
		<scroll-view class="scroll-area" scroll-y="true">
			<view v-for="item in addressList" :key="item.id">
				<address-item :addressForm="item" />
			</view>
		</scroll-view>
		
		<view class="fixed-btn">
			<u-button type="primary">{{$t('addressList.addBtn')}}</u-button>
		</view>
	</view>
</template>

<script>
	import AddressItem from '@/components/AddressItem.vue'
	
	export default {
		data() {
			return {
				addressList: [
					{
						id: 1,
						isDefault: '',
						name: '小李子',
						phoneNo: '13578081511',
						homeAreaCode: null,
						homeAreaValue: '江苏省无锡市梁溪区迎龙桥街道运河东路与永乐路交汇处东北角曹张新村第三社区433栋'
					},
					{
						id: 2,
						isDefault: '',
						name: '小李子',
						phoneNo: '13578081511',
						homeAreaCode: null,
						homeAreaValue: '江苏省无锡市梁溪区运河东路与永乐路交汇处'
					}
				]
			}
		},
		onLoad() {
			if (uni.getStorageSync('lang') !== 'zh') uni.setNavigationBarTitle({
				title: this.$t('addressList.barTitile')
			}) 
		},
		components: {
			AddressItem
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.address-list {
		width: 100vw;
		height: calc(100vh - 88rpx);
		background: #f5f5f5;
		position: relative;
		box-sizing: border-box;
		
		.scroll-area {
			width: 100%;
			height: 90%;
		}
		
		.fixed-btn {
			position: absolute;
			width: calc(100% - 48rpx);
			left: 24rpx;
			bottom: 30rpx;
		}
	}
</style>