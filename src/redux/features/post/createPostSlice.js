import { createSlice } from "@reduxjs/toolkit";

export const createPostSlice = createSlice({
    name: "createPost",
    initialState: {
        title: "",
        content: ""
    },
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setContent: (state, action) => {
            state.content = action.payload;
        }
    }
});

export const { setTitle, setContent } = createPostSlice.actions;

export const selectTitle = state => state.createPost.title;
export const selectContent = state => state.createPost.content;

export default createPostSlice.reducer;