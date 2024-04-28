import React, { useState } from 'react';
import { MapMarker, useMap, CustomOverlayMap } from 'react-kakao-maps-sdk';
import storesInfo from '../../Models/\bstoresInfo';
import { getThumbnail } from '../../share/youtube';
import "./mapmarker.scss"
import { useDispatch } from 'react-redux';
import { handleClickMap, setSelectedStore } from '../../redux/mapSlice'; // Import actions and thunks
import { useAppSelector } from '../../redux/store';

interface MapMarkerProps {
    myStore: storesInfo,
}

const EventMarkerContainer: React.FC<MapMarkerProps> = ({myStore}) => {
    
    const map = useMap()
    const [isNameVisible, setIsVisible] = useState(false)
    
    const { selectedStore } = useAppSelector((state) => state.map);
    const dispatch = useDispatch()

    const handleClickMarker = (marker: kakao.maps.Marker) => {
        dispatch(setSelectedStore(myStore))
        map.panTo(marker.getPosition())
    }

    return (
        <>
            <MapMarker
                position={{ lat: myStore.y, lng: myStore.x }} // 마커를 표시할 위치
                onClick={handleClickMarker}
                onMouseOver={() => setIsVisible(true)}
                onMouseOut={() => setIsVisible(false)}
            />
            {
                isNameVisible && (
                    <CustomOverlayMap
                        position={{ lat: myStore.y, lng: myStore.x }} // 마커를 표시할 위치
                        yAnchor={2.6}
                    >
                        <p className='hover-marker'>{myStore.storeName}</p>
                    </CustomOverlayMap>
                )
            }
            {
                myStore.storeName === selectedStore?.storeName && (
                    <CustomOverlayMap
                        position={{ lat: myStore.y, lng: myStore.x }} // 마커를 표시할 위치
                        yAnchor={1.3}
                        clickable={true}
                    >
                        <section className='clicked-marker'>
                            <a href={myStore.youtubeLink} rel="noreferrer noopener" target='_blank'>
                                <img src={getThumbnail(myStore.youtubeLink)} loading='lazy' alt='유튜브 바로가기'></img>
                            </a>
                            <div className='clicked-marker-info'>

                                <strong className='marker-name'>{myStore.storeName}</strong>
                                <p>{myStore.address}</p>
                            </div>

                        </section>
                    </CustomOverlayMap>
                )
            }
        </>
    )
}

export default EventMarkerContainer