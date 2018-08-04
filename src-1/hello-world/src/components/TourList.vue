<template>
    <div>
        <h1>Tour List</h1>
    </div>
</template>

<script>
export default {
    name: 'TourList',
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
