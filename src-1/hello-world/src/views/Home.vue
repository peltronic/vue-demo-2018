<template>
  <div class="home">
    <img src="../assets/logo.png">
    <PageHeader msg="foo"/>
    <TourList msg="foo"/>
    <VideoSlider msg="foo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue'
import TourList from '@/components/TourList.vue'
import VideoSlider from '@/components/VideoSlider.vue'

export default {
  name: 'home',
  components: {
    PageHeader,
    TourList,
    VideoSlider
  }
}
</script>
