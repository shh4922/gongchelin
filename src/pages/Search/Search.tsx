import "./search.scss"
import React, { useEffect } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import EventMarkerContainer from '../../components/MapMarker/EventMarkerContainer';
import SelectedDetail from '../../components/DetailInfo/SelectedDetail';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setMetaTags } from '../../metatag/meta';
import { fetchStores, handleCategoryChange, handleYoutuberChange, handleSearchInput, handleClickMap } from '../../redux/slice/mapSlice'; // Import actions and thunks
import { useAppDispatch, useAppSelector } from '../../redux/store';
import MobileNavTop from "../../components/MobileNavTop/MobileNavTop";

// NOTE 현재위치 받아와서 카카오맵으로 이동경로 보여주기.
function Search() {
    const { stores, filteredCategory, filteredYoutuber, searchInput } = useAppSelector((state) => state.map);

    const dispatch = useAppDispatch()

    useEffect(() => {
        setMetaTags({
            title: "유튜버 맛집 지도",
            description: "유튜버들이 소개한 맛집정보를 제공합니다",
            imageUrl: ""
        })
        dispatch(fetchStores())
    }, [dispatch])

    // 카테고리 필터링
    const onChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(handleCategoryChange(event.target.value))
    };
    // 유튜버 필터링
    const onChangeYoutuber = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(handleYoutuberChange(event.target.value))
    };
    // 검색 필터링
    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(handleSearchInput(event.target.value))
    }

    return (
        <article className="Search">

            <section className={`aside-content`}>
                <div className='search-input'>
                    <input value={searchInput} onChange={onChangeSearch} placeholder='음식종류를 입력하세요'></input>
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </div>
                <select onChange={onChangeYoutuber}>
                    <option value="">모든유튜버</option>
                    <option value="Gongchelin">공혁준</option>
                    <option value="Foogja">또간집</option>
                </select>
                <select onChange={onChangeCategory}>
                    <option value="">전체</option>
                    <option value="한식">한식</option>
                    <option value="중식">중식</option>
                    <option value="일식">일식</option>
                    <option value="양식">양식</option>
                    <option value="아시아">아시아</option>
                    <option value="구이">고기</option>
                    <option value="해물">해물</option>
                    <option value="분식">분식</option>
                    <option value="면">면</option>
                    <option value="디저트">디저트</option>
                </select>
            </section>
            <MobileNavTop/>
            <section className='search-body'>
                <Map
                    style={{ width: "100%", height: "100%" }}
                    minLevel={12}
                    className='search-map'
                    center={{ lng: 126.762765, lat: 37.6703077 }}
                    onClick={() => { dispatch(handleClickMap()) }}>

                    {
                        stores.map((store) => {
                            const isFilteredByYoutuber = !filteredYoutuber || store.youtuberName === filteredYoutuber;
                            const isFilteredByCategory = !filteredCategory || store.category === filteredCategory;
                            if (isFilteredByYoutuber && isFilteredByCategory) {
                                if (!searchInput || store.eatedFood.includes(searchInput)) {
                                    return (
                                        <EventMarkerContainer key={store.storeName} myStore={store} />
                                    );
                                }
                            } else {
                                return null;
                            }
                        })
                    }
                </Map>
                <SelectedDetail />
            </section>
            
        </article>
    );
}

export default Search;

