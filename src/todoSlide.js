import { createSlice } from "@reduxjs/toolkit";

const todoSlide = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        add(state, action) {
            const todo = {
                id: action.payload.id,
                text: action.payload.text,
            }
            state.push(action.payload)
        },
        update(state, action) {
            const updatedTodo = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                  return {...todo, name: action.payload.name};
                }                       
                return todo;
              });
            state.todos = updatedTodo
        },
        remove(state, action) {
            state.todos.filter(todo => todo.id != action.payload)
        }
    }
})

export const {add, update, remove} = todoSlide.actions;

export default todoSlide.reducer;
