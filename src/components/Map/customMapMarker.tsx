import React, { useState } from 'react';
import { Map, MapMarker, useMap, } from 'react-kakao-maps-sdk';

function customMapMarker() {
    const [currentLocation, setCurrentLocation] = useState({
        center: { lat: 37.6703077, lng: 126.762765 },
        isPanto: false,
    })
    const map = useMap()
    const [isVisible, setIsVisible] = useState(false)

    return (
        <MapMarker
            position={{ lat: 37.6703077, lng: 126.762765 }} // 마커를 표시할 위치
            // @ts-ignore
            onClick={(marker) => map.panTo(marker.getPosition())}
            onMouseOver={() => setIsVisible(true)}
            onMouseOut={() => setIsVisible(false)}
        >
            {isVisible && "content"}
        </MapMarker>
    )
}

export default customMapMarker;
