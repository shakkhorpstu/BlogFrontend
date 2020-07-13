<template>
    <div class="row">
        <div class="col-md-6 offset-md-2">
            <div class="card">
                <div class="card-header">
                    <h3>Register New User</h3>
                </div>
                <div class="card-body">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="name" v-model="user.name" class="form-control" id="name" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" v-model="user.email" class="form-control" id="email" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" v-model="user.password" class="form-control" id="password">
                        </div>
                        <button role="button" class="btn btn-primary"  @click="register">Register</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Registration",
        data() {
            return {
                user: {}
            }
        },
        methods: {
            register() {
                this.axios.post('users/create', this.user)
                .then((response) => {
                    if(response.data.success) {
                        this.$router.push({name: 'login'})
                    }
                })
                .catch((exception) => {
                    console.log(exception)
                })
            }
        }
    }
</script>

<style scoped>

</style>