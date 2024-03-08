import React, { useEffect, useState } from 'react';
import "./search.css"
import { Map, MapMarker, useMap, } from 'react-kakao-maps-sdk';

import { db, ref } from '../../../db/firebase';
import { set, get, child } from "firebase/database"
import { error } from 'console';
import storesInfo from '../../../Models/\bstoresInfo';

interface MapMarkerProps {
    store: storesInfo;
  }

function Search() {
    
    useEffect(() => {
        fetch()
    }, [])
    
    const [stores, setStores] = useState<storesInfo[]>([])

    const write = () => {
        console.log(stores)
        // set(ref(db, `GonhchelinMap/${"대박각"}`), {
        //     storeName: "대박각",
        //     address: "경기 고양시 일산서구 강성로 115 금강빌딩 115호",
        //     x: 126.762765,
        //     y: 37.6703077,
        //     youtubeLink: "https://www.youtube.com/watch?v=qi9QonkfgAA&t=583s",
        //     category: "중식"
        // });
    }
    
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

    

    const EventMarkerContainer: React.FC<MapMarkerProps>= ({store}) => {
        const map = useMap()
        const [isVisible, setIsVisible] = useState(false)
        const [isShow, setIsShow] = useState(false)
        const handleMarkerClick = (marker: any) => {
            map.panTo(marker.getPosition())
            setIsShow(true)
            console.log(isShow)
        }
        return (
            <MapMarker
                position={{ lat: store.y, lng: store.x }} // 마커를 표시할 위치
                // @ts-ignore
                // onClick={(marker) => map.panTo(marker.getPosition())}
                onClick={handleMarkerClick}
                onMouseOver={() => setIsVisible(true)}
                onMouseOut={() => setIsVisible(false)}
            >
                {isVisible && 
                <div>
                    <p>{store.storeName}</p>
                </div>
                }
            </MapMarker>
        )
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
                <button onClick={write}>검색</button>

            </section>

            <Map
                center={{ lat: 37.6703077, lng: 126.762765 }}
                style={{ width: "100%", height: "70vh" }}
            >
                {
                    stores.map((store) => {
                        return (<EventMarkerContainer store={store}/>)
                    })
                }
                
            </Map>
        </div>
    );
}

export default Search;
