import React, { useEffect, useState } from 'react';
// import "./search.css"
import { Map } from 'react-kakao-maps-sdk';
import { db } from '../../../db/firebase';
import { get, child, ref } from "firebase/database"
import storesInfo from '../../../Models/\bstoresInfo';
import EventMarkerContainer from '../../MapMarker/EventMarkerContainer';
import SelectedDetail from '../../DetailInfo/SelectedDetail';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./search.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// TODO 배열들 받아와서 allofStore에 저장해야함.
// TODO State에 배열 넣어서 컨트롤하는법 찾아보기.
function Search() {

    const [stores, setStores] = useState<storesInfo[]>([]) // 모든식당정보
    const [selectedStore, setSelectedStore] = useState<storesInfo | null>(null) // 선택한 식당정보
    const [filteredCategory, setFilteredCategory] = useState<string>(""); // 카테고리 default는 전체

    useEffect(() => {
        getStores()
    }, [])

    const getStores = async () => {
        getGongchelin()
        // getFoogja()
    }

    const getGongchelin = async () => {
        const snapshot = await get(child(ref(db), `Gongchelin`))
        if (snapshot.exists()) {
            const result = snapshot.val()
            await setStores(Object.values(result))
        } else {
            console.log("No data available");
        }
    }
    const getFoogja = async () => {
        const snapshot = await get(child(ref(db), `Foogja`))
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
        <article className="Search">
            <section className='search-option'>
                <select>
                    <option value="">모든유튜버</option>
                    <option value="공혁준">공혁준</option>
                    <option value="풍자">또간집</option>
                </select>
                <select onChange={handleCategoryChange}>
                    <option value="">전체</option>
                    <option value="한식">한식</option>
                    <option value="중식">중식</option>
                    <option value="일식">일식</option>
                    <option value="구이">구이</option>
                    <option value="분식">분식</option>
                    <option value="면">면</option>
                </select>


                <div className='search-input'>
                    <input></input>
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </div>

            </section>

            <section className='search-body'>
                <Map
                    className='search-map'
                    center={{ lat: 37.6703077, lng: 126.762765 }}
                    style={{ width: "100%", height: "80vh" }}
                    onClick={handleClickMap}
                >
                    {
                        stores.map((store, index) => {
                            if (!filteredCategory || store.category === filteredCategory) {
                                return (
                                    <EventMarkerContainer key={store.storeName} myStore={store} selectedStore={selectedStore} markerClickEvent={() => setSelectedStore(store)} />
                                );
                            } else {
                                return null;
                            }
                        })
                    }
                </Map>

                <SelectedDetail selectedStore={selectedStore} />

            </section>
        </article>
    );
}

export default Search;