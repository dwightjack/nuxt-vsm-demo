import { Module, createStore} from 'vuex-smart-module'
import { module as demo} from './modules/demo'

const rootModule = new Module({
  modules: {
    demo
  }
})

const { options, injectStore} = (rootModule as any).create([], '')

export const modules = options.modules

// wewewwwwwsssssrrreeezzzwww
export const plugins = [injectStore]
