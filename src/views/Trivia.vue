<template>
  <div class="trivia">
    <h2>Pingu trivia</h2>
    <ul>
      <li class="trivia-list" v-for="fact in trivia" :key="fact.id">
        {{ fact }}
      </li>
    </ul>
  </div>
</template>

<script>
import trivia from "@/data/trivia";
export default {
  name: "trivia",
  data: function() {
    return { trivia: trivia };
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 450px) {
  li {
    font-size: 0.8em;
  }
}
li {
  list-style: none;

  &:before {
    content: "🐧";
  }
}
</style>
