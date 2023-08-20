// import { ElButton } from 'element-plus'
// import lang from 'element-plus/lib/locale/lang/zh-cn'
// import locale from 'element-plus/lib/locale'

// export default (app) => {
//   locale.use(lang)
//   app.use(ElButton)
// }
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'

export default (app) => {
  app.use(ElementPlus, { locale })
}