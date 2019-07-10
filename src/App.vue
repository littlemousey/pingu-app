<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Noot</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/trivia">Trivia</router-link> |
      <router-link to="/quiz">Quiz</router-link> |
      <router-link to="/achievements">Achievements</router-link>
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
  font-size: 1.5em;
  overflow: hidden;
}

*,
*:after,
*:before {
  box-sizing: border-box;
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
  max-height: 80vh;
  padding: 25vh 15px 5px;
  overflow-y: scroll;
}
</style>
