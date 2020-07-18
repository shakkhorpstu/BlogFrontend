<template>
    <div class="row">
        <div class="col-md-6 offset-md-2">
            <div class="card">
                <div class="card-header">
                    <h3>Create New Post</h3>
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
                    <div class="form-group">
                        <img :src="image" width="250" height="100" v-if="image_loaded">
                        <br><br>
                        <input type="file" class="form-control" @change="onImageChange">
                    </div>
                    <button role="button" class="btn btn-primary"  @click="savePost">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "Create",
        data() {
            return {
                post: {},
                image: '',
                image_loaded: false
            }
        },
        methods: {
            onImageChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                this.createImage(files[0]);
            },
            createImage(file) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.image = e.target.result;
                };
                reader.readAsDataURL(file);
                this.image_loaded = true;
            },
            savePost() {
                this.post.image = this.image;
                this.$store.dispatch('ACTION_STORE_POST', this.post);
                this.post = {};
            }
        },
        created() {
            this.$store.dispatch('ACTION_FETCH_CATEGORIES');
        },
        computed: {
            ...mapGetters({
                categories: 'GET_ALL_CATEGORIES',
            })
        }
    }
</script>

<style scoped>

</style>