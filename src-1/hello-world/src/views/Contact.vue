<template>
    <b-container fluid id="page-contact" class="contact">

        <b-row>
            <b-col>
                <Contact msg="foo"/>
            </b-col>
        </b-row>

    </b-container>
</template>

<script>
// @ is an alias to /src
//import PageHeader from '@/components/PageHeader.vue'
import Contact from '@/components/contact/Contact.vue'

export default {
  name: 'home',
  components: {
    //PageHeader,
    Contact
  }
}
</script>

<style lang="scss">
#page-contact .template-wrap {
    height: 100vh;
}
#page-contact .tag-background_image {
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
