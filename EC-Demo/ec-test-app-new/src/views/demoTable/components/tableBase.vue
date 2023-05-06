<template>
	<a-table :data="data" :columns="columns"></a-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { User, tableColumn } from '../utils/data';

export default defineComponent({
	name: 'tableBase',
	props: {
		data: {
			type: Array as () => User[],
			required:true
		},
		columns: {
			type: Array as () => tableColumn[],
			required:true
		}
	}
})
</script>