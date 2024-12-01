<template>
<div class="main">
<unit-list
:id="units_data.id"
:name=units_data.name
:type = units_data.type
:children=units_data.children
/>


</div>


</template>

<script lang="ts" setup>
import UnitList from './components/UnitList.vue';
import { ref } from 'vue';
import {HTTP} from './axios/common'
import type {AxiosResponse, Units} from './components/interface/interface'


try{
  const  units_data = await HTTP.get<Units[]>('unit/get_units_tree/').then((response:AxiosResponse)=>{
 return response.data;

});
console.log(units_data);}

catch(error){
  console.log(error)
}
const units = ref()
</script>


