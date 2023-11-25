<!-- name: 地址组件 -->
<template>
	<view class="address-item">
		<view class="top-info flex">
			<view class="name-phone flex-between">
				<text class="name">{{ addressForm.name }}</text>
				<text class="phone">{{ phoneNo }}</text>
			</view>
			<view class="area">{{ addressForm.homeAreaValue }}</view>
			
			<u-icon class="fixed-eye" name="eye" @click="openEye = !openEye"
				:color="openEye ? '#666' : '#01C2C5'"></u-icon>
		</view>
		<view class="bottom-btns flex-between">
			<u-radio-group v-model="addressForm.isDefault">
				<u-radio icon-size="26" label-size="26" name="defaultArea">{{$t('addressList.defaultArea')}}</u-radio>
			</u-radio-group>
			
			<view class="right-btn flex-between">
				<text class="btn edit">{{$t('addressList.btnEdit')}}</text>
				<text class="btn delete">{{$t('addressList.btnDel')}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			addressForm: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {
				openEye: true
			}
		},
		computed: {
			phoneNo() {
				if (this.openEye) {
					return this.addressForm.phoneNo.slice(0, 3) + '****' + this.addressForm.phoneNo.slice(7, 11)
				} else {
					return this.addressForm.phoneNo
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.address-item {
		width: 100%;
		background: #fff;
		margin-bottom: 30rpx;
		padding: 30rpx 24rpx 0rpx 24rpx;
		
		.top-info {
			width: 100%;
			position: relative;
			padding-bottom: 30rpx;
			flex-direction: column;
			border-bottom: 1rpx solid #eee;
			
			.name-phone {
				width: 100%;
				padding-right: 40rpx;
				box-sizing: border-box;
				font-size: 32rpx;
				color: #333;
			}
			
			.area {
				font-size: 32rpx;
				color: #333;
				margin-top: 26rpx;
				line-height: 40rpx;
			}
			
			.fixed-eye {
				position: absolute;
				right: 6rpx;
				top: 5rpx;
			}
		}
		
		.bottom-btns {
			height: 92rpx;
			align-items: center;
			font-size: 28rpx;
			
			.right-btn {
				width: 160rpx;
				
				.btn:active {
					opacity: 0.5;
				}
				.edit {
					color: $uni-color-primary;
				}
				.delete {
					color: $uni-color-error;
				}
			}
		}
	}
</style>