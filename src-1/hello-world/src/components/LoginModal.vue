<template>
<div>
    <b-container fluid>
        <b-row class="text-center">
            <b-col>
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
            </b-col>
        </b-row>
    </b-container>

    <div slot="modal-footer" class="w-100">
        <p class="float-left">Modal Footer Content</p>
        <b-btn size="sm" class="float-right" variant="primary" @click="show=false">
            Close
        </b-btn>
    </div>

</div>
</template>

<script>

export default {
    name: 'LoginModal',
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
</style>
