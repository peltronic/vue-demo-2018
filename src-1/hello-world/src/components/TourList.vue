<template>
    <b-container fluid class="bv-example-row">
        <b-row id="artistSection" class="grid">
            <b-col>
                <h1>Tour List</h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col v-for="tour in tours" :key="tour.id" class="tour-list--item">
                <img v-bind:src="tour.thumbnail"/>
                {{ tour.title }}
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
//import gridfx from '../gridfx'
//Object.defineProperty(Vue.prototype, '$gridfx', { value: gridfx });

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
            t: null,
        }
    },
    created() {
        this.$store.dispatch('getTours');
    },
    mounted() {
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
