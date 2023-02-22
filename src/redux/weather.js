import { createSlice } from "@reduxjs/toolkit";

const initialState={
    weather:['abd']
}

const weatherSlice = createSlice({
    name:'weather',
    initialState,
    reducers:{
        updateWeather(state,action){

        }

    }
})

export const {updateWeather} = weatherSlice.actions;
export default weatherSlice.reducer;