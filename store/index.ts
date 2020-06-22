import { Module} from 'vuex-smart-module'
import demo from './demo'

export const root = new Module({
  modules: {
    demo
  }
})

export const {
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins
} = root.getStoreOptions()
