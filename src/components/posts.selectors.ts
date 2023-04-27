import { RootState } from "../types/state";

export const getAllFavoritesSelector = (state: RootState) =>
  state.posts.post_Ids;
