<template>
<div id="subwrap">
    <close-icon @click.native="closeModal" />
    <b-container fluid>
        <b-row class="OFF-text-center">
            <b-col id="supercrate-form" class="supercrate">
                <div v-if="!showRegister">
                    <h2>Sign In</h2>
                    <b-form @submit="submitLoginForm" :validated="login.wasValidated" novalidate class="OFF-ui OFF-form"> 
                        <b-form-group id="fg-login_username" label="Username" label-for="login_username" >
                            <b-form-input id="login_username" type="text" v-model="login.fields.username" required placeholder=""></b-form-input>
                            <b-form-invalid-feedback>{{ login.verrors.username }} </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group id="fg-login_password" label="Password" label-for="login_password" >
                            <b-form-input id="login_password" type="password" v-model="login.fields.password" required placeholder=""></b-form-input>
                            <b-form-invalid-feedback>{{ login.verrors.password }} </b-form-invalid-feedback>
                        </b-form-group>
                        <b-button type="submit" variant="primary">Login</b-button>
                    </b-form>
                    <div>
                        <p class="float-left"><a id="tag-clickme_to_reset_password" href="#">Forgot Password?</a></p>
                        <p v-on:click="showRegister=true" class="float-right"><a id="tag-clickme_to_show_register" href="#">Register</a></p>
                    </div>
                </div>
                <div v-if="showRegister">
                    <h2>Register Account</h2>
                    <b-form @submit="submitLoginForm" :validated="register.wasValidated" novalidate class="OFF-ui OFF-form"> 
                        <b-form-group id="fg-register_username" label="Username" label-for="register_username" >
                            <b-form-input id="register_username" type="text" v-model="register.fields.username" required placeholder=""></b-form-input>
                            <b-form-invalid-feedback>{{ register.verrors.username }} </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group id="fg-register_password" label="Password" label-for="register_password" >
                            <b-form-input id="register_password" type="password" v-model="register.fields.password" required placeholder=""></b-form-input>
                            <b-form-invalid-feedback>{{ register.verrors.password }} </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group id="fg-register_confirm_password" label="Confirm Password" label-for="register_confirm_password" >
                            <b-form-input id="register_confirm_password" type="password" v-model="register.fields.confirm_password" required placeholder=""></b-form-input>
                            <b-form-invalid-feedback>{{ register.verrors.confirm_password }} </b-form-invalid-feedback>
                        </b-form-group>
                        <b-form-group id="fg-register_email" label="Email" label-for="register_email" >
                            <b-form-input id="register_email" type="text" v-model="register.fields.email" required placeholder=""></b-form-input>
                            <b-form-invalid-feedback>{{ register.verrors.email }} </b-form-invalid-feedback>
                        </b-form-group>
                        <b-button type="submit" variant="primary">Register</b-button>
                    </b-form>
                    <div>
                        <p v-on:click="showRegister=false" class="float-right"><a id="tag-clickme_to_show_login" href="#">Login</a></p>
                    </div>
                </div>
            </b-col>

            <b-row>
                <b-col class="copy-background">
                    <b-row>
                        <b-col id="supercrate-copy" class="my-auto text-center supercrate OFF-copy-background">
                            <img id="gtc-logo" src="img/logo.png" alt="GTC Logo" height="30">
                            <h2>Creative <br />Portal</h2>
                            <p>The perfect place to manage your digital messaging</p>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>

        </b-row>
    </b-container>

</div>
</template>

<script>

import CloseIcon from "vue-material-design-icons/close.vue"

export default {
    name: 'LoginModal',
    components: {
        CloseIcon,
    },
    data () {
        return {
            login: {
                fields: {
                    username: '',
                    password: ''
                },
                verrors: {
                    username: undefined,
                    password: undefined
                },
                wasValidated: false
            },
            register: {
                fields: {
                    username: '',
                    password: '',
                    confirm_password: '',
                    email: ''
                },
                verrors: {
                    username: undefined,
                    password: undefined,
                    confirm_password: undefined,
                    email: undefined
                },
                wasValidated: false
            },
            showRegister: false
        }
    },
    methods: {

        // --- Login Form ---

        submitLoginForm(e) {
            e.preventDefault();
            this.login.verrors = this.validateLoginForm(this.login.fields); 
            if ( Object.keys(this.login.verrors).length ) {
                return; // client-level form validation failed
            }
            //this.items.push(this.loginFields.name);  // %TODO: ajax POST
            this.resetLoginForm();
        },
        validateLoginForm(fields) {
            const errors = {};
            this.login.wasValidated = true;
            if (!fields.username) this.login.verrors.username = "Username Required"; 
            if (!fields.password) this.login.verrors.password = "Password Required";
            return errors;
        },
        resetLoginForm() {
            this.login.fields.username = ''; 
            this.login.fields.password = ''; 
        },

        // --- Register Form ---

        submitRegisterForm(e) {
            e.preventDefault();
            this.register.verrors = this.validateRegisterForm(this.register.fields); 
            if ( Object.keys(this.register.verrors).length ) {
                return; // client-level form validation failed
            }
            this.resetRegisterForm();
        },
        validateRegisterForm(fields) {
            const errors = {};
            this.register.wasValidated = true;
            if (!fields.username) this.register.verrors.username = "Username Required"; 
            if (!fields.password) this.register.verrors.password = "Password Required";
            if (!fields.confirm_password) this.register.verrors.confirm_password = "Confirm Password Required";
            return errors;
        },
        resetRegisterForm() {
            this.register.fields.username = ''; 
            this.register.fields.password = ''; 
            this.register.fields.confirm_password = ''; 
        },

        // --- Other ---

        closeModal() {
            this.$emit('close_modal');
        },

        isValidPhone(str) {
            return true; // %TODO
            //const re = /\S+@\S+\.\S+/; // regex for email format %FIXME
            //return re.test(str); 
        }
    }
}
</script>

<style lang="scss">
#modal-login .modal-content .modal-body {
    padding: 0;
    /*
    margin-left: 1rem;
    margin-right: 1rem;
    */
    -webkit-border-radius: 0.3rem;
    -moz-border-radius: 0.3rem;
    border-radius: 0.3rem;
}
</style>

<style scoped lang="scss">
.supercrate { 
    //height: 100%;
    padding: 3rem 0;
}
#supercrate-form { 
    padding-left: 2rem;
    padding-right: 2rem;
}
#supercrate-copy { 
    padding-left: 2rem;
    padding-right: 2rem;
    color: #fff;
}
.copy-background { 
    background-image: url(/img/c2279-login-bg.jpg);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
.copy-background > .row { 
    height: 100%;
}
#supercrate-form h2 { 
    margin-bottom: 3rem;
}
#supercrate-form form { 
    margin-bottom: 2rem;
}
#supercrate-copy img#gtc-logo { 
    margin-bottom: 2rem;
}
#supercrate-copy h2 {
    margin-bottom: 2rem;
}
#subwrap {
    position: relative;
}
.material-design-icon.close-icon {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    font-size: 60px;
    cursor: pointer;
    color: #fff;
}
</style>
