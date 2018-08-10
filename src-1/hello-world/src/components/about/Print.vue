<template>
<b-container fluid id="wrap-about_print" class="debug-border template-wrap">

    <b-row class="h-100 tag-background_image">
        <b-col class="my-auto">
            <div class="supercrate">
                <div id="img-magazine">
                    <img src="/img/9edf4-shania.jpg" alt="magazine cover" class="img-fluid">
                </div>
                <p>Posters | Billboards | Digital Advertising</p>
                <p>Connect with your fans outdoors and on the go.</br>
                Take control of your messaging.</p>
            </div>
        </b-col>
    </b-row>

</b-container>
</template>

<script>
export default {
    name: 'Print',
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
    background-image: url(/img/img_red01.jpg);
}
.template-wrap .my-auto {
    height: 70%;
}
.template-wrap .my-auto .supercrate {
    height: 100%;
    text-align: center;
}
.template-wrap #img-magazine {
    height: 100%;
    margin-bottom: 30px;
}
.template-wrap #img-magazine img {
    height: 100%;
}
</style>
