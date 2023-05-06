import { PiniaPluginContext } from 'pinia'
import { Router } from 'vue-router'

export default function piniaRouterPlugin(router: Router) {
  return ({ store }: PiniaPluginContext) => {
    // 在路由切换时重置所有状态
    router.beforeEach(() => {
      for (const key in store.state) {
        store.state[key] = store.persistentState[key]
      }
    })
  }
}
