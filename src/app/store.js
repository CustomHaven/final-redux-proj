import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicsSlice'
import quizzesReducer from '../features/quizzes/quizzesSlice'

// console.log(topicsReducer)
export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer
  },
});
