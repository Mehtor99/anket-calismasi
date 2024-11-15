import { configureStore } from "@reduxjs/toolkit";
import { tagSlice } from "./feature";
import { useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        tag: tagSlice
    }
});

export default store;
export type TagDispatch= typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();