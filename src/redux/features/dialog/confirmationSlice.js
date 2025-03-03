import { createSlice } from '@reduxjs/toolkit';

export const confirmationSlice = createSlice({
    name: 'confirmation',
    initialState: {
        isOpen: false,
        message: "",
        actionType: null,
        postId: null,
    },
    reducers: {
        openDialog: (state, action) => {
            state.isOpen = true;
            state.message = action.payload.message;
            state.actionType = action.payload.actionType;
            state.postId = action.payload.postId;
        },
        closeDialog: (state) => {
            state.isOpen = false;
            state.message = "";
            state.actionType = null;
            state.postId = null;
        },
    },
});

export const { openDialog, closeDialog } = confirmationSlice.actions;

export default confirmationSlice.reducer;