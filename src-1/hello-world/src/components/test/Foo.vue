<template>
<b-container fluid id="wrap-test_foo" class="debug-border template-wrap">

    <div id="list-demo">
        <button v-on:click="add">Add</button>
        <button v-on:click="remove">Remove</button>
        <transition-group name="list" tag="div" class="OFF-row">
            <span v-for="item in items" v-bind:key="item" class="list-item">
            {{ item }}
            </span>
        </transition-group>
    </div>

        <button v-on:click="isVisible=!isVisible">Toggle</button>
<transition name="t_preview">
        <b-row v-if="fIsVisible" key="k_preview" id="previewSection" class="preview justify-content-sm-center">
            <b-col class="col-12">
                <h1>My preview stuff</h1>
            </b-col>
        </b-row>
</transition>

<!--
    <b-row class="">
        <b-col class="">
            Hey there
        </b-col>
    </b-row>
-->

</b-container>
</template>

<script>
export default {
    name: 'Foo',
    props: {
        msg: String
    },
    computed: {
        isPreviewVisible() {
            return this.$store.getters.isPreviewVisible;
        },
        fIsVisible() {
            return this.isVisible;
        }
    },
    data () {
        return {
            isVisible: true,
            items: [1,2,3,4,5,6,7,8,9],
            nextNum: 10,
            bar: 0
        }
    },
    methods: {
        togglePreview(e) {
            e.preventDefault();
            if (this.isVisible) {
                isVisible = false;
            } else {
                this.$store.dispatch('showPreview');
                isVisible = true;
            }
        },
        randomIndex: function () {
            return Math.floor(Math.random() * this.items.length)
        },
        add: function () {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove: function () {
            this.items.splice(this.randomIndex(), 1)
        },
    }
}
</script>

<style scoped lang="scss">
* {
    color: blue;
}
span {
    color: #fff;
}
.list-item {
  display: inline-block;
  margin-right: 20px;
}
.list-enter-active, 
.list-leave-active {
  //transition: all 1s;
  transition: all 1.9s;
}
.list-enter, 
.list-leave-to {
  opacity: 0;
  //transform: translateY(30px);
}


// Preview
.t_preview-enter-active {
  transition: all 2.7s;
}
.t_preview-leave-active {
  transition: all 2.7s;
}
.t_preview-enter, 
.t_preview-leave-to {
  opacity: 0;
  //transform: scale(0.5);
  transform: translateY(300px);
}
</style>
