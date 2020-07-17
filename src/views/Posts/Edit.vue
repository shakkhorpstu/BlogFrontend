<template>
    <div class="row">
        <div class="col-md-6 offset-md-2">
            <div class="card">
                <div class="card-header">
                    <h3>Edit Post</h3>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" v-model="post.title" class="form-control" id="title" aria-describedby="emailHelp">
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <v-md-editor v-model="post.description" height="400px" id="description"></v-md-editor>
                    </div>
                    <div class="form-group">
                        <label for="category_id">Category</label>
                        <select v-model="post.category_id" id="category_id" class="form-control">
                            <option :value="category.id" v-for="(category, index) in categories" :key="index">{{ category.title }}</option>
                        </select>
                    </div>
                    <button role="button" class="btn btn-primary"  @click="updatePost">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "Edit",
        data() {
            return {

            }
        },
        created() {
            this.$store.dispatch('ACTION_FETCH_CATEGORIES');
            this.$store.dispatch('ACTION_SINGLE_POST', this.$route.params.id);
        },
        methods: {
            updatePost() {
                this.$store.dispatch('ACTION_UPDATE_POST', this.post)
            }
        },
        computed: {
            ...mapGetters({
                post: 'GET_SINGLE_POST',
                categories: 'GET_ALL_CATEGORIES'
            })
        }
    }
</script>

<style scoped>

</style>