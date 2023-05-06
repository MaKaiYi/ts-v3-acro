import { PiniaPluginContext } from "pinia";
import { ref } from "vue";
const bad = ref('bad')
// const hello = ref('Heelo World')
export default function (content: PiniaPluginContext) {
	console.log('content data', content.pinia)
	console.log('content.app', content.app)
	console.log('content.store', content.store)
	console.log('content.options', content.options)
	content.store.user = ref('userMa')
	content.store.hello='hello world'
	content.store._customProperties.add('hello')
	content.store.bad=bad
	return {
		secret:'don\t tell antone'
	}
}