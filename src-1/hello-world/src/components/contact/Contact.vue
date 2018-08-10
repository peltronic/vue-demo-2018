<template>
<b-container fluid id="wrap-contact_contact" class="debug-border template-wrap">


    <b-row class="h-100 justify-content-center tag-background_image">
        <b-col md="5" id="form-contact" class="supercrate my-auto">
            <h2>Let's<br />Connect</h2>
            <div class="">
                <form @submit="submitForm" class="ui form"> 
                    <div class="field">
                        <label>Name</label>
                        <input v-model="fields.name" type="text" placeholder="Enger full name..." /> 
                        <span class="tag-verror">{{ fieldErrors.name }}</span>
                    </div>
                    <div class="field">
                        <label>Phone</label>
                        <input v-model="fields.phone" type="text" placeholder="Enter phone..." />
                        <span class="tag-verror">{{ fieldErrors.phone }}</span>
                    </div> 
                    <div class="field">
                        <label>Message</label>
                        <textarea v-model="fields.message" placeholder="" rows="5" />
                        <span class="tag-verror">{{ fieldErrors.message }}</span>
                    </div> 
                    <button class="ui button">Submit</button>
                </form>
            </div>
        </b-col>
        <b-col md="5" class="my-auto supercrate">
            <div id="company-map" class="">
                <img src="/img/675cb-snazzy-image.png" alt="Company Location on Map">
            </div>
        </b-col>
    </b-row>

</b-container>
</template>

<script>
export default {
    name: 'Contact',
    props: {
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
            foo: 0
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
}
.tag-background_image {
    //background-image: url(/img/img_mountains01.jpg);
}
.template-wrap .supercrate {
    //text-align: center;
}
.supercrate { 
    height: 70%;
}
#company-map {
    height: 100%;
}
#company-map img {
    //display: block;
    height: 100%;
}
</style>
