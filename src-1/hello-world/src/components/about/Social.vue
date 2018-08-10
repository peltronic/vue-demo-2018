<template>
<b-container fluid id="wrap-about_social" class="debug-border template-wrap">
    <b-row class="h-100 tag-background_image">
        <b-col class="my-auto">
            <div class="supercrate">
                <div id="crate-combined_image">
                    <img id="img-ig_browse" src="/img/99e41-ig-browse.jpg" alt="browse" class="img-fluid">
                    <span id="superbox-smart_phone">
                        <img id="img-smart_phone" src="/img/ce705-White-Smart-Phone.png" alt="white smart phone" class="img-fluid">
                        <div id="box-overlay_screen_image">
                            <!--
                            HERE
                            -->
                            <img src="/img/98815-NH_Screen.jpg" alt="phone screen" class="img-fluid">
                        </div>
                    </span>
                    <img id="img-text_block" src="/img/987d9-text-block.jpg" alt="text block" class="img-fluid">
                </div>
                <p>Instagram | Snapchat | Facebook | Twitter</p>
                <p>Creating the perfect content to build your fanbase and keep people informed.</p>
            </div>
        </b-col>
    </b-row>

</b-container>
</template>

<script>
export default {
    name: 'Social',
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
.template-wrap .my-auto #crate-combined_image span {
    display: inline-block;
    height: 100%;
}
.tag-background_image {
    background-image: url(/img/img_crowd.jpg);
}
.template-wrap .my-auto {
    height: 70%;
}
.template-wrap .my-auto .supercrate {
    height: 100%;
    text-align: center;
}

// Phone image area
.template-wrap .my-auto #crate-combined_image {
    height: 100%;
    margin-bottom: 30px;
}
.template-wrap .my-auto #crate-combined_image img#img-smart_phone {
    height: 100%;
    position: relative;
    transform: scale(1.045); // so it covers the images to each site slightly
}
.template-wrap .my-auto #crate-combined_image img#img-smart_phone {
}
.template-wrap .my-auto #crate-combined_image img#img-ig_browse,
.template-wrap .my-auto #crate-combined_image img#img-text_block {
    height: 80%;
}

.template-wrap .my-auto #crate-combined_image #superbox-smart_phone {
    position: relative;
}
.template-wrap .my-auto #crate-combined_image #superbox-smart_phone #box-overlay_screen_image {
    //border: solid 3px pink;
    position: absolute;
    top: 69px;
    left: 14px;
    width: 92%;
}

</style>
