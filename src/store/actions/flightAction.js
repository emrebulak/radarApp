import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { turkeyParams } from "../../constant";

export const getFlights = createAsyncThunk('flights/getFlights', async () => {

    
        const response = await api.get('/list-in-boundary', { params: turkeyParams });

        const formatted = response.data.aircraft.map((item) => ({
            id: item[0],
            code: item[1],
            lat: item[2],
            lng: item[3],
        }));

        return formatted;


});