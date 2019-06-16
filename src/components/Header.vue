<template>
 <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#"><img :src="require('../assets/github-logo-icon-0.png')"></b-navbar-brand>
    <h3>Github user</h3>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav >
       <b-navbar-nav class="ml-auto">
         <b-nav-item ><router-link to="/" exact>Home</router-link></b-nav-item>
        <b-nav-item ><router-link to="/about">About</router-link></b-nav-item>
        <b-nav-item ><router-link to="/users">Users</router-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'Header',
 
}
</script>

<style lang="scss" scoped>
@import'./style.scss';

img{height: 50px;}
a{color: $base-color}
.router-link-active{color:red;}
</style>
