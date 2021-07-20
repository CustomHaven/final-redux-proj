import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from "../topics/topicsSlice";

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
export const addQuizThunk = (quiz) => {
    const { topicId, quizId } = quiz;
    return dispatch => {
        // const quizzes = addQuizIdsForTopic(quiz);
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizId({ topicId: topicId, id: quizId }));
    }
}





export const { addQuiz } = quizzesSlice.actions;
export const selectQuiz = state => state.quizzes.quizzes;
export default quizzesSlice.reducer;

// { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}



// addQuiz: (state, action) => {
//     const { id, name, topicId, cardIds } = action.payload;
//     state.quizzes[id] = {
//       id: id,
//       name: name,
//       topicId: topicId,
//       cardIds: []
//     }
// }