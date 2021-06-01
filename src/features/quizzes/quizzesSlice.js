import { createSlice } from '@reduxjs/toolkit';
import { addQuizIdsForTopic } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
        }
    }
});
// 'quizzes/addQuizIdsForTopicId'
export const addQuizIdsForTopicId = (quiz) => {
    const { topicId, quizId } = quiz;
    return dispatch => {
        // const quizzes = addQuizIdsForTopic(quiz);
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizIdsForTopic({ topicId: topicId, quizId: quizId }))
    }
}

// export const addQuizForTopicId = (quiz) => {
//     const { topicId, id } = quiz;
//     return (dispatch) => {
//       dispatch(quizzesSlice.actions.addQuiz(quiz));
//       dispatch(addQuizIdForTopic({ topicId: topicId, quizId: id }));
//     };
//   };

export const { addQuiz } = quizzesSlice.actions;
export const selectQuiz = state => state.quizzes.quizzes;
export default quizzesSlice.reducer;

// { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}