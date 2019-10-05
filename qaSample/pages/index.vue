<script>
import apiJobMixin from "@/mixins/apiJobMixin";
export default {
  data() {
    return {
      question: "",
    };
  },
  mixins: [apiJobMixin],
  methods: {
    onQuestion() {
      let userID = this.$store.getters.user.id;
      const payload = {
        question: this.question,
        userId: userID
      };
      this.$store.dispatch("question/addQuestion", payload);
    },
    jobsDone() {
      console.log("job done");
    }
  }
};
</script>

<template>
  <div>
    <section class="section no-top-pad">
      <div class="columns is-centered is-mobile">
        <div v-if="isLogin" class="column is-half-desktop is-full-mobile is-full-tablet">
          <form @submit.prevent="onQuestion">
            <div class="field">
              <label class="label">あなたの質問は？</label>
              <div class="control">
                <textarea class="textarea" v-model="question" placeholder="質問を入力して下さい"></textarea>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button
                  class="button is-primary"
                  :class="{ 'is-loading': busy }"
                  :disabled="busy"
                >質問する</button>
              </div>
            </div>
          </form>
        </div>
        <div v-else>アカウントを作成して質問をしましょう！</div>
      </div>
      <div class="is-centered is-mobile">
        <!-- ここに質問リスト -->
      </div>
    </section>
  </div>
</template>