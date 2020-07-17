<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Laravel Vuejs Blog</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item" v-if="loggedInUserId">
                    <router-link class="nav-link" to="/posts/create">New Post</router-link>
                </li>
                <li class="nav-item pointer" v-if="loggedInUserId">
                    <a class="nav-link" @click="logout">Logout</a>
                </li>
                <li class="nav-item" v-if="!loggedInUserId">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li>
                <li class="nav-item" v-if="!loggedInUserId">
                    <router-link class="nav-link" to="/registration">Registration {{ counter }}</router-link>
                </li>
            </ul>
            <p class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="queryParams">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="searchPost">Search</button>
            </p>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar",
        computed: {
            counter() {
                return this.$store.getters.getCounter;
            }
        },
        data() {
            return {
                queryParams: '',
                loggedInUserId: JSON.parse(localStorage.getItem('user'))
            }
        },
        methods: {
            searchPost() {
                this.$router.push({name: 'search', query: {queryParams: this.queryParams}});
                this.queryParams = '';
            },
            logout() {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                window.location.href = '/';
            }
        }
    }
</script>

<style scoped>
.pointer {
    cursor: pointer;
}
</style>