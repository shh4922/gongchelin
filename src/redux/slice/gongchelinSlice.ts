import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import storesInfo from "../../Models/storesInfo";
import { getFoogja, getGongchelin } from "../../db/firebase";

interface SearchState {
    stores: storesInfo[];
    selectedStore: storesInfo | null;
    filteredCategory: string;
    filteredYoutuber: string;
    searchInput: string;
}

const initialState: SearchState = {
    stores: [],
    selectedStore: null,
    filteredCategory: '',
    filteredYoutuber: '',
    searchInput: '',
};

export const fetchGongchelin = createAsyncThunk(
    'fetchGongchelin',
    async () => {
        try {
            const  gongchelin = await getGongchelin()
            const gongchelinResult: storesInfo[] =  gongchelin
            return gongchelinResult
        } catch (error) {
            return Promise.reject(error);
        }
    }
);

const gongchelinSlice  = createSlice({
    name: 'gongchelinSlice',
    initialState,
    reducers: {
        handleCategoryChange: (state, action) => {
            state.filteredCategory = action.payload;
        },
        handleYoutuberChange: (state, action) => {
            state.filteredYoutuber = action.payload;
        },
        handleSearchInput: (state, action) => {
            state.searchInput = action.payload;
        },
        handleClickMap: (state) => {
            state.selectedStore = null;
            console.log(state.selectedStore)
        },
        setSelectedStore: (state, action) => {
            state.selectedStore = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGongchelin.fulfilled, (state, action) => {
            state.stores = action.payload; // 새로운 데이터로 상태를 업데이트합니다.
        });
    },
})
export const {
    handleCategoryChange,
    handleYoutuberChange,
    handleSearchInput,
    handleClickMap,
    setSelectedStore,
} = gongchelinSlice.actions;

export default gongchelinSlice.reducer;