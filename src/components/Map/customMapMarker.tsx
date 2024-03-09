import React, { useState } from 'react';
import { Map, MapMarker, useMap, CustomOverlayMap } from 'react-kakao-maps-sdk';

function CustomMapMarker() {
    const [currentLocation, setCurrentLocation] = useState({
        center: { lat: 37.6703077, lng: 126.762765 },
        isPanto: false,
    })
    const map = useMap()
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>


            <MapMarker // 마커를 생성합니다
                position={{ lat: 37.54699, lng: 127.09598 }}
                image={{
                    src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
                    size: {
                        width: 64,
                        height: 69,
                    }, // 마커이미지의 크기입니다
                    options: {
                        offset: {
                            x: 27,
                            y: 69,
                        }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                    },
                }}
            />
            <CustomOverlayMap
                position={{ lat: 37.54699, lng: 127.09598 }}
                yAnchor={1}
            >
                <div className="customoverlay">
                    <a
                        href="https://map.kakao.com/link/map/11394059"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="title">구의야구공원</span>
                    </a>
                </div>
            </CustomOverlayMap>

        </>
    )
}

export default CustomMapMarker;
