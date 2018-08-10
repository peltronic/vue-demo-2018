<template>
<b-container fluid id="wrap-contact_contact" class="debug-border template-wrap">

<div id="subwrap">
    <b-row class="h-100 justify-content-center no-gutters tag-background_image">
        <b-col md="4" id="form-contact" class="supercrate my-auto">
            <div class="">
                <h2>Let's<br />Connect</h2>
                <b-form @submit="submitForm" :validated="wasValidated" novalidate class="OFF-ui OFF-form"> 
                    <b-form-group id="fg-contact_name" label="Name" label-for="contact_name" >
                        <b-form-input id="contact_name" type="text" v-model="fields.name" required placeholder="Enter full name..."></b-form-input>
                        <b-form-invalid-feedback>{{ fieldErrors.name }} </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group id="fg-contact_phone" label="Phone" label-for="contact_phone" >
                        <b-form-input id="contact_phone" type="text" v-model="fields.phone" required placeholder="Enter phone..."></b-form-input>
                        <b-form-invalid-feedback>{{ fieldErrors.phone }} </b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group id="fg-contact_message" label="Message" label-for="contact_message" >
                        <b-form-textarea id="contact_message" v-model="fields.message" rows="5" placeholder=""></b-form-textarea>
                        <b-form-invalid-feedback>{{ fieldErrors.message }} </b-form-invalid-feedback>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Submit</b-button>
                </b-form>
            </div>
        </b-col>
        <b-col md="4" class="my-auto supercrate">
            <div id="company-map" class="">
                <img src="/img/675cb-snazzy-image.png" alt="Company Location on Map" class="OFF-img-fluid">
            </div>
        </b-col>
    </b-row>
</div>

</b-container>
</template>

<script>
// %TODO: get rid of v-100 on this page, adjust accoringly
// BS4 Form Validation:
//   ~ https://bootstrap-vue.js.org/docs/components/form
//   ~ https://getbootstrap.com/docs/4.0/components/forms/#validation

export default {
    name: 'Contact',
    props: {
        //validated: Boolean,
        msg: String
    },
    computed: {
    },
    data () {
        return {
            fields: {
                name: '',
                phone: '',
                message: ''
            },
            fieldErrors: {
                name: undefined,
                phone: undefined,
                message: undefined
            },
            wasValidated: false
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
            this.fieldErrors = this.validateForm(this.fields); 
            if ( Object.keys(this.fieldErrors).length ) {
                return; // client-level form validation failed
            }
            //this.items.push(this.fields.name);  // %TODO: ajax POST

            // reset form
            this.fields.name = ''; 
            this.fields.phone = ''; 
            this.fields.message = ''; 
        },
        validateForm(fields) {
            const errors = {};
            this.wasValidated = true;
            if (!fields.name) errors.name = "Name Required"; 
            if (!fields.phone) errors.phone = "Phone Required";
            if (!fields.message) errors.message = "Message Required"; 
            if (fields.phone && !this.isValidPhone(fields.phone)) { 
                errors.phone = "Invalid Phone";
            }
            return errors;
        },
        isValidPhone(str) {
            return true; // %TODO
            //const re = /\S+@\S+\.\S+/; // regex for email format %FIXME
            //return re.test(str); 
        }
    }
}
</script>

<style scoped lang="scss">
#form-contact {
    background-color: #fff;
    color: #000;
    //height: 100%;
}
#form-contact > div {
    padding: 50px;
}
#form-contact h2 {
    margin-bottom: 25px;
}
.tag-background_image {
    //background-image: url(/img/img_mountains01.jpg);
}
.template-wrap .supercrate {
    //text-align: center;
}
.supercrate { 
    height: 100%;
}
#company-map {
    height: 100%;
}
#company-map img {
    //height: 100%;
    max-height: 100%;
    width: auto;
}
#subwrap {
    padding: 35px 0;
    height: 100%;
}
</style>
