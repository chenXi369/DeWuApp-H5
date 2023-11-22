import vue from '@/main.js'
const urlConfig = {
	baseUrl: 'http://127.0.0.1:8010'
}
const lan = uni.getStorageSync("CURRENT_LANG");
const baseRequest = (opts, data) => {
	let method = 'post'
	if (opts.method) {
		method = opts.method
	}
	let baseDefaultOpts = {
		url: urlConfig.baseUrl + opts.url,
		// 请求接口地址
		data: data,
		// 传入请求参数
		method: method,
		// 配置请求类型
		header: method.toLowerCase() == 'get' ? {
			'X-Requested-With': 'XMLHttpRequest',
			'lan': lan,
			"Accept": "application/json",
			"Content-Type": "application/json; charset=UTF-8"
		} : {
			'X-Requested-With': 'XMLHttpRequest',
			'lan': lan,
			'Content-Type': 'application/json; charset=UTF-8'
		},
		// 配置请求头
		dataType: 'json',
	}
	let promise = new Promise(function(resolve, reject) {
		uni.request(baseDefaultOpts).then(
			(res) => {
				if (res.data.code === 200) {
					resolve(res.data);
				} else {
					vue.$u.toast(res.data.message)
					reject(res);
				}
			}
		).catch(
			(response) => {
				reject(response)
			}
		)
	})
	return promise
};

//带Token请求
const TokenRequest = (opts, data) => {
	//此token是登录成功后后台返回保存在storage中的
	let token = "";
	if (uni.getStorageSync('token')) {
		token = uni.getStorageSync('token');
	}
	//设置默认请求方式
	let method = 'post'
	if (opts.method) {
		method = opts.method
	}
	let promise;
	//配置一下请求参数
	let DefaultOpts = {
		url: urlConfig.baseUrl + opts.url,
		data: data,
		method: method,
		header: method.toLowerCase() == 'get' ? {
			'token': token,
			'lan': lan,
			'X-Requested-With': 'XMLHttpRequest',
			"Accept": "application/json",
			"Content-Type": "application/json; charset=UTF-8"
		} : {
			'token': token,
			'lan': lan,
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/json; charset=UTF-8'
		},
		dataType: 'json',
	}
	//if(token){
	//我这里前台不验证token了, 放在后端验证,后台会对需要验证的接口进行配置，因为不是每个接口都要token认证的
	promise = new Promise(function(resolve, reject) {
		uni.request(DefaultOpts).then(
			(res) => {
				if (res.data.code === 208) {
					vue.$u.toast("please log in first")
					uni.reLaunch({
						url: '/pages/login/login'
					})
				} else if (res.data.code === 200) {
					resolve(res.data);
				} else {
					vue.$u.toast(res.data.message)
					reject(res);
				}

			}
		).catch(
			(response) => {
				reject(response)
			}
		)
	})
	return promise
}

// 将对象导出外部引入使用
export default {
	baseRequest,
	TokenRequest,
	urlConfig
}