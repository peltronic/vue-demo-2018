<template>
    <b-container fluid id="page-about" class="about">

        <b-row>
            <b-col>
                <Intro msg="foo"/>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <Print msg="foo"/>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <Social msg="foo"/>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <Digital msg="foo"/>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <Services msg="foo"/>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <Footer msg="foo"/>
            </b-col>
        </b-row>

    </b-container>
</template>

<script>
// @ is an alias to /src
//import PageHeader from '@/components/PageHeader.vue'
import Intro from '@/components/about/Intro.vue'
import Print from '@/components/about/Print.vue'
import Social from '@/components/about/Social.vue'
import Digital from '@/components/about/Digital.vue'
import Services from '@/components/about/Services.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    //PageHeader,
    Intro,
    Print,
    Social,
    Digital,
    Services,
    Footer
  }
}
</script>

<style lang="scss">
#page-about .template-wrap {
    height: 100vh;
}
#page-about .tag-background_image {
    //background-size: 100%; // cover
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
</style>

<style lang="scss" scoped>
#app {
  /*
  height: inherit;
  background: #6e6e6e;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
  */
}

</style>
