<template>
  <div class="home">
    <noot :nootAmount="nootAmount" @addNoot="incrementNoots"></noot>
  </div>
</template>

<script>
import Noot from "@/components/Noot";
import { mapActions } from "vuex";

export default {
  name: "home",
  components: { Noot },
  computed: {
    nootAmount() {
      return this.$store.state.nootAmount;
    }
  },
  methods: {
    ...mapActions(["incrementNoots"])
  }
};
</script>

<style scoped>
.home {
  background-color: black;
}
</style>
