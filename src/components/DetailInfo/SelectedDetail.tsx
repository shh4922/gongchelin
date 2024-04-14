import storesInfo from "../../Models/\bstoresInfo";
import { getLargeThumbnail } from "../../share/youtube";
// import "./selectedDetail.css"
import "./selectedDetail.scss"
interface SelectedDetailProps {
    selectedStore: storesInfo | null;
}

function SelectedDetail({ selectedStore }: SelectedDetailProps) {
    if (selectedStore !== null) {
        return (
            <div className="search-detail">
                <section className="storeInfo">
                    <strong className='marker-name'>{selectedStore.storeName}</strong>
                    <span className='marker-address'>{selectedStore.address}</span>
                    <p className='marker-category'>{selectedStore.category}</p>
                    <p>{selectedStore.eatedFood}</p>
                </section>
                <a href={selectedStore.youtubeLink} rel="noreferrer noopener" target='_blank'>
                    
                    <img src={getLargeThumbnail(selectedStore.youtubeLink)} loading='lazy'></img>
                </a>
            </div>
        )
    }
    return null
}

export default SelectedDetail