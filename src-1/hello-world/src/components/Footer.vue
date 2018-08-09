<template>
    <b-container fluid id="wrap-footer" class="">

        <b-row id="footer">
            <b-col>
                <b-row id="crate-social">
                    <b-col>
                        <twitter-icon />
                        <facebook-box-icon />
                        <instagram-icon />
                    </b-col>
                </b-row>
                <b-row id="crate-copyright">
                    <b-col>
                        <p>Copyright &copy; {{ new Date().getFullYear() }} Global Tour Creatives. All Rights Reserved.</p>
                        <p>
                            <a href="#">Privacy</a> / 
                            <a href="#">Terms of Use</a> / 
                            <a href="#">Cookies</a> 
                        </p>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>

    </b-container>
</template>

<script>

import TwitterIcon from "vue-material-design-icons/twitter.vue"
import InstagramIcon from "vue-material-design-icons/instagram.vue"
import FacebookBoxIcon from "vue-material-design-icons/facebook-box.vue"

export default {
    name: 'TourList',
    computed: {
        /*
        isPreviewVisible() {
            return this.$store.getters.isPreviewVisible;
        }
        */
    },
    data() {
        return {
            t: null
        }
    },
    props: {
    },
    components: {
        FacebookBoxIcon,
        InstagramIcon,
        TwitterIcon
    }
}
</script>

<style scoped lang="scss">
#wrap-footer {
    margin-top: 50px;
}
#wrap-footer #crate-social .material-design-icon {
    font-size: 28px;
    margin-right: 20px;
}
#wrap-footer #crate-social .material-design-icon:last-child {
    margin-right: 0;
}
</style>
