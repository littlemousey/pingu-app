<template>
  <div>
    <h2>Pingu quiz</h2>
    <el-form>
      <el-form-item>
        <div>{{ quiz[0].question }}</div>
        <el-radio-group v-model="answerQ1">
          <el-radio
            v-for="answer in quiz[0].answers"
            :label="answer"
            :key="answer.id"
          ></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <div>{{ quiz[1].question }}</div>
        <el-radio-group v-model="answerQ2">
          <el-radio
            v-for="answer in quiz[1].answers"
            :label="answer"
            :key="answer.id"
          ></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <div>{{ quiz[2].question }}</div>
        <el-radio-group v-model="answerQ3">
          <el-radio
            v-for="answer in quiz[2].answers"
            :label="answer"
            :key="answer.id"
          ></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <div>{{ quiz[3].question }}</div>
        <el-radio-group v-model="answerQ4">
          <el-radio
            v-for="answer in quiz[3].answers"
            :label="answer"
            :key="answer.id"
          ></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <div>{{ quiz[4].question }}</div>
        <el-radio-group v-model="answerQ5">
          <el-radio
            v-for="answer in quiz[4].answers"
            :label="answer"
            :key="answer.id"
          ></el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <el-button v-on:click="checkAnswers" type="primary">Send answers</el-button>
    <p v-if="passedQuiz == false">Hmmm, not quite...</p>
    <p v-if="passedQuiz">
      Congratulations! 🥳🥳 You are a real Pingu expert 🐧
    </p>
  </div>
</template>

<script>
import quiz from "@/data/quiz";
import { mapActions } from "vuex";

export default {
  name: "Quiz",
  data: function() {
    return {
      quiz: quiz,
      answerQ1: "",
      answerQ2: "",
      answerQ3: "",
      answerQ4: "",
      answerQ5: "",
      passedQuiz: null
    };
  },
  methods: {
    checkAnswers() {
      const resultQ1 = this.answerQ1 === quiz[0].rightAnswer;
      const resultQ2 = this.answerQ2 === quiz[1].rightAnswer;
      const resultQ3 = this.answerQ3 === quiz[2].rightAnswer;
      const resultQ4 = this.answerQ4 === quiz[3].rightAnswer;
      const resultQ5 = this.answerQ5 === quiz[4].rightAnswer;
      if (resultQ1 && resultQ2 && resultQ3 && resultQ4 && resultQ5) {
        this.passedQuiz = true;
        this.achievementAccomplished("quizCorrect");
        this.$router.push("congratulations");
      } else {
        this.passedQuiz = false;
      }
    },
    ...mapActions(["achievementAccomplished"])
  }
};
</script>

<style lang="scss" scoped></style>
