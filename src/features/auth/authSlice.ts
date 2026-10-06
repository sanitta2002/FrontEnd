import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  isGuest: boolean;
}

const getInitialAuthState = (): AuthState => {
  const storedAuth = localStorage.getItem("hush-lush-auth");

  if (storedAuth) {
    return JSON.parse(storedAuth) as AuthState;
  }

  return {
    isAuthenticated: false,
    isGuest: false,
  };
};

const initialState: AuthState = getInitialAuthState();

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true;
      state.isGuest = false;

      localStorage.setItem(
        "hush-lush-auth",
        JSON.stringify(state),
      );
    },

    guestLogin: (state) => {
      state.isAuthenticated = true;
      state.isGuest = true;

      localStorage.setItem(
        "hush-lush-auth",
        JSON.stringify(state),
      );
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.isGuest = false;

      localStorage.removeItem("hush-lush-auth");
    },
  },
});

export const {
  loginSuccess,
  guestLogin,
  logout,
} = authSlice.actions;

export default authSlice.reducer;