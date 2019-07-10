<template>
  <div>
    <h2>Congratulations!</h2>
    <img v-if="giphy" :src="giphy.url" :alt="giphy.title" />
    <p>You earned a new achievement!</p>
    <p>Check <router-link to="/achievements">achievements</router-link></p>
    <img src="@/assets/img/giphy_logo.png" alt="Giphies come from Giphy.com" />
  </div>
</template>

<script>
const API_KEY =
  "https://api.giphy.com/v1/gifs/search?api_key=M2NeUIwiPVvIIJ6VE9JcIBqxGbT7doP5&q=pingu&limit=25&offset=0&rating=G&lang=en";
export default {
  name: "Congratulations",
  data: function() {
    return {
      giphy: null
    };
  },
  mounted() {
    this.axios.get(API_KEY).then(response => {
      this.giphy = this.selectOneGiphy(response.data);
    });
  },
  methods: {
    selectOneGiphy(list) {
      console.log(list);
      const giphy = {};
      const giphyItem = list.data[Math.floor(Math.random() * list.data.length)];
      giphy.title = giphyItem.title;
      giphy.url = giphyItem.images.fixed_height.url;
      return giphy;
    }
  }
};
</script>

<style lang="scss" scoped></style>
