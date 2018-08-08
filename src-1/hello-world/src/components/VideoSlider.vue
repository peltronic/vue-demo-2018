<template>
  <carousel :interval="8000" showControls showIndicators full>
    <carousel-item video src="https://mdbootstrap.com/img/video/Tropical.mp4" alt="First slide" >
    </carousel-item>
    <carousel-item video src="https://mdbootstrap.com/img/video/forest.mp4" alt="Second slide" >
    </carousel-item>
    <carousel-item video src="https://mdbootstrap.com/img/video/Agua-natural.mp4" alt="Third slide" >
    </carousel-item>
  </carousel>
</template>

<script>
// https://mdbootstrap.com/vue/
import { Carousel, CarouselItem } from 'mdbvue';


export default {
  name: 'VideoSlider',
  components: {
    Carousel,
    CarouselItem
  }
};
</script>

<style scoped>
</style>
