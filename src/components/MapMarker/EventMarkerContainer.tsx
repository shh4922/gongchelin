import React, { useEffect, useState } from 'react';
import { Map, MapMarker, useMap, CustomOverlayMap } from 'react-kakao-maps-sdk';
import storesInfo from '../../Models/\bstoresInfo';
import "./mapmarker.css"

interface MapMarkerProps {
    store: storesInfo;
}

const EventMarkerContainer: React.FC<MapMarkerProps & { index: number } & { selectedIndex: number | null } & { clickEvent: () => void }> = ({ store, index, selectedIndex, clickEvent }) => {
    const map = useMap()
    const [isVisible, setIsVisible] = useState(false)
    const [myIndex, setIndex] = useState<number|null>(index)

    const handleClickMarker = (marker: kakao.maps.Marker) => {
        clickEvent()
        map.panTo(marker.getPosition())
    }


    function getThumbnail(link: string) {
        const videoIdMatch = link.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);

        if (videoIdMatch && videoIdMatch[1]) {
            const videoId = videoIdMatch[1];
            return `https://i1.ytimg.com/vi/${videoId}/mqdefault.jpg`
        } else {
            return "NotFound"
        }
    }


    return (
        <>
            <MapMarker
                position={{ lat: store.y, lng: store.x }} // 마커를 표시할 위치
                // @ts-ignore
                onClick={handleClickMarker}

                onMouseOver={() => setIsVisible(true)}
                onMouseOut={() => setIsVisible(false)}

            />
            {
                isVisible && myIndex !== selectedIndex && (
                    <CustomOverlayMap
                        position={{ lat: store.y, lng: store.x }} // 마커를 표시할 위치
                        yAnchor={2.4}
                        clickable={false}
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


        // </MapMarker>
    )
}

export default EventMarkerContainer