<template>
  <div class="noot-component">
    <div>Pingu has been waiting for you...</div>
    <div>
      <img alt="Pingu" src="@/assets/img/pingu.png" />
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
  data: function() {
    return {
      nootPercentage: null
    };
  },
  methods: {
    countNoot() {
      this.$emit("addNoot");
      const sound = new Audio(require("../assets/sounds/NootNoot.mp3"));
      sound.play();
      this.nootPercentage = Math.floor((this.nootAmount / 1000) * 100);
    }
  }
};
</script>

<style lang="scss" scoped></style>
