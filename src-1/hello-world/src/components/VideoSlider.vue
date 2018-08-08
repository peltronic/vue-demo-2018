<template>
  <div id="wrap-video_slider">
                <!--
            <video width="320" height="240" controls>
                <source src="http://www.l5-dev-gtc.com/cdn/video/09542-GTC091953.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video> 
                -->
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

        <b-carousel-slide>
            <div slot="img" class="d-block w-100 crate-video">
                <h1>Slide 1</h1>
                <video class="" controls>
                    <source src="http://gtc.peterg-webdeveloper.com/cdn/video/09542-GTC091953.mp4" type="video/mp4">
                    <!--
                    <source src="movie.mp4" type="video/mp4">
                    <source src="movie.ogg" type="video/ogg">
                    -->
                    Your browser does not support the video tag.
                </video> 
            </div>
        </b-carousel-slide>

        <b-carousel-slide>
            <div slot="img" class="d-block w-100 crate-video">
                <h1>Slide 2</h1>
                <video class="" controls>
                    <source src="http://gtc.peterg-webdeveloper.com/cdn/video/09542-GTC091953.mp4" type="video/mp4">
                    <!--
                    <source src="movie.mp4" type="video/mp4">
                    <source src="movie.ogg" type="video/ogg">
                    -->
                    Your browser does not support the video tag.
                </video> 
            </div>
        </b-carousel-slide>

  
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>

  </div>
</template>

<script>
// https://stackoverflow.com/questions/50317276/fitting-video-in-slider-bootstrap-4-0
// https://mdbootstrap.com/vue/advanced/carousel/
// https://stackoverflow.com/questions/11914716/bootstrap-carousel-other-content-than-image
// https://getbootstrap.com/docs/4.0/components/carousel/
// https://stackoverflow.com/questions/11757537/css-image-size-how-to-fill-not-stretch
export default {
    name: 'VideoSlider',
    props: {
        msg: String
    },
    data () {
        return {
            slide: 0,
            sliding: null
        }
    },
    methods: {
        onSlideStart (slide) {
            this.sliding = true
        },
        onSlideEnd (slide) {
            this.sliding = false
        }
    }
}
</script>

<style scoped lang="scss">
#wrap-video_slider {
    margin-top: 70px;
}
.crate-video {
    /*
    margin-top: 0px;
    margin-bottom: 0px;
    */
    width: 100%;
    height: 675px;
    max-height: 675px;
    display: block;
    position: relative;
    overflow: hidden;
}
video {
    position: absolute;
    top: -50%;
    left: 0;
    width: 100%;
    /*
    overflow: hidden;
    max-height: 675px;
    */
}
</style>
