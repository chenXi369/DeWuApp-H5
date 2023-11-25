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

// 引入并使用vue-i18n
import i18n from './common/locales/index'

// 原有内容，需在这添加i18n
const app = new Vue({
	i18n,
	store,
    ...App
})
app.$mount()