import React, { useEffect, useState } from 'react';
import "./search.css"
import { Map } from 'react-kakao-maps-sdk';
import { db } from '../../../db/firebase';
import { get, child, ref } from "firebase/database"
import storesInfo from '../../../Models/\bstoresInfo';
import EventMarkerContainer from '../../MapMarker/EventMarkerContainer';
import SelectedDetail from '../../DetailInfo/SelectedDetail';

interface MapMarkerProps {
    store: storesInfo;
}

function Search() {

    const [stores, setStores] = useState<storesInfo[]>([])
    const [selectedStore, setSelectedStore] = useState<number | null>(null)
    const [filteredStore, setFilteredStore] = useState<number | null>(null)
    const [filteredCategory, setFilteredCategory] = useState<string>(""); // 1. 선택된 카테고리를 저장하는 state 추가

    useEffect(() => {
        getStores()
    }, [])

    const getStores = async () => {
        const snapshot = await get(child(ref(db), `GonhchelinMap`))
        if (snapshot.exists()) {
            const result = snapshot.val()
            await setStores(Object.values(result))
        } else {
            console.log("No data available");
        }
    }

    // 카테고리 필터링
    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilteredCategory(event.target.value);
    };

    // 마커없는 맵 클릭
    const handleClickMap = () => {
        setSelectedStore(null)
    }

    return (
        <div className="Search">
            <h2>공슐랭 리스트</h2>
            <section className='search-head'>
                {/* <input placeholder='상호명 또는 메뉴를 검색해주세요'></input> */}
                <div className='mobile-button'>
                    {/* <button>검색</button> */}
                    <select onChange={handleCategoryChange}>
                        <option value="">전체</option>
                        <option value="한식">한식</option>
                        <option value="중식">중식</option>
                        <option value="일식">일식</option>
                        <option value="구이">구이</option>
                        <option value="분식">분식</option>
                        <option value="면">면</option>
                    </select>
                </div>
            </section>

            <section className='search-body'>
                <Map
                    className='search-map'
                    center={{ lat: 37.6703077, lng: 126.762765 }}
                    style={{ width: "100%", height: "70vh" }}
                    onClick={handleClickMap}
                >
                    {
                        stores.map((store, index) => {
                            if (!filteredCategory || store.category === filteredCategory) {
                                return (
                                    <EventMarkerContainer key={store.storeName} store={store} index={index} selectedIndex={selectedStore} clickEvent={() => setSelectedStore(index)} />
                                );
                            } else {
                                return null;
                            }
                        })
                    }
                </Map>
                <div className='search-detail'>
                    <SelectedDetail stores={stores} selectedStore={selectedStore} />
                </div>
            </section>
        </div>
    );
}

export default Search;
