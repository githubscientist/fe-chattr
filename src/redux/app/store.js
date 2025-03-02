import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/auth/registerSlice";
import loginReducer from "../features/auth/loginSlice";
import createPostReducer from "../features/post/createPostSlice";

const store = configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
        createPost: createPostReducer
    }
});

export default store;