<template>
  <q-dialog
      v-model="loading"
      persistent
  >
    <q-card style="width: 60vw">
      <q-card-section>
        <div class="text-h6">计算中</div>
      </q-card-section>

      <q-separator />

      <q-card-section style="max-height: 50vh" class="scroll">
        <q-timeline color="secondary">
          <q-timeline-entry heading v-for="(item,index) in stepEvents" :key="index">
            {{ item }}
          </q-timeline-entry>
        </q-timeline>
      </q-card-section>

      <q-separator />

      <q-inner-loading
          :showing="true"
          label="正在初始化种群..."
          label-class="text-teal"
          label-style="font-size: 1.1em"
      />
    </q-card>
  </q-dialog>
</template>

<script>
import {ref} from "vue";

export default {
  name: "FuckLoading",
  setup(){
    const loading = ref(false)
    // const constStepEvents = [
    //     'a','b','c'
    // ]
    const stepEvents = ref([])

    const loadingBegin = ()=>{
      stepEvents.value = []
      loading.value = true
      // for(const i of constStepEvents){
      //   stepEvents.value.push(i)
      // }
    }

    const loadingEnd = ()=>{
      loading.value = false
    }

    return {loading,stepEvents,loadingBegin,loadingEnd}
  }
}


</script>

<style scoped>

</style>