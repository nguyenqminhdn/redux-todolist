import { createSlice } from "@reduxjs/toolkit";

const todoSlide = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        add(state, action) {
            state.todos.push(action.payload)
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
        delete(state, action) {
            state.todos.filter(todo => todo.id != action.payload)
        }
    }
})
