<template>
    <div>
        <h2>Welcome to homepage</h2>
        <button class="btn btn-primary" @click="increaseCounter">Increase</button>
        <h2>Clicked {{ $store.state.counter }}</h2>
    </div>
</template>

<script>
    export default {
        name: "Home",
        methods: {
            increaseCounter() {
                // this.$store.commit('setCounter');
                this.$store.dispatch('setCounterAction');
            }
        }
    }
</script>

<style scoped>

</style>