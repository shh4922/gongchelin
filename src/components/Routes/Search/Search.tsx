import React, { useEffect, useState } from 'react';
import "./search.css"
import { Map, MapMarker, useMap, CustomOverlayMap } from 'react-kakao-maps-sdk';

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
    const [selectedStore, setSelectedStore] = useState<number>(0)

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


    const EventMarkerContainer: React.FC<MapMarkerProps & { index: number } & { selectedIndex: number } & { clickEvent: () => void }> = ({ store, index, selectedIndex, clickEvent }) => {
        const map = useMap()
        const [isVisible, setIsVisible] = useState(false)

        const handleClickMarker = (marker: kakao.maps.Marker) => {
            map.panTo(marker.getPosition())
            clickEvent()
        }

        function linkToImage(link: string) {
            const videoIdMatch = link.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);

            if (videoIdMatch && videoIdMatch[1]) {
                const videoId = videoIdMatch[1];
                return `https://i1.ytimg.com/vi/${videoId}/mqdefault.jpg`
            } else {
                console.log("YouTube 동영상 ID를 찾을 수 없습니다.");
            }
        }

        const returnMarker = () => {
            if (selectedIndex === index) {
                return (
                    // <div className='clicked-marker'>
                    //     <p>{store.storeName}</p>
                    //     <p>{store.address}</p>
                    //     <img src={linkToImage(store.youtubeLink)} loading='lazy'></img>
                    // </div>
                    <>
                        <p>{store.storeName}</p>
                        <p>{store.address}</p>
                        <img src={linkToImage(store.youtubeLink)} loading='lazy'></img>
                    </>


                )
            }
            // else if (isVisible) {
            //     return (
            //         <p>{store.storeName}</p>
            //     )
            // }
            return null
        }

        // NOTE 맵마커 오버레이 수정
        return (
            <MapMarker
                position={{ lat: store.y, lng: store.x }} // 마커를 표시할 위치
                // @ts-ignore
                onClick={handleClickMarker}

                onMouseOver={() => setIsVisible(true)}
                onMouseOut={() => setIsVisible(false)}
            >
                {
                    returnMarker()
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
