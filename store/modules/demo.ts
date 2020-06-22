import { Getters, Actions, Mutations, Module } from 'vuex-smart-module'


class DemoState {
  message = ''
}

class DemoMutations extends Mutations<DemoState> {
  setMessage(msg: string) {
    this.state.message = msg
  }
}

class DemoActions extends Actions<
DemoState,
Getters<DemoState>,
DemoMutations,
DemoActions
> {
  setMessage(str: string) {
    this.commit('setMessage', str)
  }
}


export const module = new Module({
  state: DemoState,
  mutations: DemoMutations,
  actions: DemoActions
})
