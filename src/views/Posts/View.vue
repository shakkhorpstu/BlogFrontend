<template>
    <div class="container pt-5">
        <h4>{{ post.title }} by {{ post.user ? post.user.name : '' }}</h4>
        <small>Posted on {{ post.created_at }}</small> <br>
        <small>{{ post.category ? post.category.title : '' }}</small>
        <p>{{ post.description }}</p>
        <Like :post="post"></Like>
        <Comment :post="post"></Comment>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Like from '../../components/post/Like';
    import Comment from "../../components/post/Comment";
    export default {
        name: "View",
        data() {
            return {

            }
        },
        created() {
            this.$store.dispatch('ACTION_SINGLE_POST', this.$route.params.id);
        },
        computed: {
            ...mapGetters({
                post: 'GET_SINGLE_POST'
            })
        },
        components: {
            Like,
            Comment
        }
    }
</script>

<style scoped>

</style>