import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import api from "../../api/api";

// Admin login reducer
export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (payload) => {
    console.log(payload)
    try {
    //   const { data } = await api.post("/admin-login", payload, {
    //     withCredentials: true,
    //   });
    //   console.log({ data })
    } catch (error) {
        console.log(error.message)
    }
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    isLoading: false,
    userInfo: "",
  },
  reducers: {},
  extraReducers: () => {},
});

export default authReducer.reducer;
