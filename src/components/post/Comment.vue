<template>
    <div class="container pb-cmnt-container">
        <div class="row mb-2" v-for="(comment, index) in post.comments" :key="index">
            <div class="col-md-6">
                <div class="card card-info pl-2">
                    <div class="card-block">
                        <h4>{{ comment.user ? comment.user.name : '' }}</h4>
                        <div v-if="showEdit && editableComment.id == comment.id">
                            <textarea class="form-control pl-2" cols="5" v-model="comment.comment"></textarea>
                            <button class="btn btn-primary float-xs-right mr-2 btn-sm mt-2" type="button" @click="updateComment">Update</button>
                            <button class="btn btn-danger float-xs-right mr-2 btn-sm mt-2" type="button" @click="cancelEdit">Cancel</button>
                        </div>
                        <p v-else>{{ comment.comment }}</p>
                        <div class="pb-2" v-if="loggedInUser">
                            <button class="btn btn-danger btn-sm float-right" @click="deleteComment(comment.id, index)"><i class="fa fa-trash"></i></button>
                            <button class="btn btn-primary btn-sm float-right mr-1" @click="editComment(comment, index)"><i class="fa fa-pencil"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-5" v-if="loggedInUser">
            <div class="col-md-6">
                <div class="card card-info">
                    <div class="card-block">
                        <textarea v-model="comment_text" placeholder="Write your comment here!" class="pb-cmnt-textarea"></textarea>
                        <p class="form-inline float-right">
                            <button class="btn btn-primary float-xs-right mr-2" type="button" @click="saveComment">Comment</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Comment",
        props: ['post'],
        data() {
            return {
                comment_text: '',
                editableComment: {},
                showEdit: false,
                loggedInUser: JSON.parse(localStorage.getItem('user')),
            }
        },
        methods: {
            saveComment() {
                this.$store.dispatch('ACTION_STORE_POST_COMMENT', {
                    comment: this.comment_text,
                    post_id: this.post.id
                });
                this.comment_text = '';
            },
            editComment(comment, index) {
                comment.index = index;
                this.showEdit = true;
                this.editableComment = comment;
            },
            cancelEdit() {
                this.showEdit = false;
                this.editableComment = {};
            },
            updateComment() {
              this.$store.dispatch('ACTION_UPDATE_POST_COMMENT', {
                  comment: this.editableComment.comment,
                  id: this.editableComment.id
              });
              this.showEdit = false;
              this.editableComment = {};
            },
            deleteComment(id, index) {
                this.$store.dispatch('ACTION_DELETE_POST_COMMENT', {
                    id: id,
                    index: index
                })
            }
        }
    }
</script>

<style scoped>
    .pb-cmnt-container {
        font-family: Lato;
        margin-top: 100px;
    }
    .pb-cmnt-textarea {
        resize: none;
        padding: 20px;
        height: 130px;
        width: 100%;
        border: 1px solid #F2F2F2;
    }
</style>