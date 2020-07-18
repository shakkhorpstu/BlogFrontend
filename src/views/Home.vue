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
               <v-md-preview :text="post.description"></v-md-preview>
               <router-link :to="{name: 'posts.view', params: {id: post.id}}" class="btn btn-primary">Go to details</router-link>
           </div>
           <Like :post="post" @testingEmitFromChild="testingEmitOnHome"></Like>
       </div>
   </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Like from '../components/post/Like';
    export default {
        name: "Home",
        data() {
            return {
                loggedInUserId: JSON.parse(localStorage.getItem('user'))
            }
        },
        methods: {
            deletePost(postId, index) {
                this.$store.dispatch('ACTION_DELETE_POST', {
                    postId: postId,
                    index: index
                });
            },
            testingEmitOnHome(stringMessage) {
                console.log(stringMessage);
            }
        },
        created() {
            this.$store.dispatch('ACTION_FETCH_POSTS');
        },
        computed: {
            ...mapGetters({
                posts: 'GET_ALL_POSTS'
            })
        },
        components: {
            Like
        }
    }
</script>

<style scoped>

</style>