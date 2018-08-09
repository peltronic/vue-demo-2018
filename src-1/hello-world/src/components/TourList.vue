<template>
    <b-container fluid class="bv-example-row">

        <b-row id="artistSection" class="grid">
            <b-col v-for="tour in tours" v-if="!showPreview" :key="tour.id" :id="'panel-'+tour.id" :data-tour_guid=tour.guid class="col-4 grid__item tour-list--item">
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
        </b-row>

        <b-row v-if="showPreview" id="previewSection" class="preview justify-content-sm-center">
            <b-col class="col-12">
                <TourPreview :title="preview.title" :artist="preview.artist" :imageUrl="preview.imageUrl" :mp3Url="preview.mp3Url" @close-preview="closePreview" />
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
            preview: {
                title: "tbd",
                artist: "tbd",
                mp3Url: null,
                imageUrl: null
            },
            showPreview: false,
            toursToDisplay: 6,
            t: null
        }
    },
    methods: {
        closePreview(e) {
            this.showPreview = false;
        },
        renderPreview(e, guid) {
            e.preventDefault();
            console.log('clicked: '+guid);
            let selected = this.tours.find( (t) => t.guid===guid );
            this.preview.title = selected.title;
            this.preview.imageUrl = selected.thumbnail;
            this.preview.mp3Url = selected.mp3;
            this.preview.artist = selected.artist;
            this.showPreview = true;
        }
    },
    created() {
        this.$store.dispatch('getTours',this.toursToDisplay);
    },
    mounted() {
        //var tmp = this.$el;
        //this.t._test();
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
#previewSection {
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
</style>
