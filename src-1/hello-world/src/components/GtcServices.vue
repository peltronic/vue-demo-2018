<template>
<b-container fluid v-if="!isPreviewVisible" id="wrap-gtc_services" class="template-wrap">

    <b-row id="aSection">

        <b-col md="8" class="OFF-col-8">
            <div class="supercrate">
                <b-row>
                    <b-col class="col-6">
                        <h2>
                            <img src="img/gtc-logo-bug.png" alt="" style="width: 71px; height: 30px"> Services
                        </h2>
                        <h3>A Complete Package</h3>
                        <p>We offer clients around-the-clock creative production services from our digital hub in Los Angeles, USA and our European studio in Dublin, Ireland. With over 250 voice talent on our roster fluent in over 115 languages; we are the only "Global" agency representing new and established artists.</p>
                    </b-col>
                    <b-col id="crate-macbook_image" class="col-6">
                        <!--
                        <img id="image-macbook" src="img/d0632-MacBook.png" alt="" style="width: 972px; height: 583px">
                        -->
                        <img id="image-macbook" src="img/d0632-MacBook.png" alt="macbook" height="500">
                        <img id="image-macbook_screen" class="tag-inner" src="http://www.l5-dev-gtc.com/cdn/revsliders/covers/d2a77-es.png" alt="macbook screen" height="500">
                    </b-col>
                </b-row>
            </div>
        </b-col>

        <b-col md="4" class="OFF_col-4">
                <div id="radioBlock" class="">
                    <div class="">
                        <div class="tag-icon">
                            <img src="img/icons8-Microphone-100.png" alt="radio icon" height="100">
                        </div>
                        <div class="tag-service">
                            <h4>Radio</h4></div>
                    </div>
                </div>
                <div id="tvBlock" class="">
                    <div class="">
                        <div class="tag-icon">
                            <img src="img/icons8-Monitor-100.png" alt="monitor icon" height="100">
                        </div>
                        <div class="tag-service">
                            <h4>TV</h4></div>
                    </div>
                </div>
                <div id="expBlock" class="">
                    <div class="">
                        <div class="tag-icon">
                            <img src="img/icons8-Eye-100.png" alt="eye icon" height="100">
                        </div>
                        <div class="tag-service">
                            <h4>Experimental</h4></div>
                    </div>
                </div>
                <div id="digitalBlock" class="">
                    <div class="">
                        <div class="tag-icon">
                            <img src="img/icons8-Resolution-100.png" alt="digital icon" height="100">
                        </div>
                        <div class="tag-service">
                            <h4>Digital</h4></div>
                    </div>
                </div>
        </b-col>

    </b-row>

</b-container>
</template>

<script>
export default {
    name: 'GtcServices',
    props: {
        msg: String
    },
    computed: {
        isPreviewVisible() {
            return this.$store.getters.isPreviewVisible;
        },
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
#wrap-gtc_services {
    margin-top: 70px;
}
#wrap-gtc_services > .row {
    background-color: #12121a;
}
#aSection .supercrate {
    padding: 30px;
}
#aSection > * {
    //border: solid 5px yellow; // debug
}
#crate-macbook_image {
    position: relative;
    overflow: hidden;
}
#crate-macbook_image img {
    //height: 50%;
}
#crate-macbook_image .tag-inner {
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(0.8);
}
</style>
