import Vue from 'vue'
import Vuex from 'vuex'

import footer from './footer'




Vue.use(Vuex)
const store = new Vuex.Store({

    modules: { footer }
})
export default store