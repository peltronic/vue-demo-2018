<template>
    <b-container fluid id="wrap-home_tourlist" class="debug-border template-wrap">

        <b-row class="OFF-h-100">
            <b-col class="OFF-h-100">

                <transition-group id="artistSection" class="grid row" name="t_artist_grid" tag="div">
                    <b-col md="4" v-for="tour in tours" v-if="!isPreviewVisible" :key="tour.id" :id="'panel-'+tour.id" :data-tour_guid=tour.guid class="OFF-col-xs-12 OFF-col-md-4 grid__item tour-list--item">
                        <div class="crate">
                            <div class="background-image" :style="`background-image: url(${tour.thumbnail})`"></div>
                            <a v-on:click="renderPreview($event, tour.guid)" :href="tour.thumbnail" class="img-wrap">
                                <img class="" v-bind:src="tour.thumbnail">
                            </a>
                            <div class="item-title">
                                <h6 class="item-sub">{{tour.title}}</h6>
                                <h3 class="item-heading">{{tour.artist}}</h3>
                                <b-button variant="danger" class="tag-clickme_to_view_work"><plus-icon /><span>View Work</span></b-button>
                            </div>
                        </div>
                    </b-col>
                </transition-group>
        
                <transition name="t_preview">
                    <b-row v-if="isPreviewVisible" key="k_preview" id="previewSection" class="preview justify-content-sm-center">
                        <b-col class="col-12">
                            <button v-on:click="closePreview" class="tag-clickme_to_close_preview"><close-icon /><span class="text-hidden">Close</span></button>
                            <TourPreview :title="preview.title" :artist="preview.artist" :imageUrl="preview.imageUrl" :mp3Url="preview.mp3Url" />
                        </b-col>
                    </b-row>
                </transition>

            </b-col>
        </b-row>

    </b-container>
</template>

<script>

import TourPreview from '@/components/TourPreview.vue'
import CloseIcon from "vue-material-design-icons/close.vue"
import PlusIcon from "vue-material-design-icons/plus.vue"

//import gridfx from '../gridfx'
//Object.defineProperty(Vue.prototype, '$gridfx', { value: gridfx });

// https://forum.vuejs.org/t/data-set-in-created-is-not-available-in-mounted/5555

// https://vuejs.org/v2/guide/transitions.html#Transitioning-Between-Elements

// => https://css-tricks.com/intro-to-vue-5-animations/

// => https://vuejs.org/v2/guide/transitions.html#CSS-Transitions

// https://alligator.io/vuejs/understanding-transitions/

// Thumbnails / grid :
// ~ https://getbootstrap.com/docs/3.3/components/#thumbnails
// ~ also see: 
//   o https://masonry.desandro.com/
//   o => https://isotope.metafizzy.co/
//      - https://www.npmjs.com/package/vueisotope
//   o https://salvattore.js.org/

// Use velocity.js instead??
//   ~ => http://velocityjs.org/#fade
//   ~ http://velocityjs.org/#bugs
//   ~ https://gist.github.com/edwardlorilla/f112d36af71094280ae88032756ac61f
//   ~ https://medium.com/vue-mastery/how-to-create-vue-js-transitions-6487dffd0baa
//   ~ https://codepen.io/macsupport/pen/xbWGZo
//   ~ https://www.smashingmagazine.com/2014/09/animating-without-jquery/
//   ~ 
export default {
    name: 'TourList',
    computed: {
        tours() {
            return this.$store.getters.tours;
        }
        /*
        ...mapGetters([
            'tours' // map this.tours to this.$store.getters.tours
        ])
        */
    },
    data() {
        return {
            isPreviewVisible : false,
            //isGridVisible : true,
            preview: {
                title: "tbd",
                artist: "tbd",
                mp3Url: null,
                imageUrl: null
            },
            toursToDisplay: 6,
            t: null
        }
    },
    methods: {
        renderPreview(e, guid) { // aka openPreview
            e.preventDefault();
            console.log('clicked: '+guid);
            let selected = this.tours.find( (t) => t.guid===guid );
            this.preview.title = selected.title;
            this.preview.imageUrl = selected.thumbnail;
            this.preview.mp3Url = selected.mp3;
            this.preview.artist = selected.artist;
            this.isPreviewVisible = true;
        },
        closePreview(e) {
            e.preventDefault();
            this.isPreviewVisible = false;
        },
    },
    created() {
        this.$store.dispatch('getTours',this.toursToDisplay);
    },
    props: {
        msg: String
    },
    components: {
        TourPreview,
        CloseIcon,
        PlusIcon
    }
}
</script>

