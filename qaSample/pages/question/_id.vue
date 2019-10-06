<template>
    <section class="section no-top-pad">
        <div class="box">
            <article class="media">
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>{{question.title}}</strong>
                            <br />
                            <small>{{question.user && question.user.name}}</small>
                            <small>{{this.$moment(question.createdAt).format("YYY.MM.DD - h:mm a")}}</small>
                        </p>
                    </div>
                </div>
            </article>
        </div>
        <div>
            <article class="media">
                <figure class="media-left">
                    <p class="image is-48x48"></p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <!-- ここに回答 -->
                    </div>
                </div>
            </article>
        </div>
        <!-- ここに回答の入力 -->
    </section>
</template>
<script>
import apiJobMixin from "@/mixins/apiJobMixin";
export default {
    computed: {
        question() {
            return this.$store.getters["question/question"];
        }
    },
    methods: {
        jobsDone() {
            console.log("job done");
        }
    },
    mixins: [apiJobMixin],
    async fetch({ app, route, store }) {
        // URLから質問IDを取得
        let questionId = route.params.id;
        // アクションにdispatch
        await store.dispatch("question/fetchQuestion", questionId);
    }
};
</script>