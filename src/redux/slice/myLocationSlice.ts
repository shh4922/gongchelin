import { createSlice } from "@reduxjs/toolkit";

interface myLocation {
    myX: number|null
    myY: number|null
}
// {{ lng: myX ?? 37.6703077, lat: myY ?? 126.762765 }}
const initialState: myLocation = {
    myX: 126.762765,
    myY: 37.6703077
}
const myLocationSlice = createSlice({
    name: 'myLocation',
    initialState,
    reducers: {
        setMyLocation: (state, action) => {
            console.log("set myLocation run!")
            state.myX = action.payload.longitude;
            state.myY = action.payload.latitude;
        },
    },
})

export const {
    setMyLocation
} = myLocationSlice.actions;

export default myLocationSlice.reducer;