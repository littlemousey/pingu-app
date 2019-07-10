<template>
  <div class="home">
    <noot :nootAmount="nootAmount" @addNoot="clickButton"></noot>
  </div>
</template>

<script>
import Noot from "@/components/Noot";
import { mapActions, mapState } from "vuex";

export default {
  name: "home",
  components: { Noot },
  computed: {
    nootAmount() {
      return this.$store.state.nootAmount;
    },
    ...mapState(["nootAmount"])
  },
  methods: {
    ...mapActions(["incrementNoots", "achievementAccomplished"]),
    clickButton() {
      this.incrementNoots();
      if (this.nootAmount >= 50) {
        this.achievementAccomplished("noots50");
      }
      if (this.nootAmount >= 100) {
        this.achievementAccomplished("noots100");
      }
      if (this.nootAmount >= 200) {
        this.achievementAccomplished("noots200");
      }
    }
  }
};
</script>

<style scoped>
.home {
  background-color: black;
}
</style>
