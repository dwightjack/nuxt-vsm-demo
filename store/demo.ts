import { Getters, Actions, Mutations, Module } from 'vuex-smart-module'


export class DemoState {
  message = ''
}

export class DemoMutations extends Mutations<DemoState> {
  setMessage(msg: string) {
    this.state.message = msg
  }
}

export class DemoActions extends Actions<
DemoState,
Getters<DemoState>,
DemoMutations,
DemoActions
> {
  setMessage(str: string) {
    this.commit('setMessage', str)
  }
}


export default new Module({
  state: DemoState,
  mutations: DemoMutations,
  actions: DemoActions
})
