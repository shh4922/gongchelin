import { getLargeThumbnail } from "../../share/youtube";
import "./selectedDetail.scss"
import { useAppSelector } from "../../redux/store";

function SelectedDetail() {
    
    const { selectedStore } = useAppSelector((state) => state.map);

    if (selectedStore !== null) {
        return (
            <div className="search-detail">
                <section className="storeInfo">
                    <strong className='marker-name'>{selectedStore.storeName}</strong>
                    <span className='marker-address'>{selectedStore.address}</span>
                    <p className='marker-category'>{selectedStore.category}</p>
                    <p>먹은음식: {selectedStore.eatedFood}</p>
                </section>
                <a href={selectedStore.youtubeLink} rel="noreferrer noopener" target='_blank'>
                    <img src={getLargeThumbnail(selectedStore.youtubeLink)} loading='lazy' alt="유튜브 바로가기"></img>
                </a>
            </div>
        )
    }
    return null
}

export default SelectedDetail