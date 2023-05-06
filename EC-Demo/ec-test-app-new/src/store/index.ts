import { createApp } from 'vue'
import { createPinia,defineStore, PiniaPluginContext, StateTree, _GettersTree, _ActionsTree  } from 'pinia'
import  {allanStore} from './modules/allan'
// import  persist  from 'pinia-plugin-persist'
// import persist, { PersistOptions } from 'pinia-plugin-persist'
// import createPersistPlugin  from 'pinia-plugin-persist'

interface CounterState {
  count: number;
  message: string;
}



export {allanStore}
export const useCounterStore = defineStore({
  id: "counter",
  state: (): CounterState => ({
    count: 0,
    message: "",
   
  }),
  getters: {
    doubleCount: (state: CounterState) => state.count * 2,
    doubleCountPlusOne() {
      return this.doubleCount;
    },
    getModule () {
      return allanStore().moveList
    }
  },
  actions: {
    increment () {
    
    
        this.count++;
     
      
    },
    setMessage(message: string) {
      this.message = message;
    },
    incrementCounter () {
      allanStore()
    }
  },
  persist: {
    enabled: true ,
  }
}, );
// 创建一个 persist 插件

// export default persistPlugin
