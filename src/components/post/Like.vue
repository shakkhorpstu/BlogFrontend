<template>
    <div class="card-footer">
        {{ post.likes ? post.likes.length : 0 }} Likes
       <div v-if="loggedInUser">
           <button class="btn btn-sm btn-danger" @click="unlikePost" v-if="checkUserHasLike()">
               <i class="fa fa-thumbs-down"></i>
           </button>
           <button class="btn btn-sm btn-success" @click="likePost" v-else>
               <i class="fa fa-thumbs-up"></i>
           </button>
       </div>
    </div>
</template>

<script>
    export default {
        name: "Like",
        props: ['post'],
        data() {
            return {
                loggedInUser: JSON.parse(localStorage.getItem('user')),
            }
        },
        methods: {
            likePost() {
                this.$store.dispatch('ACTION_LIKE_THIS_POST', this.post);
            },
            unlikePost() {
                this.$store.dispatch('ACTION_UNLIKE_THIS_POST', this.post);
            },
            checkUserHasLike() {
                if(this.post.likes) {
                    let like = this.post.likes.findIndex(like => like.user_id == this.loggedInUser.id);
                    if(like >= 0) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        }
    }
</script>

<style scoped>

</style>