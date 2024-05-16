import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: ''
};

export const searchEquipmentSlice = createSlice({
  name: 'equipment',
  initialState,
  reducers: {
    searchEquipment: (state, action) => {
      state.search = action.payload;
    },
    clearSearch: state => {
      state.search = '';
    }
  }
});

// Action creators are generated for each case reducer function
export const { searchEquipment, clearSearch } = searchEquipmentSlice.actions;

export default searchEquipmentSlice.reducer;
