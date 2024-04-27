<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { TrainTrackSimulation } from '@/three-core/TrainTrackSimulation'

const containerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const trainTrackSimulation = new TrainTrackSimulation(containerRef.value!)

  trainTrackSimulation.init()
  trainTrackSimulation.animate()
})
</script>

<template>
  <div class="train-track-simulation">
    <div ref="containerRef" class="three-container" />
  </div>
</template>

<style lang="scss" scoped>
.train-track-simulation {
  width: 100%;
  height: 100%;
}
</style>
