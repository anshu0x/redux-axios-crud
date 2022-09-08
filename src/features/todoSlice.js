import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");
const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const todoSlide = createSlice({
  name: "todo",
  initialState: {
    data: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.data.push(action.payload);
    },
    getTodo: (state, action) => {
      state.data = [action.payload];
    },
  }
});

export const putTodoAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/${data}`);
    dispatch(getTodo(response.data));
    console.log(response.data);
  } catch (err) {
    throw new Error(err);
  }
};
export const deleteTodoAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/${data}`);
    dispatch(getTodo(response.data));
    console.log(response.data);
  } catch (err) {
    throw new Error(err);
  }
};
export const getTodoAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/${data}`);
    console.log(response.data);
    dispatch(getTodo(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const addTodoAsync = (data) => async (dispatch) => {
  try {
    // console.log(data);
    const response = await axios.post(API_URL, data);
    dispatch(addTodo(response.data));
    console.log(response.data);
  } catch (err) {
    throw new Error(err);
  }
};

export const { addTodo, getTodo,removeTodo} = todoSlide.actions;
export const showTodo = (state) => state.todo.data;
export default todoSlide.reducer;
