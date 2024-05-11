import { Map, MarkerClusterer } from "react-kakao-maps-sdk";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { handleClickMap } from '../../redux/slice/mapSlice'; // Import actions and thunks
import EventMarkerContainer from "../../components/MapMarker/EventMarkerContainer";
import SelectedDetail from "../../components/DetailInfo/SelectedDetail";
import "./foogja.scss"

function Foogja() {
    const dispatch = useAppDispatch()
    const { stores, filteredCategory, filteredYoutuber, searchInput } = useAppSelector((state) => state.map);

    return (
        <section className='search-body'>
            {/* <h1>dkssid</h1> */}
                <Map
                    className='search-map'
                    center={{ lng: 126.762765, lat: 37.6703077 }}
                    onClick={() => { dispatch(handleClickMap()) }}
                >
                    <MarkerClusterer
                        averageCenter={true}
                        minLevel={6}
                    >
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
                    </MarkerClusterer>

                </Map>
                <SelectedDetail />
            </section>
    )
}

export default Foogja