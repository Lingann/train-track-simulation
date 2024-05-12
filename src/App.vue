<template>
  <div class="train-track-simulation">
    <div ref="containerRef" class="three-container" />
  </div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue'
import { TrainTrackSimulation } from '@/three/TrainTrackSimulation'

const containerRef: Ref<HTMLElement | null> = ref(null)

onMounted(() => {
  const trainTrackSimulation = new TrainTrackSimulation(containerRef.value!)

  trainTrackSimulation.init()
  trainTrackSimulation.animate()
})
</script>

<style lang="scss" scoped>
.train-track-simulation {
  width: 100%;
  height: 100%;
}
</style>
