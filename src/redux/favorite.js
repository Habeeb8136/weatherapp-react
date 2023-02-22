import { createSlice } from "@reduxjs/toolkit";

const initialState={
    fav:[{
        "coord": {
            "lon": 77.2167,
            "lat": 28.6667
        },
        "weather": [
            {
                "id": 721,
                "main": "Haze",
                "description": "haze",
                "icon": "50d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 24.05,
            "feels_like": 24.42,
            "temp_min": 24.05,
            "temp_max": 24.05,
            "pressure": 1013,
            "humidity": 73
        },
        "visibility": 1500,
        "wind": {
            "speed": 2.06,
            "deg": 250
        },
        "clouds": {
            "all": 20
        },
        "dt": 1677056490,
        "sys": {
            "type": 1,
            "id": 9165,
            "country": "IN",
            "sunrise": 1677029041,
            "sunset": 1677069944
        },
        "timezone": 19800,
        "id": 1273294,
        "name": "Delhi",
        "cod": 200
    }],
    

}

const favSlice = createSlice({
    name:'favorite',
    initialState,
    reducers:{
        addToFav(state,action){
            const Index= state.fav.findIndex(fav=>fav.name===action.payload.name)
            console.log(Index)
            if(Index===-1){
                const temp={
                    ...action.payload,
                    favStatus:true,
                }
                state.fav.push(temp)
            }
            
    },
    removeFromFav(state,action){
        const cartItemsAfterRemove = state.fav.filter(
            item => item.name !== action.payload.name);
        state.fav=cartItemsAfterRemove;                
    }
    }
})

export const {addToFav,removeFromFav} = favSlice.actions;
export default favSlice.reducer;