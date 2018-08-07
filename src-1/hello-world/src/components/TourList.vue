<template>
    <b-container fluid class="bv-example-row">

        <b-row id="artistSection" class="grid">
            <b-col v-for="tour in tours" :key="tour.id" :id="'panel-'+tour.id" class="grid__item tour-list--item">
                <div rel="canonical" class="background-image" :style="`background-image: url(${tour.thumbnail})`"></div>
                <a :href="tour.thumbnail" class="img-wrap">
                    <img rel="canonical" class="fill portrait" v-bind:src="tour.thumbnail">
                    <div class="description description--grid">
                    </div>
                </a>
                <a :href="tour.thumbnail">
                    <div class="item-title">
                        <h6 class="item-sub">{{tour.title}}</h6>
                        <h3 class="item-heading">{{tour.description}}</h3>
                        <div class="button"><i class="material-icons">add</i><span>View Project</span></div>
                    </div>
                </a>
            </b-col>
        </b-row>

        <b-row class="preview">
            <b-col>
                <button class="action action--close"><i class="material-icons">close</i><span class="text-hidden">Close</span></button>
                <div class="description description--preview"></div>
            </b-col>
        </b-row>

    </b-container>
</template>

<script>
//import gridfx from '../gridfx'
//Object.defineProperty(Vue.prototype, '$gridfx', { value: gridfx });

// https://forum.vuejs.org/t/data-set-in-created-is-not-available-in-mounted/5555

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
            toursToDisplay: 3,
            t: null,
        }
    },
    created() {
        this.$store.dispatch('getTours',this.toursToDisplay);
    },
    mounted() {
        var tmp = this.$el;
        this.t = new this.$gridfx(document.querySelector('.grid'), {
                        imgPosition: {
                            x: -0.5,
                            y: 1
                        },
                        onOpenItem: function(instance, item) {
                            instance.items.forEach(function(el) {
                                if (item != el) {
                                    var delay = Math.floor(Math.random() * 50);
                                    el.style.WebkitTransition = 'opacity .8s ' + delay + 'ms cubic-bezier(.7,0,.3,1), -webkit-transform .8s ' + delay + 'ms cubic-bezier(.7,0,.3,1)';
                                    el.style.transition = 'opacity .8s ' + delay + 'ms cubic-bezier(.7,0,.3,1), transform .8s ' + delay + 'ms cubic-bezier(.7,0,.3,1)';
                                    el.style.WebkitTransform = 'scale3d(0.1,0.1,1)';
                                    el.style.transform = 'scale3d(0.1,0.1,1)';
                                    el.style.opacity = 0;
                                }
                            });
                        },
                        onCloseItem: function(instance, item) {
                            instance.items.forEach(function(el) {
                                if (item != el) {
                                    el.style.WebkitTransition = 'opacity .8s, -webkit-transform .8s';
                                    el.style.transition = 'opacity .8s, transform .8s';
                                    el.style.WebkitTransform = 'scale3d(1,1,1)';
                                    el.style.transform = 'scale3d(1,1,1)';
                                    el.style.opacity = 1;
                
                                    onEndTransition(el, function() {
                                        el.style.transition = 'none';
                                        el.style.WebkitTransform = 'none';
                                    });
                                }
                            });
                        }
                    });
        this.t._test();
    },
    props: {
        msg: String
    }
}
</script>

<style scoped lang="scss">
ul {
    list-style: none;
}
img {
    width: 100%;
}
</style>
