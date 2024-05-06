import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mapReducer from './slice/mapSlice'; // Import your search reducer
import myLocationReducer from "./slice/myLocationSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import gongchelinReducer from './slice/gongchelinSlice';


const rootReducer = combineReducers({
    map: mapReducer,
    myLocation: myLocationReducer,
    gongchelin: gongchelinReducer
})

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
