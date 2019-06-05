<template>
  <div class="noot-component">
    <div>Pingu has been waiting for you...</div>
    <div>
      <img alt="Pingu" src="@/assets/img/pingu.png" class="pingu-img" />
    </div>
    <div>
      <el-button type="primary" icon="el-icon-video-play" @click="countNoot"
        >Send noots</el-button
      >
    </div>
    <div v-if="nootPercentage > 0">
      <p>Your progress in becoming a Noot master</p>
      <el-progress
        :text-inside="true"
        :stroke-width="24"
        :percentage="nootPercentage"
      ></el-progress>
    </div>
    <div v-if="nootAmount > 0">You have {{ nootAmount }} noots so far</div>
  </div>
</template>

<script>
export default {
  name: "noot",
  props: {
    nootAmount: { required: true, type: Number }
  },
  computed: {
    nootPercentage() {
      return Math.floor((this.nootAmount / 1000) * 100);
    }
  },
  methods: {
    countNoot() {
      this.$emit("addNoot");
      const sound = new Audio(require("../assets/sounds/NootNoot.mp3"));
      sound.play();
    }
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 400px) {
  .pingu-img {
    width: 90%;
    height: 90%;
  }
  .noot-component {
    font-size: 0.8em;
  }
}
</style>
