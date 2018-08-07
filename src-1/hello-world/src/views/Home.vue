<template>
    <b-container fluid class="home bv-example-row">
        <b-row>
            <b-col>
                <TourList msg="foo"/>
            </b-col>
        </b-row>
        <!--
        <b-row>
            <b-col>
            <VideoSlider msg="foo"/>
            </b-col>
        </b-row>
        -->
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

<style lang="scss">
html, body {
    //height: 100%;
    background: #000;
    color: #fff;
    font-family: Lato,sans-serif;
}
</style>

<style lang="scss" scoped>
#app {
  /*
  height: inherit;
  background: #6e6e6e;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
  */
}
</style>
