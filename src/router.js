import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Trivia from "./views/Trivia.vue";
import Quiz from "./views/Quiz.vue";
import Achievements from "./views/Achievements.vue";
import Congratulations from "./views/Congratulations.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/trivia",
      name: "trivia",
      component: Trivia
    },
    {
      path: "/quiz",
      name: "quiz",
      component: Quiz
    },
    {
      path: "/achievements",
      name: "achievements",
      component: Achievements
    },
    {
      path: "/congratulations",
      name: "congratulations",
      component: Congratulations
    }
  ]
});
