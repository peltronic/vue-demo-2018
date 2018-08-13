<template>
    <b-container fluid id="page-test" class="test">

        <b-row>
            <b-col>
                <Foo msg="foo"/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
// @ is an alias to /src
//import PageHeader from '@/components/PageHeader.vue'
import Foo from '@/components/test/Foo.vue'

export default {
  name: 'home',
  components: {
    //PageHeader,
    Foo
  }
}
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>

</style>
