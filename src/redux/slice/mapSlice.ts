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

export const fetchStores = createAsyncThunk(
    'fetchStores',
    async () => {
        try {
            const [gongChelin, foogja] = await Promise.all([
                getGongchelin(),
                getFoogja()
            ]);
    
            const combineData: storesInfo[] = [...gongChelin, ...foogja];
            return combineData
        } catch (error) {
            return Promise.reject(error);
        }
    }
);

const mapSlice = createSlice({
    name: 'map',
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
        builder.addCase(fetchStores.fulfilled, (state, action) => {
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
} = mapSlice.actions;

export default mapSlice.reducer;