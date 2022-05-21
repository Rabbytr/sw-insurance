<template>
  <q-scroll-area
      style="height: 70vh;"
  >
  <q-list>
    <q-item v-for="(person,index) in props.personList"
            :key="person"
            clickable
            @click="itemClicked(index)"
            v-ripple>
      <q-item-section avatar>
          <q-avatar color="light-blue-4"
                    text-color="white">
            {{ person.name[0] }}</q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label style="color: #f6f6fc">{{ person.name }}</q-item-label>
        <q-item-label caption style="color: #f6f6fc">{{ person.age }}</q-item-label>
      </q-item-section>

      <q-item-section side bottom>
        <q-badge color="pink-3" :label="moneyTrans(person.money)" />
      </q-item-section>

    </q-item>
    <q-page-sticky position="bottom-left" :offset="[18, 18]">
      <q-btn fab icon="add" style="background: #fcb2d5;color: #f6f6fc" @click="addPerson" />
    </q-page-sticky>

  </q-list>
  </q-scroll-area>

  <q-dialog v-model="person.prompt">
    <q-card style="min-width: 350px" class="q-pa-md">
      <q-card-section>
        <div class="text-h6">客户信息</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input dense v-model="person.editPerson.name" label="Name"/>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input dense v-model="person.editPerson.age"
                 label="Age" type="number"
                 lazy-rules
                 :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input dense v-model="person.editPerson.money" autofocus
                 label="Money" type="number" />
      </q-card-section>

    </q-card>
  </q-dialog>

</template>

<script>
import {reactive, toRefs} from "vue";

export default {
  name: "PersonDefine",
  props: {
    personList: Object
  },
  setup(props){
    const person = reactive({
      prompt: false,
      editPerson: null
    })

    return {person,...toRefs(personFunModule(person,props)),props}
  }
}

function newPerson() {
  return {
    name: randomName(),
    age: randomAge(),
    money: 750000
  }
}

function personFunModule(person,props){
  return reactive({
    itemClicked: function(index){
      person.editPerson = props.personList[index]
      person.prompt = true
    },
    addPerson: ()=>{
      const p = newPerson()
      props.personList.push(p)
      person.editPerson = p
      person.prompt = true
    },
    moneyTrans: (money)=>{
      if(money>1e8){
        return Math.round(money/1e8)+'b'
      }else if(money>1e6) {
        return Math.round(money/1e6)+'m'
      }else if(money>1e4){
        return Math.round(money/1e4)+'w'
      } else if (money>1e3){
        return Math.round(money/1e3)+'k'
      }
      return money
    }
  })
}

const firstName = ['李','邱','耿','马','欧','施']
const names = ['玲玉','文锦','明灿','鑫鑫','文杰','雯雯']

function randomName() {
  const l1 = firstName.length
  const l2 = names.length
  return firstName[Math.floor(Math.random()*l1)]+
      names[Math.floor(Math.random()*l2)]
}
function randomAge() {
  return Math.floor(10+Math.random()*12)
}

</script>

<style scoped>

</style>