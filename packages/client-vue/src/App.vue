<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="50" height="50">
    <br>
    <router-link to="/users">UserList</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

// import UserList from './components/UserList';

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
