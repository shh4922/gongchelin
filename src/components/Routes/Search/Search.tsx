import React, { useEffect, useState } from 'react';
import "./search.css"
import { Map, MapMarker, useMap, CustomOverlayMap } from 'react-kakao-maps-sdk';

import { db, ref } from '../../../db/firebase';
import { set, get, child } from "firebase/database"
import { error } from 'console';
import storesInfo from '../../../Models/\bstoresInfo';
import EventMarkerContainer from '../../MapMarker/EventMarkerContainer';
import CustomMapMarker from '../../Map/CustomMapMarker';


interface MapMarkerProps {
    store: storesInfo;
}

function Search() {

    useEffect(() => {
        fetch()
    }, [])

    const [stores, setStores] = useState<storesInfo[]>([])
    const [selectedStore, setSelectedStore] = useState<number|null>(null)

    const fetch = async () => {
        const snapshot = await get(child(ref(db), `GonhchelinMap`))
        if (snapshot.exists()) {
            console.log(snapshot.val());
            const result = snapshot.val()

            await setStores(Object.values(result))
        } else {
            console.log("No data available");
        }
    }

    const handleClickMap = () => {
        console.log("mapClick!")
        setSelectedStore(null)
    }
    const handleMapMarker = (index: number) => {
        setSelectedStore(index)
        console.log("마커 클릭!")
    }

    return (
        <div className="Search">
            <h2>공슐랭 리스트</h2>

            <section className='search-head'>
                <input placeholder='상호명 또는 메뉴를 검색해주세요'></input>
                <select>
                    <option value="">전체</option>
                    <option value="dog">한식</option>
                    <option value="cat">중식</option>
                    <option value="parrot">양식</option>
                    <option value="hamster">일식</option>
                    <option value="spider">회</option>
                    <option value="goldfish">구이</option>
                </select>
                <button>검색</button>
            </section>

            <Map
                className='search-map'
                center={{ lat: 37.6703077, lng: 126.762765 }}
                style={{ width: "100%", height: "85vh" }}
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
        </div>
    );
}

export default Search;
