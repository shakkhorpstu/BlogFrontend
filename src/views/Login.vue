<template>
    <div class="row">
        <div class="col-md-6 offset-md-2">
            <div class="card">
                <div class="card-header">
                    <h3>Login User</h3>
                </div>
                <div class="card-body">
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" v-model="user.email" class="form-control" id="email" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" v-model="user.password" class="form-control" id="password">
                        </div>
                        <button type="submit" class="btn btn-primary" @click="login">Login</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                user: {}
            }
        },
        methods: {
            login() {
                this.axios.post('users/login', this.user)
                .then((response) => {
                    if(response.data.success) {
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('user', JSON.stringify(response.data.user));
                        window.location.href = '/';
                    }
                })
                .catch((exception) => {
                    console.log(exception);
                })
            }
        }
    }
</script>

<style scoped>

</style>