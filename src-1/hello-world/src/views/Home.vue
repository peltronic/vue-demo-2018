<template>
    <b-container fluid class="home bv-example-row">
        <b-row>
            <b-col>1 of 3</b-col>
            <b-col>2 of 3</b-col>
            <b-col>3 of 3</b-col>
        </b-row>
        <b-row>
            <b-col>
            <TourList msg="foo"/>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
            <VideoSlider msg="foo"/>
            </b-col>
        </b-row>
    </b-container>
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
