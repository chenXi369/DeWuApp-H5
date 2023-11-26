<template>
	<view class="mine-container" :style="{height: `${windowHeight}px`}">
		<!--顶部个人信息栏-->
		<view class="header-section">
			<view class="flex padding justify-between">
				<view class="flex align-center">
					<view v-if="!avatar" class="cu-avatar xl round bg-white">
						<view class="iconfont icon-people text-gray icon"></view>
					</view>
					<image v-if="avatar" @click="handleToAvatar" :src="avatar" class="cu-avatar xl round"
						mode="widthFix">
					</image>
					<view v-if="!name" @click="handleToLogin" class="login-tip">
						{{$t('mine.chinese')}}/{{$t('mine.english')}}
					</view>
					<view v-if="name" @click="handleToInfo" class="user-info">
						<view class="u_title">
							{{$t('mine.username')}}：{{ name }}
						</view>
					</view>
				</view>
			</view>
			
			<view class="lang-area" @click="changeLang">
				<u-icon name="attach" size="32"></u-icon>
				<text>{{$t('mine.chinese')}}/{{$t('mine.english')}}</text>
			</view>
		</view>

		<view class="content-section">
			<view class="menu-list">
				<view class="list-cell list-cell-arrow">
					<view class="menu-item-box" @click="toAllOrder(3)">
						<view class="iconfont icon-user menu-icon"></view>
						<view>{{$t('mine.buy')}}</view>
						<view class="right-slot">{{$t('mine.allOrders')}}</view>
					</view>
					
					<view class="bottom-slot flex-around">
						<view class="title-icon" @click="toAllOrder(0)">
							<image class="icon" src="/static/images/payOnBehalf-icon.png" mode=""></image>
							<text class="title">{{$t('mine.waitPay')}}</text>
						</view>
						<view class="title-icon" @click="toAllOrder(1)">
							<image class="icon" src="/static/images/delivery-agent-icon.png" mode=""></image>
							<text class="title">{{$t('mine.pendingShipment')}}</text>
						</view>
						<view class="title-icon" @click="toAllOrder(2)">
							<image class="icon" src="/static/images/tobe-received-icon.png" mode=""></image>
							<text class="title">{{$t('mine.pendingReceipt')}}</text>
						</view>
					</view>
				</view>
				<view class="list-cell list-cell-arrow" @click="handleToEditInfo">
					<view class="menu-item-box">
						<view class="iconfont icon-user menu-icon"></view>
						<view>{{$t('mine.mySubscription')}}</view>
					</view>
				</view>
				<view class="list-cell list-cell-arrow" @click="handleHelp">
					<view class="menu-item-box">
						<view class="iconfont icon-help menu-icon"></view>
						<view>{{$t('mine.account')}}</view>
					</view>
				</view>
				<view class="list-cell list-cell-arrow" @click="handleAbout">
					<view class="menu-item-box">
						<view class="iconfont icon-aixin menu-icon"></view>
						<view>{{$t('mine.coupon')}}</view>
					</view>
				</view>
				<view class="list-cell list-cell-arrow" @click="handleToAddress">
					<view class="menu-item-box">
						<view class="iconfont icon-setting menu-icon"></view>
						<view>{{$t('mine.addressManagement')}}</view>
					</view>
				</view>
				<view class="list-cell list-cell-arrow" @click="handleToAddress">
					<view class="menu-item-box">
						<view class="iconfont icon-setting menu-icon"></view>
						<view>{{$t('mine.messageNotification')}}</view>
					</view>
				</view>
				<view class="list-cell list-cell-arrow" @click="handleToAddress">
					<view class="menu-item-box">
						<view class="iconfont icon-setting menu-icon"></view>
						<view>{{$t('mine.privacyPolicy')}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="footer-logout">
			<u-button @click="logout">{{$t('mine.loginOut')}}</u-button>
		</view>
	</view>
</template>

<script>
	import storage from '@/utils/storage'
	import lang from '@/common/locales/index.js'

	export default {
		data() {
			return {
				name: this.$store.state.user.name
			}
		},
		computed: {
			avatar() {
				return this.$store.state.user.avatar
			},
			windowHeight() {
				return uni.getSystemInfoSync().windowHeight - 50
			}
		},
		methods: {
			// 中英文切换
			changeLang() {
				const currentLang = this.$i18n.locale
				if (currentLang === 'zh') {
				  this.$i18n.locale = 'en'
				} else {
				  this.$i18n.locale = 'zh'
				}
				this.$modal.msgSuccess(`${this.$i18n.locale === 'en' ? '英文' : '中文'}切换成功`)
			},
			handleToLogin() {
				uni.reLaunch({
					url: '/pages/login'
				})
			},
			// 跳转到订单页
			toAllOrder(type) {
				uni.navigateTo({
					url: `/pages/myOrder/index?type=${type}`
				})
			},
			handleToAvatar() {
				uni.navigateTo('/pages/mine/avatar/index')
			},
			handleLogout() {
				this.$modal.confirm('确定注销并退出系统吗？').then(() => {
					this.$store.dispatch('LogOut').then(() => {
						uni.reLaunch('/pages/index')
					})
				})
			},
			handleHelp() {
				uni.navigateTo('/pages/mine/help/index')
			},
			handleAbout() {
				uni.navigateTo('/pages/mine/about/index')
			},
			// 跳转地址页面
			handleToAddress() {
				uni.navigateTo({
					url: '/pages/address/list'
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f5f6f7;
	}

	.mine-container {
		width: 100%;
		height: 100%;
		
		.bottom-slot {
			padding: 40rpx 20rpx 20rpx;
			width: 100%;
			
			.title-icon {
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				
				.title {
					font-size: 24rpx;
				}
				.icon {
					width: 50rpx;
					height: 42rpx;
					margin-bottom: 10rpx;
				}
			}
		}
		
		.footer-logout {
			width: 100%;
			position: relative;
			bottom: -30rpx;
		}

		.header-section {
			padding: 15px 15px 15px 15px;
			background-color: #fff;
			color: #333;
			position: relative;
			
			.lang-area {
				position: absolute;
				right: 40rpx;
				top: 40rpx;
			}

			.login-tip {
				font-weight: 600;
				font-size: 20px;
				margin-left: 10px;
			}

			.cu-avatar {
				border: 2px solid #eaeaea;

				.icon {
					font-size: 40px;
				}
			}

			.user-info {
				margin-left: 15px;

				.u_title {
					font-size: 18px;
					line-height: 30px;
				}
			}
		}

		.content-section {
			width: 100vw;
			margin-top: 30rpx;
		}
	}
</style>