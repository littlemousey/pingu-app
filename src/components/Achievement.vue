<template>
  <div class="noot-chievement">
    <div class="tropy">
      <img
        alt="nootchievement"
        src="@/assets/img/penguin-achievement.svg"
        class="noot-img"
      />
    </div>
    <div class="description">
      <h3>{{ title }}</h3>
      <span class="subtitle">
        <em class="num-noots" v-if="number"> {{ number }} noots -</em>
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nootchievement",
  props: {
    text: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: false
    },
    title: {
      type: String,
      required: false,
      default: "Achievement Unlocked"
    }
  }
};
</script>

<style lang="scss" scoped>
.noot-chievement {
  background: #2c2827;
  border-radius: 300px;
  border: 5px solid #5b5857;
  display: flex;
  flex-wrap: nowrap;
  padding: 8px 1em 0;
  margin-bottom: 1em;
  h3 {
    text-align: left;
    text-transform: uppercase;
    margin: 0;
  }

  .description {
    padding-left: 1em;
    font-size: 19px;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  .num-noots {
    font-style: normal;
  }
}

.noot-img {
  width: 100px;
  height: 100px;
}
</style>
