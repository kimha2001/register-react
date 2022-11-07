import { configureStore } from "@reduxjs/toolkit";
import RegisterReducer from "./RegisterSlide";
export const store = configureStore({
    reducer: { register: RegisterReducer },
});
