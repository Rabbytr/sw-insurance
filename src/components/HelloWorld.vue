<template style="background-color: #f6f6fc">
  <div class="q-ma-md">
<!--    <q-btn color="white" text-color="black" label="启动" @click="submit" />-->
    <q-btn outline  style="color: #FF0080" label="Let's Go" @click="submit"/>
  </div>
  <div class="row" >
    <div class="col-3 q-pa-md">
      <person-define :person-list="personList"></person-define>
    </div>
    <q-separator vertical />
    <div class="col">
      <q-tabs
          v-model="systemTab"
          align="justify"
          narrow-indicator
          class="q-mb-lg"
      >
        <q-tab class="text-light-blue-4" name="one" label="One" />
        <q-tab class="text-pink-3" name="multi" label="Multi" />
      </q-tabs>
      <q-tab-panels
          v-model="systemTab"
          animated
          transition-prev="scale"
          transition-next="scale"
      >
        <q-tab-panel name="one" v-if="singlePlanData!=null">
          <personal-plan :data="singlePlanData"></personal-plan>
        </q-tab-panel>

        <q-tab-panel name="multi">
          <pareto-front :data="pfData" v-if="pfData!=null"></pareto-front>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>

  <fuck-loading ref="refLoading"></fuck-loading>
</template>

<script>

import {ref, defineComponent, onMounted} from "vue";
import PersonDefine from "./PersonDefine";
import FuckLoading from "./FuckLoading";
import ParetoFront from "./ParetoFront";
import PersonalPlan from "./PersonalPlan";
import axios from "axios";
import {useQuasar} from "quasar";


let planData = [
  {
    name: '文杰证券',
    children: [
      {
        name: '期货1',
        value: 3
      },
      {
        name: '期货2',
        value: 1
      }
    ]
  },
  {
    name: '邱少集团',
    children: [
      {
        name: '产品1',
        value: 3
      },
      {
        name: '产品2',
        value: 1
      },
      {
        name: '产品3',
        value: 2
      },
      {
        name: '产品4',
        value: 6
      },
      {
        name: '产品5',
        value: 4
      }
    ]
  },
  {
    name: '马公子汽车',
    children: [
      {
        name: '保险1',
        value: 3
      },
      {
        name: '保险2',
        value: 2
      }
    ]
  },
  {
    name: '明灿银行',
    children: [
      {
        name: '产品1',
        value: 3
      },
      {
        name: '产品2',
        value: 2
      },
      {
        name: '产品4',
        value: 3
      },
      {
        name: '产品5',
        value: 2
      }
    ]
  },
  {
    name: '施-文学院',
    children: [
      {
        name: '课题1',
        value: 5
      },
      {
        name: '课题2',
        value: 7
      },
      {
        name: '课题3',
        value: 3.6
      },
    ]
  },
];

const lineData = {
  data: [
    {
      name: 'Line1',
      values: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Line2',
      values: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Line3',
      values: [150, 232, 201, 154, 190, 330, 410]
    }
  ]
}

const PFJson = {
  label1: "风险",
  label2: '收益',
  value: [
    [10.0, 8.04],
    [8.07, 6.95],
  ]
}
const resData = {
  username: "施小雯",
  age: 23,
  invest: true,
  medical_plan: {
    name: "a",
    value: 100,
  },
  plan_data: planData,
  line_data: lineData,
}
const pfResData = {
  pf_data:PFJson,
  multi_plans: [
    [
      {
        username: "马公子",
        age: 23,
        invest: true,
        medical_plan: {
          name: "a",
          value: 100,
        },
        plan_data: planData,
        line_data: lineData,
      },
      {
        username: "邱少",
        age: 23,
        invest: true,
        medical_plan: {
          name: "a",
          value: 100,
        },
        plan_data: planData,
        line_data: lineData,
      }
    ],
    [
      {
        username: "马公子",
        age: 23,
        invest: true,
        medical_plan: {
          name: "a",
          value: 100,
        },
        plan_data: planData,
        line_data: lineData,
      },
      {
        username: "邱少",
        age: 23,
        invest: true,
        medical_plan: {
          name: "a",
          value: 100,
        },
        plan_data: planData,
        line_data: lineData,
      }
    ]
  ]
}



export default defineComponent({
  name: "HelloWorld",
  components: {
    PersonalPlan,
    FuckLoading,
    ParetoFront,
    PersonDefine,
  },

  setup () {
    const $q = useQuasar()
    const refLoading = ref()
    const systemTab = ref('one')

    onMounted(()=>{

    })

    const singlePlanData = ref(null)
    const pfData = ref(null)
    const personList = ref([])

    const submit = () => {
      if (personList.value.length===0){
        $q.dialog({
          title: 'FBI warning',
          message: '至少添加一个客户'
        })
        return
      }
      if (systemTab.value === 'one'){
        refLoading.value.loadingBegin()
        axios.get('http://localhost:8000/one',{
          params: personList.value[0],
          timeout: 10000,
        }).then(res=>{
              console.log(res.data)
              singlePlanData.value = res.data
              refLoading.value.loadingEnd()
            }).catch(err=>{
              singlePlanData.value = resData
              refLoading.value.loadingEnd()
              $q.dialog({
                title: "恭喜！连接算法模块失败！",
                message: "为了好看，生成一个样例"+err
              })

        })
      }else{
        const totalMoney = Array.from(personList.value,x=>x.money).reduce((a,b)=>{
          return parseInt(a)+parseInt(b)
        })
        $q.dialog({
          title: '即将启动保险风险管理子系统',
          message: `[￥ ${totalMoney}] 请输入投资年限`,
          prompt: {
            type: 'number' // optional
          },
          cancel: true,
          persistent: true
        }).onOk(data => {
          refLoading.value.loadingBegin()
          axios.post('http://localhost:8000/multi',{
            person_list: personList.value,
            years: data
          },{
            headers:{
              'Content-Type': 'application/json'
            },
            timeout: 20000,
          }).then(res=>{
            console.log(res.data)
            pfData.value = res.data
            refLoading.value.loadingEnd()
          }).catch(err=>{
            pfData.value = pfResData
            refLoading.value.loadingEnd()
            $q.dialog({
              title: "恭喜！连接算法模块失败！",
              message: "为了好看，生成一个样例"+err
            })
          })
        })
      }
    }

    return {singlePlanData,pfData,personList,submit,refLoading,systemTab};
  }
});

</script>

<style scoped>

</style>