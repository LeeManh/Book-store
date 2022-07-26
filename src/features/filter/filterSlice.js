import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  rate: "",
  prices: "",
  sort: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    categoryChange(state, action) {
      state.category = action.payload;
    },
    rateChange(state, action) {
      state.rate = action.payload;
    },
    pricesChange(state, action) {
      state.prices = action.payload;
    },
    sortChange(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { categoryChange, rateChange, pricesChange, sortChange } =
  filterSlice.actions;

export const selectFilter = (state) => state.filter;

export const selectFilterCategory = (state) => state.filter.category;

export const selectFilterRate = (state) => state.filter.rate;

export const selectFilterPrices = (state) => state.filter.prices;

export const selectFilterSearch = (state) => state.filter.search;

export const selectFilterSort = (state) => state.filter.sort;

export default filterSlice.reducer;
