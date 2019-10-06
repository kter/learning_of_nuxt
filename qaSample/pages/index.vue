<script>
import apiJobMixin from "@/mixins/apiJobMixin";
// 作成したリスト用のコンポーネントを作成
import QuestionList from "@/components/QuestionList";
export default {
  data() {
    return {
      // 入力されたinput用データ
      question: "",
      // 質問用の全件リストデータ
      questions: []
    };
  },
  mixins: [apiJobMixin],
  components: {
    QuestionList
  },
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
  },
  computed: {
    allQuestions() {
      // computedでgetterを使い質問全件を取得
      return this.$store.getters["question/questionsAll"];
    }
  },
  // SSR処理を行うためfetch
  async fetch({ app, store }) {
    // fetchメソッドでSSR用のデータをfetchする
    // 既にfetchメソッドを使うなら再度Ajaxを叩かないようにする
    if (store.getters["question/questionsAll"].length > 0) {
      return;
    }

    // storeのfetchQuestionsAllアクションを叩く
    // storeのstateにデータがキャッシュされ、getterで取得する
    await store.dispatch("question/fetchQuestionsAll");
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
        <QuestionList v-for="(q,index) in allQuestions" :key="index" :question="q" />
      </div>
    </section>
  </div>
</template>