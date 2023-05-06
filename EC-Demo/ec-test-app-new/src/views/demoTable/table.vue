<template>
	 <tableBase :data="data" :columns="colums"></tableBase>
</template>
<script lang="ts" setup>
import { colums, data } from './utils/data';
import tableBase from './components/tableBase.vue';
components: {
	tableBase
}
</script>