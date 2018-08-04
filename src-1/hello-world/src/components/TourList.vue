<template>
    <div>
        <h1>Tour List</h1>
        <ul v-for="tour in tours" :key="tour.id" class="tour-list--item">
            <li>
                <img v-bind:src="tour.thumbnail"/>
                {{ tour.title }}
            </li>
        </ul>
    </div>
</template>

<script>
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
    created() {
        this.$store.dispatch('getTours');
    },
    props: {
        msg: String
    }
}
</script>

<style scoped lang="scss">
</style>
