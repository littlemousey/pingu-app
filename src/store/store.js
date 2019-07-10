import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  key: "noot-app",
  storage: window.localStorage
});

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    nootAmount: 0,
    achievements: {
      noots50: false,
      noots100: false,
      noots200: false,
      noots300: false,
      noots400: false,
      noots500: false,
      noots600: false,
      noots700: false,
      noots800: false,
      noots900: false,
      noots950: false,
      noots1000: false,
      quizCorrect: false
    }
  },
  mutations: {
    setNoots(state) {
      state.nootAmount++;
    },
    setAchievements(state, goal) {
      state.achievements[goal] = true;
    }
  },
  actions: {
    incrementNoots(context) {
      context.commit("setNoots");
    },
    achievementAccomplished(context, payload) {
      context.commit("setAchievements", payload);
    }
  },
  plugins: [vuexLocal.plugin]
});

export default store;
