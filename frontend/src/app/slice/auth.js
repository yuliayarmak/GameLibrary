import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "../../features/counter/counterAPI";

const getTokenFromStorage = () => {
  console.log(window.localStorage.getItem("token"));
  return window.localStorage.getItem("token");
};

const initialState = {
  token: getTokenFromStorage(),
  user: JSON.parse(localStorage.getItem("user")),
  isAutorized: getTokenFromStorage() ? true : false,
};
export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isAutorized = true;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount, getUser } = authSlice.actions;

export const ourToken = (state) => state.auth.isAutorized;

export const setUser = (newToken) => (dispatch) => {
  dispatch(getUser(newToken));
};

export default authSlice.reducer;
