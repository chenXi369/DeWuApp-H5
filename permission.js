import {
	getToken
} from '@/utils/auth'

// 登录页面
const loginPage = "/pages/login"

// 页面白名单（默认-首页，我的，登录。注册）
const whiteList = [
	'/pages/login', '/pages/register', '/pages/address/list', '/pages/mine/mine', '/pages/home/home',
	'/', '/pages/myOrder/index', '/pages/search/index', '/pages/good/list', '/pages/good/detail', '/pages/good/confirmOrder'
]

// 检查地址白名单
function checkWhite(url) {
	const path = url.split('?')[0]
	return whiteList.indexOf(path) !== -1
}

// 页面跳转验证拦截器
let list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"]

list.forEach(item => {
	uni.addInterceptor(item, {
		invoke(to) {
			if (checkWhite(to.url)) {
				return true
			} else {
				if (getToken()) {
					if (to.url === loginPage) {
						uni.reLaunch({
							url: "/"
						})
					}
					return true
				} else {
					uni.reLaunch({
						url: loginPage
					})
					return false
				}
			}
		},
		fail(err) {
			console.log(err)
		}
	})
})