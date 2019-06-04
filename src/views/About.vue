<template>
  <div class="about" v-if="dataAvailable">
    <img :src="pinguImage" alt="pingo logo" />
    <h1>{{ pinguData.title }}</h1>
    <span>{{ pinguData.extract }}</span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      pinguData: null,
      pinguImage: null
    };
  },
  async created() {
    this.pinguData = await this.getPinguData();
    this.pinguImage = await this.getPinguImage();
  },
  computed: {
    dataAvailable() {
      return this.pinguData && this.pinguImage;
    }
  },
  methods: {
    async getPinguData() {
      try {
        const data = await fetch(
          "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&titles=pingu&explaintext=true&exsentences=2&origin=*"
        );
        const json = await data.json();
        return json.query.pages[448186];
      } catch (error) {
        console.error("An error has occurred:", error);
      }
    },
    async getPinguImage() {
      try {
        const data = await fetch(
          "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=images&titles=pingu&origin=*"
        );
        const json = await data.json();
        const fileName = json.query.pages[448186].images[1].title.replace(
          "File:",
          ""
        );
        const image = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&titles=Image:${fileName}&prop=imageinfo&iiprop=url&format=json&origin=*`
        );
        const imageJson = await image.json();
        return imageJson.query.pages[48367452].imageinfo[0].url;
      } catch (error) {
        console.error("An error has occurred:", error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.about {
  max-width: 80vh;
}
</style>
