import App from './App'

import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'

import store from '@/store'
import plugins from './plugins' // plugins
import './permission' // permission
Vue.use(plugins)

import uView from 'uview-ui'
Vue.use(uView)

// 引入语言包，注意路径
import zh from '@/common/locales/zh.js'
import en from '@/common/locales/en.js'

// 引入并使用vue-i18n
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

// 构造i18n对象
const i18n = new VueI18n({
	// 默认语言，这里的local属性，对应message中的zh、en属性
	locale: 'zh',
	// 引入语言文件
	messages: {
		// 要标识这里的语言属性，如：this.$i18n.locale = zh|en|zh|xxx
		'zh': zh, // 这里为上面通过import引入的语言包
		'en': en,
	}
})

// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
Vue.prototype._i18n = i18n


// 原有内容，需在这添加i18n
const app = new Vue({
	// 记得在这添加i18n
	i18n,
	store,
    ...App
})
app.$mount()