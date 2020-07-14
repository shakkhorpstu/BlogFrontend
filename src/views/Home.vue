<template>
   <div>
       <div class="card p-5" v-for="(post, index) in posts" :key="index">
           <div class="card-header">
               {{ post.title }} by {{ post.user.name }}
               <div class="float-right" v-if="loggedInUserId && loggedInUserId.id == post.user_id">
                   <router-link :to="{name: 'posts.edit', params:{id: post.id}}" class="btn btn-primary mr-2">Edit</router-link>
                   <a class="btn btn-danger" @click="deletePost(post.id, index)">Delete</a>
               </div>
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
        data() {
            return {
                loggedInUserId: JSON.parse(localStorage.getItem('user')),
            }
        },
        methods: {
            deletePost(postId, index) {
                this.$store.dispatch('ACTION_DELETE_POST', {
                    postId: postId,
                    index: index
                })
            }
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