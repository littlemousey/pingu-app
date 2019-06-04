<template>
  <div class="noot-component">
    <div>Pingu has been waiting for you...</div>
    <div>
      <img alt="Pingu" src="@/assets/img/pingu.png" />
    </div>
    <div>
      <el-badge :value="nootAmount" class="item">
        <el-button type="primary" icon="el-icon-video-play" @click="countNoot"
          >Send noots</el-button
        >
      </el-badge>
    </div>
    <div v-if="nootPercentage > 0">
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
  data: function() {
    return {
      nootAmount: null,
      nootPercentage: null
    };
  },
  methods: {
    countNoot() {
      this.nootAmount++;
      const sound = new Audio(require("../assets/sounds/NootNoot.mp3"));
      sound.play();
      this.nootPercentage = (this.nootAmount / 1000) * 100;
    }
  }
};
</script>

<style lang="scss" scoped></style>
