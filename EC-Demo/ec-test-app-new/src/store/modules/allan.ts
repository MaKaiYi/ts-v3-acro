import { defineStore } from "pinia";
export const allanStore = defineStore('allan',{
	state: () => {
		return {
			moveList:['SHILI','WECME']
		}
	},
	getters: {},
	actions: {
		setDataList () {
			this.moveList.push('HELLO WORLD')
		}
	}
})