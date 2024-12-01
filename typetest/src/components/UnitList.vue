<template>

<div class ="menu">
<span v-for =' (n, index) in name' :key = "index" class = 'letter'>
    {{ n }}
</span>

</div>


</template>
<script lang="ts"setup>
import type {Unit} from '@/components/interface/interface';

defineProps<Unit>()

</script>