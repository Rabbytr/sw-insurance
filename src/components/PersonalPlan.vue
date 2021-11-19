<template>
    <div style="text-align: center">
      <q-chip color="pink-3" text-color="white" clickable>
          <q-avatar color="light-blue-4" text-color="white">
            {{ props.data.username[0] }}</q-avatar>
        {{ props.data.username }}

        <q-tooltip
            class="bg-transparent"
            transition-show="scale"
            transition-hide="scale"
        >
          <q-card class="my-card text-white"
                  style="background: radial-gradient(circle,#fcb2d5  0%, #abc7ec 100%)"
          >
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar5.jpg">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-h6">{{ props.data.username }}</q-item-label>
              </q-item-section>

            </q-item>

            <q-separator dark inset />

            <q-card-section class="text-subtitle1">
              Medical: {{ props.data.medical_plan.name }}
            </q-card-section>

            <q-card-section class="text-subtitle1">
              Money: {{ props.data.medical_plan.value }}
            </q-card-section>

          </q-card>
        </q-tooltip>
      </q-chip>

      <q-tab-panels
          v-model="chartsTab"
          swipeable
          infinite
          animated
          keep-alive
      >
        <q-tab-panel name="plan">
          <div class="charts-wapper" >
            <v-chart id="chart" class="chart"
                     v-show="props.data.invest"
                     :option="sunburstOption"/>
            <h2 v-show="!props.data.invest">该用户不投资</h2>
          </div>
        </q-tab-panel>

        <q-tab-panel name="curve">
          <div class="charts-wapper">
            <v-chart class="chart" :option="curveOption"/>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart,SunburstChart,TreemapChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import {computed, ref} from "vue";

use([
  CanvasRenderer,
  LineChart,
  SunburstChart,
  TreemapChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default {
  name: "PersonalPlan",
  props: {
    data: Object,
  },
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "light"
  },
  setup(props){
    const chartsTab = ref('plan')

    const sunburstData = computed(()=>{
      return props.data.plan_data
    })

    const curveLabels = computed(()=>{
      return Array.from({length:props.data.line_data.data[0].values.length}, (v,k) => k+props.data.age)
    })

    const curveData = computed(()=>{
      return Array.from(props.data.line_data.data,(x,index)=>{
        return {
          name: x.name,
          type: 'line',
          data: x.values,
          yAxisIndex: index===props.data.line_data.data.length-1?1:0
        }
      })
    })

    const sunburstOption = ref({
      tooltip: {
        trigger: "item",
        formatter: "$ {c}",
        textStyle: {
          fontSize: 20
        }
      },
      series: {
        type: 'sunburst',
        emphasis: {
            focus: 'ancestor'
        },
        data: sunburstData,
        levels: [
          {},
          {
            r0: '12%',
            r: '75%',
            label: {
              rotate: 'radial',
              fontSize: 22
            }
          },
          {
            r0: '75%',
            r: '90%',
            label: {
              position: 'outside',
              fontSize: 18,
            }
          }
        ]
      },
    });


    const curveOption = ref({
      animationDuration: 2000,
      title: {
        text: 'Life Curve',
        left: "center"
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        // boundaryGap: false,
        data: curveLabels
      },
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            show: false
          }
        },
        {
          type: 'value',
          axisLabel: {
            show: false
          }
        }
      ],
      series: curveData
    })

    return {props,chartsTab,sunburstOption,curveOption}
  }
}


</script>

<style scoped>
.charts-wapper {
  height: 48vh;
}
.popup-card{

}
</style>