import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    password: "",
    loggedIn: false,
    userName: "",
    shopItems: [],
    createUsers: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.loggedIn = true;
      state.userName = action.payload.userName;
    },
    createUser: (state, action) => {
      state.createUsers = [...state.createUsers, action.payload];
    },
    logoutUser: (state) => {
      state.email = "";
      state.password = "";
      state.loggedIn = false;
      state.userName = "";
    },
    addShopItem: (state, action) => {
      state.shopItems = [...state.shopItems, action.payload];
    },
    deleteShopItem: (state, action) => {
      state.shopItems = state.shopItems.filter(
        (item, index) => index !== action.payload
      );
    },
  },
});

export const { setUser, createUser, logoutUser, addShopItem, deleteShopItem } =
  userSlice.actions;

export default userSlice.reducer;
