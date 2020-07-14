<template>
   <div>
       <div class="card p-5" v-for="(post, index) in posts" :key="index">
           <div class="card-header">
               {{ post.title }} by {{ post.user.name }}
           </div>
           <div class="card-body">
               <h5 class="card-title">{{ post.category.title }}</h5>
               <p class="card-text">{{ post.description }}</p>
               <a href="#" class="btn btn-primary">Go to details</a>
           </div>
       </div>
   </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "Home",
        methods: {

        },
        created() {
            this.$store.dispatch('ACTION_FETCH_POSTS');
        },
        computed: {
            ...mapGetters({
                posts: 'GET_ALL_POSTS'
            })
        }
    }
</script>

<style scoped>

</style>