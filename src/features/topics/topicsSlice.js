import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
        const { id, name, icon } = action.payload;
        state.topics[id] = {
            id: id,
            name: name,
            icon: icon,
            quizIds: []
        }
    },
    addQuizId: (state, action) => {
      const { topicId, quizId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
});
console.log(topicsSlice.initialState)
// console.log(topicsSlice);
export const { addTopic, addQuizId } = topicsSlice.actions
export const selectTopics = (state) => state.topics.topics;
// console.log(selectTopics);
export default topicsSlice.reducer;

