<template>
<b-container fluid id="wrap-about_digital" class="debug-border template-wrap">

    <b-row class="h-100 justify-content-center tag-background_image">
        <b-col md="7" class="my-auto">

            <b-row id="page-heading" class="supercrate">
                <b-col>
                    <h2>
                        <img src="img/gtc-logo-bug.png" alt="GTC Logo" height="30"> Services
                    </h2>
                </b-col>
            </b-row>

            <b-row class="supercrate">
                <b-col>
                    <h3>What we provide</h3>
                </b-col>
            </b-row>
            <b-row id="img-services" class="supercrate">
                <b-col>
                    <img src="/img/icons8-Microphone-100.png" alt="microphone">
                    <h6>Radio</h6>
                </b-col>
                <b-col>
                    <img src="/img/icons8-Monitor-100.png" alt="monitor">
                    <h6>TV</h6>
                </b-col>
                <b-col>
                    <img src="/img/icons8-Eye-100.png" alt="eye">
                    <h6>Experimental</h6>
                </b-col>
                <b-col>
                    <img src="/img/icons8-Resolution-100.png" alt="resolution-100">
                    <h6>Digital</h6>
                </b-col>
            </b-row>
            <b-row id="services-details" class="supercrate">
                <b-col>
                    <p>Global Tour Creatives is widely regarded as the best entertainment marketing production agency in the world. GTC leads in creative, customer service and responsiveness. We offer clients around-the-clock creative production services from our digital hub in Los Angeles, USA and our European studio in Dublin, Ireland. With over 250 voice talent on our roster fluent in over 115 languages; we are the only "Global" agency representing new and established artists.</p>
                </b-col>
            </b-row>

        </b-col>
    </b-row>

</b-container>
</template>

<script>
export default {
    name: 'Services',
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
.template-wrap .my-auto .supercrate {
    text-align: center;
}
.supercrate h2 {
    text-transform: uppercase;
}
.supercrate h3 {
    text-transform: uppercase;
    font-size: 45px;
}
#page-heading {
    margin-bottom: 50px;
}
#img-services {
    margin-top: 50px;
    margin-bottom: 50px;
}
#img-services .col {
    border-right: solid 1px rgba(255, 255, 255, 0.5);
}
#img-services .col:last-child {
    border-right: none;
}
</style>
