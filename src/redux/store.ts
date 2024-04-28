import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mapReducer from '../redux/mapSlice'; // Import your search reducer
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


const rootReducer = combineReducers({
    map: mapReducer
})

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
