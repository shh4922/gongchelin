import React, { useState } from 'react';
import { MapMarker, useMap, CustomOverlayMap, MarkerClusterer } from 'react-kakao-maps-sdk';
import storesInfo from '../../Models/\bstoresInfo';
import { getThumbnail } from '../../share/youtube';
import "./mapmarker.scss"
import { useDispatch } from 'react-redux';
import { handleClickMap, setSelectedStore } from '../../redux/slice/mapSlice'; // Import actions and thunks
import { useAppSelector } from '../../redux/store';

interface MapMarkerProps {
    myStore: storesInfo,
}

const EventMarkerContainer: React.FC<MapMarkerProps> = ({ myStore }) => {

    const map = useMap()
    const [isNameVisible, setIsVisible] = useState(false)

    const { selectedStore } = useAppSelector((state) => state.map);
    const dispatch = useDispatch()

    const handleClickMarker = (marker: kakao.maps.Marker) => {
        dispatch(setSelectedStore(myStore))
        map.panTo(marker.getPosition())
    }

    const mouseOver = () => { setIsVisible(true) }
    
    const moveToKakaoMap = () => {
        window.location.replace(`kakaomap://search?q=${selectedStore?.storeName}&p=${selectedStore?.y},${selectedStore?.x}`);
    }

    const isShow = () => {
        if (isNameVisible) {
            return <CustomOverlayMap
                position={{ lat: myStore.y, lng: myStore.x }}
                yAnchor={2.5}
                clickable={true}>
                <p className='hover-marker'>{myStore.storeName}</p>
            </CustomOverlayMap>
        }
        if (selectedStore?.storeName === myStore.storeName) {
            return (
                <CustomOverlayMap
                    position={{ lat: myStore.y, lng: myStore.x }}
                    yAnchor={1.2}
                    clickable={true}>
                    <section className='clicked-marker'>
                        <a href={myStore.youtubeLink} rel="noreferrer noopener" target='_blank'>
                            <img src={getThumbnail(myStore.youtubeLink)} loading='lazy' alt='유튜브 바로가기' />
                        </a>
                        <div className='clicked-marker-info'>
                            <strong className='marker-name'>{myStore.storeName}</strong>
                            <p>{myStore.address}</p>
                            <button onClick={moveToKakaoMap}>카카오맵으로 길찾기</button>
                        </div>
                    </section>
                </CustomOverlayMap>
            )
        }
        return null
    }
    return (
        <>
            <MapMarker
                position={{ lat: myStore.y, lng: myStore.x }}
                onClick={handleClickMarker}
                onMouseOver={mouseOver} // 마우스 오버 이벤트 추가
                onMouseOut={() => setIsVisible(false)} // 마우스 아웃 이벤트 추가
                
            />
            {
                isShow()

            }
        </>


    )
}

export default EventMarkerContainer