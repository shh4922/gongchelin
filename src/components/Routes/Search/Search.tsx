import React, { useEffect, useState } from 'react';
import "./search.css"
import { Map, MapMarker, useMap, CustomOverlayMap } from 'react-kakao-maps-sdk';

import { db, ref } from '../../../db/firebase';
import { set, get, child } from "firebase/database"

import storesInfo from '../../../Models/\bstoresInfo';
import EventMarkerContainer from '../../MapMarker/EventMarkerContainer';
import { getLargeThumbnail } from '../../../share/youtube';
import SelectedDetail from '../../DetailInfo/SelectedDetail';

interface MapMarkerProps {
    store: storesInfo;
}

function Search() {

    const [stores, setStores] = useState<storesInfo[]>([])
    const [selectedStore, setSelectedStore] = useState<number | null>(null)

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

    const handleClickMap = () => {
        setSelectedStore(null)
    }


    return (
        <div className="Search">
            <h2>공슐랭 리스트</h2>
            <section className='search-head'>
                {/* <input placeholder='상호명 또는 메뉴를 검색해주세요'></input>
                <div className='mobile-button'>
                    <button>검색</button>
                    <select>
                        <option value="">전체</option>
                        <option value="dog">한식</option>
                        <option value="cat">중식</option>
                        <option value="parrot">양식</option>
                        <option value="hamster">일식</option>
                        <option value="spider">회</option>
                        <option value="goldfish">구이</option>
                    </select>
                </div> */}
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
                            return (
                                <>
                                    <EventMarkerContainer key={store.storeName} store={store} index={index} selectedIndex={selectedStore} clickEvent={() => setSelectedStore(index)} />
                                </>
                            )
                        })
                    }
                </Map>
                <div className='search-detail'>
                    <SelectedDetail  stores={stores} selectedStore={selectedStore}/>                    
                </div>
            </section>
        </div>
    );
}

export default Search;
