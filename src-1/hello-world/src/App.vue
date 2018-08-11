<template>
    <div id="app">

        <b-navbar id="nav" toggleable="md">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#">
                <img src="/img/logo.png" atl="GTC Logo" height="30">
            </b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/">Home</b-nav-item>
                    <b-nav-item to="/about">About</b-nav-item>
                    <b-nav-item v-b-modal.modal-login>Login</b-nav-item>
                    <b-nav-item to="/contact">Contact</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <router-view/>

        <Footer msg="foo"/>

        <!-- the modal -->
        <b-modal id="modal-login"
                ref="loginModal"
                size="lg"
                centered
                :hide-header=true
                :hide-footer=true
                header-bg-variant="light"
                header-text-variant="dark"
                body-bg-variant="light"
                body-text-variant="dark"
                footer-bg-variant="light"
                footer-text-variant="dark">
            <LoginModal @close_modal="closeModal" />
        </b-modal>

    </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import LoginModal from '@/components/LoginModal.vue'

export default {
    name: 'app',
    methods: {
        closeModal() {
            this.$refs.loginModal.hide()
        }
    },
    components: {
        LoginModal,
        Footer
    }
}
</script>

<style lang="scss">


// form validation errors
.tag-verror {
    color: red; 
}

nav#nav {
  padding: 30px;
}
nav#nav li > a {
    font-size: 20px;
    text-transform: uppercase;
    color: #cacaca;
}
nav#nav li {
    margin-left: 25px;
}
nav#nav li:first-child {
    margin-left: 0;
}
nav#nav li a {
    font-weight: bold;
    &.router-link-exact-active {
        color: #42b983;
    }
}
/*
ul.navbar-nav {
  padding: 30px;
  li {
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
}
*/
.debug-border {
    border: solid 5px yellow; // debug
}
html, body {
    //height: 100%;
    background: #000;
    color: #fff;
    font-family: Lato,sans-serif;
}
#app {
    /*
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  */
}

</style>
