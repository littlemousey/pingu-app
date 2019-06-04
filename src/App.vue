<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Noot</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="router-content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Shadows+Into+Light&display=swap");
body {
  font-family: "Shadows Into Light", cursive;
  text-align: center;
  background-color: black;
  color: white;
  font-size: 2em;
  overflow: hidden;
}

a {
  color: white;
}

.router-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
</style>
