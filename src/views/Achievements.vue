<template>
  <div>
    <h2>Your achievements</h2>

    <nootchievement v-if="achievements.noots50" v-bind="noots['50']" />
    <nootchievement v-if="achievements.noots69" v-bind="noots['69']" />
    <nootchievement v-if="achievements.noots100" v-bind="noots['100']" />
    <nootchievement v-if="achievements.noots200" v-bind="noots['200']" />
    <nootchievement v-if="achievements.noots300" v-bind="noots['300']" />
    <nootchievement v-if="achievements.noots300" v-bind="noots['300']" />

    <nootchievement v-if="achievements.quizCorrect" v-bind="custom.quiz" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Nootchievement from "../components/Achievement";
export default {
  name: "Achievements",
  components: { Nootchievement },
  computed: mapState(["achievements"]),
  data() {
    return {
      noots: {
        "50": {
          number: 50,
          title: "Humble Beginnings",
          text: "Work hard and one day you will become a Noot master"
        },
        "69": {
          title: "Nice",
          number: 69,
          text: "😉"
        },
        "100": {
          title: "Hang of it",
          number: 100,
          text: "You are getting the hang of it! 🐤"
        },
        "200": {
          title: "Perseverance",
          number: 200,
          text: "Way to go! 🐥"
        },
        "300": {
          title: "This is NOOT NOOT!",
          number: 200,
          text: "300!"
        }
      },
      custom: {
        quiz: {
          title: "Achievement Unlocked",
          text: "📚 Your Quiz knowledge on Pingu is outstanding🙏"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
