<template>
  <div class="row" >
    <div class="col" style="height: 60vh">
      <v-chart :option="option" @click="pointClicked" />
    </div>
  </div>
  <q-dialog
      v-model="dialogShow"
      @hide="onDialogHide"
  >
    <q-card style="width: 100vw">
      <q-card-section>
        <q-carousel
            v-model="planSlide"
            transition-prev="scale"
            transition-next="scale"
            animated
            control-color="light-blue-4"
            vertical
            swipeable
            keep-alive
            height="65vh"
        >
          <q-carousel-slide
              v-for="(plan,index) in props.data.multi_plans[currentFront]"
              :key="index"
              :name="index"
          >
            <div class="q-pa-lg">
              <PersonalPlan :data="plan"></PersonalPlan>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import {computed, ref} from "vue";
import PersonalPlan from "./PersonalPlan";
import VChart, {THEME_KEY} from "vue-echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { ScatterChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
use([
  CanvasRenderer,
  ScatterChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default {
  name: "ParetoForeword",
  props: {
    data: Object
  },
  components: {
    VChart,
    PersonalPlan,
  },
  provide: {
    [THEME_KEY]: "light"
  },
  setup(props){
    const onDialogHide = () => {

    }
    const dialogShow = ref(false)
    const planSlide = ref(0)

    let currentFront = ref(0)

    const pointClicked = (params) => {
      console.log(params.dataIndex)
      currentFront.value = params.dataIndex
      dialogShow.value = true
    }

    const pfData = computed(()=>{
      return props.data.pf_data.value
    })

    const pfLabel1 = computed(()=>{
      return props.data.pf_data.label1
    })
    const pfLabel2 = computed(()=>{
      return props.data.pf_data.label2
    })


    const option = ref({
      xAxis: {
        name: pfLabel1,
        min: (value)=>(value.min-1),
        max: (value)=>(value.max+1)
      },
      yAxis: {
        name: pfLabel2,
        min: (value)=>(value.min-1),
        max: (value)=>(value.max+1)
      },
      title: {
        text: "Pareto Front",
        left: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: param=>{
          return `${pfLabel1.value}: ${param.value[0]} <br/>`+
              `${pfLabel2.value}: ${param.value[1]} <br/>`
        },
        textStyle: {
          fontSize: 20
        }
      },
      series: [
        {
          symbolSize: 30,
          itemStyle: {
            color: '#abc7ec',
            borderColor: '#000'
          },
          data: pfData,
          type: 'scatter',
          emphasis: {
            itemStyle: {
              shadowBlur: 50,
              shadowColor: '#f40b79',
              color: '#fcb2d5',
              borderColor: '#333'
            }
          }
        }
      ]
    });

    return { props,currentFront,pointClicked,option,dialogShow,
      onDialogHide,planSlide};
  }
}

</script>

<style scoped>

</style>