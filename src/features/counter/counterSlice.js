import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPrice: 2.1,
  consumption: 5.5,
  distance: 100,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increaseCurrentPrice: (state) => {
      state.currentPrice += 0.05;
    },
    decreaseCurrentPrice: (state) => {
      state.currentPrice -= 0.05;
      if (state.currentPrice < 0) {
        state.currentPrice = 0;
      }
    },
    increaseConsumption: (state) => {
      state.consumption += 0.1;
    },
    decreaseConsumption: (state) => {
      state.consumption -= 0.1;
      if (state.consumption < 0) {
        state.consumption = 0;
      }
    },
    increaseDistance: (state) => {
      state.distance += 5;
    },
    decreaseDistance: (state) => {
      state.distance -= 5;
      if (state.distance < 0) {
        state.distance = 0;
      }
    },
  },
});

export const currentPriceSelector = (state) => state.counter.currentPrice;
export const consumptionSelector = (state) => state.counter.consumption;
export const distanceSelector = (state) => state.counter.distance;

export default counterSlice.reducer;
