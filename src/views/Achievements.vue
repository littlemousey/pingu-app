<template>
  <div>
    <h2>Your achievements</h2>
    <div v-if="achievements.noots50">
      🐣 First 50 noots. Work hard and one day you will become a Noot master
    </div>
    <div v-if="achievements.noots100">
      100 noots. You are getting the hang of it! 🐤
    </div>
    <div v-if="achievements.noots200">
      200 noots. Way to go! 🐥
    </div>
    <div v-if="achievements.quizCorrect">
      📚 Your knowledge on Pingu is outstanding🙏
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Achievements",
  computed: mapState(["achievements"])
};
</script>

<style lang="scss" scoped></style>
