import Vue from 'vue'
import Vuex from 'vuex'
import globalModules from './global/index.js'
import modules from './modules/index.js'
Vue.use(Vuex)

export default new Vuex.Store({...globalModules, modules})
