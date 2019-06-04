<template>
  <div class="home">
    <noot></noot>
  </div>
</template>

<script>
import Noot from "@/components/Noot";
export default {
  name: "home",
  components: { Noot }
};
</script>

<style scoped>
.home {
  background-color: black;
}
</style>
