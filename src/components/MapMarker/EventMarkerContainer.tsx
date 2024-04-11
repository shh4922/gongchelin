import React, { useState } from 'react';
import { MapMarker, useMap, CustomOverlayMap } from 'react-kakao-maps-sdk';
import storesInfo from '../../Models/\bstoresInfo';
// import "./mapmarker.css"
import { getThumbnail } from '../../share/youtube';
import "./mapmarker.scss"
interface MapMarkerProps {
    myStore: storesInfo,
    selectedStore: storesInfo | null,
    markerClickEvent: () => void
}

const EventMarkerContainer: React.FC<MapMarkerProps> = ({ myStore, selectedStore, markerClickEvent }) => {
    const map = useMap()
    const [isNameVisible, setIsVisible] = useState(false)

    const handleClickMarker = (marker: kakao.maps.Marker) => {
        markerClickEvent()
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
                        yAnchor={2.4}
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
                                <img src={getThumbnail(myStore.youtubeLink)} loading='lazy'></img>
                            </a>
                            <div className='clicked-marker-info'>
                                <p className='marker-category'>{myStore.category}</p>
                                <strong className='marker-name'>{myStore.storeName}</strong>
                                <p className='marker-address'>{myStore.address}</p>
                            </div>

                        </section>
                    </CustomOverlayMap>
                )
            }
        </>
    )
}

export default EventMarkerContainer