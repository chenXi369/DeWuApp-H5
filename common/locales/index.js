import VueI18n from 'vue-i18n'
import Vue from 'vue'
Vue.use(VueI18n)

import en from './en.js'   //locale文件夹下的英文配置
import zh from './zh.js'   //中文配置

const messages = {
    en,
    zh
}

const i18n = new VueI18n({
	locale: uni.getStorageSync('lang') ? uni.getStorageSync('lang') : 'en',
	messages
})

export default i18n
