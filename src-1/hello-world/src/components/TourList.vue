<template>
    <b-container fluid class="home bv-example-row">
        <b-row>
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
        //this.$gridfx.test();
        this.$store.dispatch('getTours');
        this.t = new this.$gridfx;
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
