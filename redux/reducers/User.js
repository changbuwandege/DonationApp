import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  profileImage:
    'http://img.520touxiang.com/uploads/allimg/2018122110/11zy4exhclj-lp.jpg',
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    resetToInitialState: () => {
      return initialState;
    },
    logIn: (state,action) => {
      return{...state, ...{isLoggedIn: true}, ...action.payload};
    },
  },
});
//给dispatch暴露action，用于更改当前的状态
export const {logIn, resetToInitialState} = User.actions;
//给外界暴露，便于进行集中管理
export default User.reducer;
