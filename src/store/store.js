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
    nootAmount: 0
  },
  mutations: {
    setNoots(state) {
      state.nootAmount++;
    }
  },
  actions: {
    incrementNoots(context) {
      context.commit("setNoots");
    }
  },
  plugins: [vuexLocal.plugin]
});

export default store;
