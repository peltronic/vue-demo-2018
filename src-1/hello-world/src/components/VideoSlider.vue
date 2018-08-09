<template>
<div id="wrap-video_slider">

    <b-row id="playerSection">
        <b-col>

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
        </b-col>
    </b-row>

    <b-row id="playlistSection">
        <b-col v-for="vid in videos" :key="vid.id" :id="'thumbnail-'+vid.id" class="superbox-thumbnail">
            <a v-on:click="queueVideo($event, vid.id)" :href="vid.url" class="">
                <img class="" v-bind:src="vid.thumb">
            </a>
        </b-col>
    </b-row>

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
    computed: {
        videos() {
            return this.$store.getters.videos;
        }
        /*
        ...mapGetters([
            'videos' // map this.videos to this.$store.getters.videos
        ])
        */
    },
    data () {
        return {
            slide: 0,
            videosToDisplay: 5,
            sliding: null
        }
    },
    methods: {
        queueVideo (e, guid) {
        },
        onSlideStart (slide) {
            this.sliding = true
        },
        onSlideEnd (slide) {
            this.sliding = false
        }
    },
    created() {
        this.$store.dispatch('getVideos',this.videosToDisplay);
    },
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
