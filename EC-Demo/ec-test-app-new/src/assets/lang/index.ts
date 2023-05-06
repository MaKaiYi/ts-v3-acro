import { createI18n } from 'vue-i18n';   // 与vue2的VueI18n使用方式不同
import zn from './zn/zn';
import en from './en/en';
 
const i18n = createI18n({
  locale: 'zn',
  messages: {
    'zn': zn,
    'en': en
  }
});
 
export default i18n;
 