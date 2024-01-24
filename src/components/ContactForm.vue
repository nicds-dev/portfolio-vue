<template>
    <form ref="form" @submit.prevent="sendEmail">
        <em class="fw-semibold p-text-color">Or you can leave me a <span class="text-blue">message</span>:</em>
        <div v-for="field in formFields" :key="field.name" class="my-3">
        <input
            v-if="field.type === 'text' || field.type === 'email'"
            :type="field.type"
            :name="field.name"
            v-model="formData[field.name]"
            :placeholder="field.placeholder"
            class="form-control no-box-shadow"
            required
        />
        <textarea 
            v-else
            :name="field.name"
            v-model="formData[field.name]"
            :placeholder="field.placeholder"
            class="form-control no-box-shadow"
            :rows="field.rows"
            required
        ></textarea>
        </div>
        <div class="my-3 text-end">
            <button type="submit" class="btn btn-blue fw-semibold px-3">
                <span>Send Message</span>
            </button>
        </div>
    </form>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
    name: 'ContactForm',
    props: {
        formFields: Array
    },
    data() {
        return {
            formData: {
                name: "",
                email: "",
                message: "",
            },
            serviceId: process.env.VUE_APP_SERVICE_ID,
            templateId: process.env.VUE_APP_TEMPLATE_ID,
            publicKey: process.env.VUE_APP_PUBLIC_KEY
        }
    },
    methods: {
        sendEmail() {
            emailjs.sendForm(this.serviceId, this.templateId, this.$refs.form, this.publicKey)
            .then(() => {
                this.$refs.form.reset()
                this.showMessage('Great! Message sent', 'success')
            })
            .catch(() => {
                this.showMessage('Oops! Something went wrong', 'error')
            })
        },
        showMessage(title, icon) {
            this.$swal({
                title: title,
                icon: icon,
                showConfirmButton: false,
                timer: 2000
            });
        },
    },
}
</script>

<style scoped>
  form {
    min-width: 100%;
  }
</style>