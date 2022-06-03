/** @format */
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "learning redux toolkit",
    content: "i've heard good things about it",
  },
  {
    id: 2,
    title: "learning nextjs",
    content: "i've heard great things about it",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});


export default postsSlice.reducer;
