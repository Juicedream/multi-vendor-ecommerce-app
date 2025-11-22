import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

// Admin login reducer
export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    // console.log(payload);
    try {
      const { data } = await api.post("/admin-login", payload, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", data.token); // saving to local storage so we can use it
      return fulfillWithValue(data);
    } catch (error) {
      // console.log(error.response.data)
      return rejectWithValue(error.response.data);
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
  reducers: {
    messageClear: (state) => {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(admin_login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(admin_login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMessage = payload.error;
      })
      .addCase(admin_login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.successMessage = payload.message;
      });
  },
});
export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
