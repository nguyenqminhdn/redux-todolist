import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlide'
//import rootReducer from './reducers'

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store