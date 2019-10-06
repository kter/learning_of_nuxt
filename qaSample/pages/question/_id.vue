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