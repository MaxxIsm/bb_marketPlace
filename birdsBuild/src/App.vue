<script>
import Storage from "./components/Storage.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Storage,
    Navbar,
  },
};
</script>

<template>
  <div class="app">
    <Navbar></Navbar>
    <RouterView></RouterView>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
}
.app {
  width: 1200px;
  margin: 0 auto;
}
</style>
