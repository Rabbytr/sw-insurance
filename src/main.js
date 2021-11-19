import App from './App.vue'
import { createApp } from 'vue'
import ECharts from 'vue-echarts'
import { use } from "echarts/core"
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

// import ECharts modules manually to reduce bundle size
import {
    CanvasRenderer
} from 'echarts/renderers'
import {
    BarChart
} from 'echarts/charts'
import {
    GridComponent,
    TooltipComponent
} from 'echarts/components'

use([
    CanvasRenderer,
    BarChart,
    GridComponent,
    TooltipComponent
])


const app = createApp(App).use(Quasar, quasarUserOptions)

// register globally (or you can do it locally)
app.component('v-chart', ECharts)

app.mount('#app')

