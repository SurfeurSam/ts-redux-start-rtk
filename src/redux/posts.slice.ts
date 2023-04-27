import { createSlice } from "@reduxjs/toolkit"
import { stateType } from "../types/state";

const initialState: stateType = {
   post_Ids: [],
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addToFavor: (state, action) =>
        (state = { ...state, post_Ids: [...state.post_Ids, action.payload] }),
        delFromFavor: (state, action) => 
        (state = {
            ...state,
            post_Ids: state.post_Ids.filter((el) => el !== action.payload),
        }),
    },
});

export const { addToFavor, delFromFavor } = postsSlice.actions;
export default postsSlice.reducer;
