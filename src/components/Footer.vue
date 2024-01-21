<template>
    <footer>
        <div class="container text-center">
            <p class="fs-5 fw-semibold p-text-color my-4">Created by 
                <a :href="userData.linkedin" target="_blank" class="text-blue link-offset-2">nicds</a> 
                :)
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        userData: Object
    },
}
</script>