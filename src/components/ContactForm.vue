<template>
    <form ref="form" @submit.prevent="sendEmail">
        <em class="fw-semibold p-text-color">
            {{ $t("contactSection.text") }}
            <span class="text-blue">{{ $t("contactSection.text2") }}</span>:
        </em>
        <div v-for="field in formFields" :key="field.name" class="my-3">
            <input
                v-if="field.type === 'text'"
                :type="field.type"
                :name="field.name"
                v-model="form[field.name]"
                :placeholder="field.placeholder"
                class="form-control no-box-shadow zorro"
                :class="{ 'is-invalid': formSent && v$.form[field.name].$dirty && v$.form[field.name].$errors.length > 0 }"
            />
            <input
                v-else-if="field.type === 'email'"
                :type="field.type"
                :name="field.name"
                v-model="form[field.name]"
                :placeholder="field.placeholder"
                class="form-control no-box-shadow"
                :class="{ 'is-invalid': formSent && v$.form[field.name].$dirty && v$.form[field.name].$errors.length > 0 }"
            />
            <textarea 
                v-else
                :name="field.name"
                v-model="form[field.name]"
                :placeholder="field.placeholder"
                class="form-control no-box-shadow"
                :class="{ 'is-invalid': formSent && v$.form[field.name].$dirty && v$.form[field.name].$errors.length > 0 }"
                :rows="field.rows"
            ></textarea>
        </div>
        <div class="mt-3 text-end">
            <button type="submit" class="btn btn-blue fw-semibold px-3" :disabled="loading">
                <span v-if="!loading">{{ $t("contactSection.btn") }}</span>
                <span v-if="loading">{{ $t("contactSection.loading") }}</span>
            </button>
        </div>
    </form>
</template>

<script>
import emailjs from '@emailjs/browser'
import { email, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

export default {
    name: 'ContactForm',
    props: {
        formFields: Array
    },
    setup() { 
        return { v$: useVuelidate() }
    },
    data() {
        return {
            form: {
                name: "",
                email: "",
                message: "",
            },
            loading: false,
            formSent: false,
            serviceId: process.env.VUE_APP_SERVICE_ID,
            templateId: process.env.VUE_APP_TEMPLATE_ID,
            publicKey: process.env.VUE_APP_PUBLIC_KEY
        }
    },
    validations() {
        return {
            form: {
                name: { required },
                email: { required, email },
                message: { required },
            }
        };
    },
    methods: {
        sendEmail() {
            this.v$.$validate().then((isValid) => {
                if (isValid) {
                    this.loading = true
                    emailjs
                        .sendForm(this.serviceId, this.templateId, this.$refs.form, this.publicKey)
                        .then(() => {
                            this.loading = false;
                            this.showMessage(this.$t("contactSection.success"), 'success');
                            this.formSent = false
                        })
                        .catch(() => {
                            this.loading = false;
                            this.showMessage(this.$t("contactSection.error"), 'error');
                            this.formSent = false
                        })
                        .finally(() => {
                            this.form = {
                                name: "",
                                email: "",
                                message: "",
                            }
                    });
                } else {
                    // Only is not valid
                    this.formSent = true;
                }
            });
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