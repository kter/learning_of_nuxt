export const state = () => ({
    // すべての質問データを格納する配列
    questions: []
});

export const mutations = {
    setQuestionsAll(state, payload) {
        state.questions = payload;
    }
};

export const actions = {
    addQuestion({ commit, state, dispatch }, payload) {
        commit("setBusy", true, { root: true });
        commit("clearError", null, { root: true });
        const db = this.$fireApp.firestore();
        // 質問を登録
        let questionRef = db.collection("questions");
        questionRef
            .add({
                title: payload.question,
                userRef: db.collection("users").doc(payload.userId),
                createdAt: new Date().toISOString()
            })
            .then(() => {
                // 質問を追加した際に質問をリフレッシュするため
                dispatch("fetchQuestionsAll");
                // { root: true }はmutationがstore/index.jsで定義されているため
                commit("setBusy", false, { root: true });
                commit("setJobDone", true, { root: true });
            });
    },
    async fetchQuestionsAll({ commit, state }, payload) {
        // 非同期処理を含む場合は非同期処理を待ってから
        // メソッドを完了させないとSSRにならないためasync/awaitを使用
        const db = this.$fireApp.firestore();

        // 登録した全データを取得
        let questions = [];
        const querySnapshot = await db.collection("questions").get();

        // 質問データをfetch
        querySnapshot.forEach(doc => {
            questions.push({
                id: doc.id,
                ...doc.data()
            });
        });

        // storeのデータを作成
        let storeData = [];
        for (let i = 0; i < questions.length; i++) {
            let q = questions[i];
            // リレーションデータの取得
            const userQuerySnapshot = await q.userRef.get();
            const userID = await q.userRef.id;
            storeData.push({
                title: q && q.title,
                id: q && q.id,
                createdAt: q && q.createdAt,
                user: {
                    ...userQuerySnapshot.data(),
                    id: userID
                }
            });
        }
        // mutation setQuestionsAllにコミット
        commit("setQuestionsAll", storeData);
    }
};

export const getters = {
    questionsAll(state) {
        return state.questions;
    }
};