<style scoped lang="scss">
html, body {
    height: 100% !important;
}
#wrap-home_tourlist > div.row > div.col {
    position: relative;
    min-height: 100vh;
}
#previewSection {
    // see: https://stackoverflow.com/questions/28144233/bootstrap-container-with-positionabsolute-loses-layout-inside
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
#artistSection {
    position: absolute;
    top: 0;
    left: 0;
}
ul {
    list-style: none;
}
img {
    width: 100%;
}

.container-fluid {
    z-index: 100 !important;
}
#artistSection {
    z-index: 3 !important;
}

.tour-list--item .crate {
    position: relative;
    overflow: hidden;
}

.tour-list--item .img-wrap,
.tour-list--item .item-title {
    z-index: 2;
    position: relative;
}

.item-title {
    padding: 20px;
    background: rgba(50, 50, 50, .7);
    margin-top: -2px;
    min-height: 130px;
}
.item-title .item-sub,
.item-title .item-heading {
    text-transform: uppercase;
}
.item-title .item-sub {
    color: red;
}


.background-image {
    filter: blur(15px);
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: center;
    transform: scale(1.3);
    /*
    //z-index: 1;
    background-size: 200%;
    */
}
button.tag-clickme_to_view_work .material-design-icon.plus-icon {
    display: none;
}

#previewSection > div.col {
    position: relative;
}
button.tag-clickme_to_close_preview {
    position: absolute;
    z-index: 150;
    top: 0;
    right: 1em;
    border: none;
    background: none;
    color: #fff;
    padding: 0;
    margin: 0;
    font-size: 1.5em;
}
button.tag-clickme_to_close_preview .material-design-icon {
    font-size: 60px;
    cursor: pointer;
}

// === Transitions ===

// Grid
.t_artist_grid-enter-active {
  transition: all 0.7s;
}
.t_artist_grid-leave-active {
  transition: all 0.7s;
}
.t_artist_grid-enter, 
.t_artist_grid-leave-to {
  opacity: 0;
  transform: scale(0.5);
  //transform: translateY(30px);
}

// Preview
//   %NOTE %FIXME 20180813 -- this transition is not working b/c, I believe, it is triggered in the Preview component
//    ...not sure why the computed property doesn't catch it however...
//    solution is to move it to absolute position so it overlaps??
//    it's there, jsut hidden by the grid content becoming visible (??)
// Ideally we are able to somehow hook to other elements (timing and synchronization), if not may just have to combine the 2 and make the preview
//   position absolute
// ==
/*
        isPreviewVisible() {
            return this.$store.getters.isPreviewVisible;
        },
isPreviewVisible should not be a getter, polluted state in Vuex state
    ~ probably should revert back to just using a custom event 
    ~ also, can put X in parent instead of preview child, that solves alot of problems (no event needed?)
isPreviewVisible() {
    // something like this (psuedo-code)
    if (transition from not visible to visible) {
        hide grid first, then using promise or equiv show preview
    } else if (transition from visible to not visible) {
        hide preview first, then using promise or equiv show grid
    }
},

*/
.t_preview-enter-active {
  transition: all 0.8s;
}
.t_preview-leave-active {
  transition: all 0.8s;
}
.t_preview-enter, 
.t_preview-leave-to {
  opacity: 0;
  transform: scale(0.5);
  //transform: translateY(300px);
}

</style>
