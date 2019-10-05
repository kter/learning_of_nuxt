
<template lang="pug">
    <article class="media">
        <div class="media-content">
            <div class="content">
                <nuxt-link :to="'/question/${question.id}'">
                    <p>
                        <strong>{{question.title}}</strong>
                    </p>
                </nuxt-link>
            </div>
            <nav class="level is-mobile">
                <div class="level-left">
                    <p>
                        <strong>@{{question.user.name}}</strong>
                        <small>{{this.$moment(question.createdAt).format("YYYY.MM.DD - h:mm a")}}</small>
                    </p>
                </div>
                <!-- 編集・削除ボタン ->>
            </nav>
        </div>
        <!-- 編集・削除モーダル -->
    </article>
</template>
<script>
export default {
    data() {
        return {
            questionTitle: ""
        };
    },
    props: {
        question: {
            type: Object
        }
    }
};
</script>