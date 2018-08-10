<template>
<b-container fluid id="wrap-about_digital" class="debug-border template-wrap">

    <b-row class="h-100 tag-background_image">
        <b-col class="my-auto">
            <div class="supercrate">
                <div id="img-single_image">
                    <img src="/img/4002f-monitor.png" alt="laptop computer" class="img-fluid">
                </div>
                <p>Digital Video Production</p>
                <p>Tell your story through high resolution video and dynamic visual effects.</p>
            </div>
        </b-col>
    </b-row>

</b-container>
</template>

<script>
export default {
    name: 'Digital',
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
//assets/6eed5-GTC091953.png
.tag-background_image {
    background-image: url(/img/img_red02.jpg);
}
.template-wrap .my-auto {
    height: 70%;
}
.template-wrap .my-auto .supercrate {
    height: 100%;
    text-align: center;
}
.template-wrap #img-single_image {
    height: 100%;
    margin-bottom: 30px;
}
.template-wrap #img-single_image img {
    height: 100%;
}
</style>
