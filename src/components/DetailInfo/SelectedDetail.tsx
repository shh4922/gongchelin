import storesInfo from "../../Models/\bstoresInfo";
import { getLargeThumbnail } from "../../share/youtube";

type store = {
    store: storesInfo;
}

function SelectedDetail({stores, selectedStore}: {stores: storesInfo[], selectedStore:  number|null}) {
    if (selectedStore !== null) {
        return (
            <>
                <a href={stores[selectedStore].youtubeLink} rel="noreferrer noopener" target='_blank'><img src={getLargeThumbnail(stores[selectedStore].youtubeLink)} loading='lazy'></img></a>
                <p className='marker-category'>{stores[selectedStore].category}</p>
                <strong className='marker-name'>{stores[selectedStore].storeName}</strong>
                <span className='marker-address'>{stores[selectedStore].address}</span>
            </>
        )
    }
    return (
        <p className='nomarker'>마커를 한번 선택해보세유! <br/>간짜장 먹고싶다..</p>
    )
}

export default SelectedDetail