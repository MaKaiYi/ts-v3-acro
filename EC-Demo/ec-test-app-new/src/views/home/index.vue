<template>
  <div class="app">
    <p>{{ $t("main.message") }}</p>
    <p>{{ $t("main.display") }}</p>
    <span>{{ $t("nation") }}</span>
    <h1>{{ title }} 计算属性：{{ reveValue }}</h1>
    <h2>{{ message }}</h2>
    <h1>{{ count }}</h1>
    <h2>{{ john.name }}</h2>
    <h2>{{ mainStore.user }}</h2>
    <h2>pinia:{{ mainStore.count }} {{ mainStore.bad }}</h2>
    <h2>pinia Message:{{ mainStore.message }}</h2>
    <div v-for="(item, index) in getModuleData" :key="index">
      {{ item }}
    </div>
    <div class="btnList">
      <a-button type="primary" @click="Add">添加</a-button>

      <a-button type="outline" @click="Delte">减少</a-button>

      <a-button type="outline" @click="toTable">Table</a-button>
    <router-link to="/acroIndex"><a-button type="text">ARCO</a-button></router-link>
    </div>
    <a-carousel
      :style="{
        width: '600px',
        height: '240px',
        margin: '0px auto',
        'margin-top': '10px',
      }"
      :auto-play="true"
      animation-name="fade"
      show-arrow="always"
    >
      <a-carousel-item v-for="(image, index) in images" :key="index">
        <img
          :src="image"
          :style="{
            width: '100%',
          }"
        />
      </a-carousel-item>
    </a-carousel>
    <child
      :textS="textData"
      :numberText="1"
      @getEmitData="getValue"
      @setEmitValue="getEmitValue"
    ></child>
    <div>Mouse position is at: {{ x }}, {{ y }}</div>
  </div>
</template>
<script lang="ts" setup>
import { Person } from "./class/index";
import { useCounterStore, allanStore } from "@/store/index";
import child from "./components/child.vue";
import { useMouse } from "../../hooks/mouse";
import {useRouter } from 'vue-router'
// import { allanStore,  } from "@/store/modules/allan";
import { mapStores } from "pinia";
import { computed, reactive, ref, watch, watchEffect } from "vue";
components: {
  child;
}
const title: string = "张三";
const { x, y } = useMouse();
const textData = ref();
const message: string = "这是一条消息";
const images = reactive([
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
  "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
]);
const count = ref(0);
const john = new Person("WiN", 30);

// pinia
const mainStore = useCounterStore();
const allanStored = allanStore();

// const allanStoresuser = allanStores();
const getModuleData = mainStore.getModule;
const Add = () => {
  mainStore.increment();
  state.data += 1;
  // mainStore.$patch({ count: mainStore.count + 1 });
  // mainStore.count++;
  // allanStored.setDataList();
  // textData.value = "01234";
};

const Delte = () => {
  mainStore.setMessage("THIS IS A MESSAGE");

  mainStore.user = "makaiyi";

  // mainStore.bad = "happy";
};

// emit事件
const getValue = (value: any) => {
  console.log(value);
};
const getEmitValue = (value: { name: string }) => {
  console.log(value.name);
};

// 计算属性
const reveValue = computed(() => {
  return title.split("").reverse().join("");
});

// watch 数据监听
watch(
  () => mainStore,
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
  },
  { deep: true }
);
watchEffect(() => {
  console.log(mainStore.count);
});
const state = reactive({
  data: 42,
});
const oldValue = state.data;
watchEffect(() => {
  const newValue = state.data;

  if (oldValue !== newValue) {
    console.log(`data has changed from ${oldValue} to ${newValue}`);
  }
});

// 页面跳转
const router = useRouter()
const toTable = () => {
  router.push('/baseTable')
}
</script>
<style lang="less" scoped>
.app {
  text-align: center;
}
.btnList {
  width: 400px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
