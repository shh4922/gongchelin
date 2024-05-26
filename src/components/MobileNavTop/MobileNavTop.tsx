import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleSearchInput, handleYoutuberChange } from "../../redux/slice/mapSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import "./mobileNavTop.scss"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function MobileNavTop() {
    const { stores, filteredCategory, filteredYoutuber, searchInput } = useAppSelector((state) => state.map);
    const [selectedYoutuber, setSelectedYoutuber] = useState("");
    const dispatch = useAppDispatch()
    
    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(handleSearchInput(event.target.value))
    }
    // 유튜버 필터링
    const handleYoutuberFilter = (youtuber: string) => {
        setSelectedYoutuber(youtuber);
        dispatch(handleYoutuberChange(youtuber));
    };
    return (
        <section className='mobile-nav-top'>
            <div className='search-input'>
                <input value={searchInput} onChange={onChangeSearch} placeholder='음식종류를 입력하세요'></input>
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </div>
            <ul>
                <li className={selectedYoutuber === "" ? "selected" : ""} onClick={()=> handleYoutuberFilter("") }>모든유튜버</li>
                <li className={selectedYoutuber === "Gongchelin" ? "selected" : ""} onClick={()=> handleYoutuberFilter("Gongchelin")}>공혁준</li>
                <li className={selectedYoutuber === "Foogja" ? "selected" : ""} onClick={()=> handleYoutuberFilter("Foogja")}>또간집</li>
            </ul>
        </section>
    )
}