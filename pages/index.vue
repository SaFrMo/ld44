<template>
    <main class="home">
        <svg xmlns="http://www.w3.org/2000/svg" :viewBox.camel="viewBox">
            <environment-index />

            <ship-index />
        </svg>
    </main>
</template>

<script>
export default {
    computed: {
        viewBox() {
            return `0 0 ${this.$store.state.browser.winWidth} ${
                this.$store.state.browser.winHeight
            }`
        }
    }
}
</script>

<style>
.home {
}
</style>
