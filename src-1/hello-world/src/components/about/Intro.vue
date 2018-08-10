<template>
<b-container fluid id="wrap-about_intro" class="debug-border template-wrap">

    <b-row class="h-100 tag-background_image">
        <b-col class="my-auto">
            <div id="page-heading" class="supercrate">
                    <h2>
                        <img src="img/logo.png" alt="GTC Logo" height="30">
                    </h2>
            </div>
            <div class="supercrate">
                <h1>Digital<br />Marketing</h1>
                <h2>Unlike anything you could imagine</h2>
            </div>
        </b-col>
    </b-row>

</b-container>
</template>

<script>
export default {
    name: 'Intro',
    props: {
        msg: String
    },
    computed: {
    },
    data () {
        return {
            foo: 0
        }
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
.tag-background_image {
    background-image: url(/img/img_mountains01.jpg);
}
.template-wrap .supercrate {
    text-align: center;
}
h1 {
    text-transform: uppercase;
    font-size: 80px;
    margin-bottom: 30px;
}
h2 {
    text-transform: uppercase;
    font-size: 35px;
}
</style>
