import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo, index) => index !== action.payload);
    },
    doneTodo: (state, action) => {
      state[action.payload].done = !state[action.payload].done;
    },
  },
});

export const { addTodo, deleteTodo, doneTodo } = todosSlice.actions;
export default todosSlice.reducer;