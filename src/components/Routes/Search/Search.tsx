import React, { useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { db } from '../../../db/firebase';
import { get, child, ref } from "firebase/database"
import storesInfo from '../../../Models/\bstoresInfo';
import EventMarkerContainer from '../../MapMarker/EventMarkerContainer';
import SelectedDetail from '../../DetailInfo/SelectedDetail';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./search.scss"

// TODO 배열들 받아와서 allofStore에 저장해야함.
// TODO State에 배열 넣어서 컨트롤하는법 찾아보기.
function Search() {

    const [stores, setStores] = useState<storesInfo[]>([]) // 모든식당정보
    const [selectedStore, setSelectedStore] = useState<storesInfo | null>(null) // 선택한 식당정보
    const [filteredCategory, setFilteredCategory] = useState<string>(""); // 카테고리 default는 전체
    const [filteredYoutuber, setFilteredYoutuber] = useState<string>("")

    useEffect(() => {
        fetchStores()
    }, [])

    const fetchStores = async () => {
        try {
            const [gongChelin, foogja] = await Promise.all([
                getGongchelin(),
                getFoogja()
            ]);

            const combineData: storesInfo[] = [...gongChelin, ...foogja];
            setStores(combineData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // fetch() 공혁준데이터
    const getGongchelin = async (): Promise<storesInfo[]> => {
        const snapshot = await get(child(ref(db), `Gongchelin`))
        if (snapshot.exists()) {
            const result = snapshot.val()
            return Object.values(result)
        } else {
            console.log("No data available");
            return []
        }
    }

    // fetch() 풍자데이터
    const getFoogja = async (): Promise<storesInfo[]> => {
        const snapshot = await get(child(ref(db), `Foogja`))
        if (snapshot.exists()) {
            const result = snapshot.val()
            return Object.values(result)
        } else {
            console.log("No data available");
            return []
        }
    }

    // 카테고리 필터링
    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilteredCategory(event.target.value);
    };
    // 유튜버 필터링
    const handleYoutuberChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilteredYoutuber(event.target.value);
    };

    const showFilteredMap = (store: storesInfo) => {
        // 모두일경우
        // 유튜버만 선택
        // 모두 필터
        if (!filteredYoutuber || store.youtuberName === filteredYoutuber) {

        }
        if (!filteredYoutuber || !filteredCategory || store.youtuberName === filteredYoutuber || store.category === filteredCategory) {
            return (
                <EventMarkerContainer key={store.storeName} myStore={store} selectedStore={selectedStore} markerClickEvent={() => setSelectedStore(store)} />
            );
        } else {
            return null;
        }
    }

    // 마커없는 맵 클릭
    const handleClickMap = () => {
        setSelectedStore(null)
    }

    return (
        <article className="Search">
            <section className='search-option'>
                <select onChange={handleYoutuberChange}>
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
                        stores.map((store) => {
                            const isFilteredByYoutuber = !filteredYoutuber || store.youtuberName === filteredYoutuber;
                            const isFilteredByCategory = !filteredCategory || store.category === filteredCategory;

                            if (isFilteredByYoutuber && isFilteredByCategory) {
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