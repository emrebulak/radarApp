import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions/flightAction";

const initialState = {
    isLoading: false,
    error: null,
    flights: [],
}

const flightSlice =  createSlice({
    name: "flight",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFlights.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getFlights.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.flights = action.payload;
        });

        builder.addCase(getFlights.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
     }
})

export default flightSlice.reducer;