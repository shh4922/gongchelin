import React, { useState } from 'react';
import { MapMarker, useMap, CustomOverlayMap } from 'react-kakao-maps-sdk';
import storesInfo from '../../Models/\bstoresInfo';
import "./mapmarker.css"
import { getThumbnail } from '../../share/youtube';

interface MapMarkerProps {
    store: storesInfo;
}

const EventMarkerContainer: React.FC<MapMarkerProps & { index: number } & { selectedIndex: number | null } & { clickEvent: () => void }> = ({ store, index, selectedIndex, clickEvent }) => {
    const map = useMap()
    const [isVisible, setIsVisible] = useState(false)
    const [myIndex, setIndex] = useState<number | null>(index)

    const handleClickMarker = (marker: kakao.maps.Marker) => {

        clickEvent()
        map.panTo(marker.getPosition())
    }

    return (
        <>
            <MapMarker
                position={{ lat: store.y, lng: store.x }} // 마커를 표시할 위치
                onClick={handleClickMarker}
                onMouseOver={() => setIsVisible(true)}
                onMouseOut={() => setIsVisible(false)}
            />
            {
                isVisible && myIndex !== selectedIndex && (
                    <CustomOverlayMap
                        position={{ lat: store.y, lng: store.x }} // 마커를 표시할 위치
                        yAnchor={2.4}
                    // clickable={false}
                    >
                        <p className='hover-marker'>{store.storeName}</p>
                    </CustomOverlayMap>
                )
            }
            {
                myIndex === selectedIndex && (
                    <CustomOverlayMap
                        position={{ lat: store.y, lng: store.x }} // 마커를 표시할 위치
                        yAnchor={1.3}
                        clickable={true}
                    >
                        <div className='clicked-marker'>
                            <a href={store.youtubeLink} rel="noreferrer noopener" target='_blank'><img src={getThumbnail(store.youtubeLink)} loading='lazy'></img></a>
                            <p className='marker-category'>{store.category}</p>
                            <strong className='marker-name'>{store.storeName}</strong>
                            <span className='marker-address'>{store.address}</span>
                        </div>
                    </CustomOverlayMap>
                )
            }
        </>
    )
}

export default EventMarkerContainer