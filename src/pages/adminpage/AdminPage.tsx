import React, { useEffect, useState } from "react"
import { auth } from "../../db/firebase"
import { useNavigate } from "react-router-dom"
import axios, { AxiosResponse } from "axios"
import { db, ref, set } from "../../db/firebase"
import "./adminpage.scss"
import kakaoResponseDetail from "../../Models/kakaoResponseDetail"
import kakaoSearchResponse from "../../Models/kakaoSearchResponse"
import { setMetaTags } from "../../metatag/meta"

function AdminPage() {
    const [currentUser, setCurrentUser] = useState(auth.currentUser)
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState<[kakaoResponseDetail]>()
    const [youtuber, setYoutuber] = useState("")
    const navigator = useNavigate()

    const [selectedSearchResult, setSelectedSearchResult] = useState({
        name: "",
        address: "",
        category: "",
        x: "",
        y: "",
        youtubeLink: "",
        eatedFood: ""
    })

    useEffect(() => {
        setMetaTags({
            title: "유튜버 맛집 지도 어드민페이지",
            description: "유튜버들이 방문한 식당데이터를 저장하는 곳입니다",
            imageUrl: ""
        })
        if (!currentUser) {
            alert("유저없음!")
            navigator("/login")
        } else {
            console.log(currentUser)
        }
    }, [])

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    const onChangeFormDaya = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setSelectedSearchResult(prevState => ({
            ...prevState,
            [name]: value
        })
        )
    }
    const handleSelectYoutuber = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setYoutuber(e.target.value)
    }
    const handleSelectedResult = (store: kakaoResponseDetail) => {
        const info = {
            name: store.place_name,
            address: store.road_address_name,
            category: store.category_name,
            x: store.x,
            y: store.y,
            youtubeLink: "",
            eatedFood: ""
        }
        setSelectedSearchResult(info)
    }

    // kakao식당검색
    const submitSearch = (e: React.FormEvent) => {
        e.preventDefault()
        axios.get<kakaoSearchResponse>(`https://dapi.kakao.com/v2/local/search/keyword?query=${search}`, {
            headers: {
                Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_APIKEY}`
            }
        })
            .then((res: AxiosResponse<kakaoSearchResponse>) => {
                setSearchResult(res.data.documents)
                console.log(res.data.documents)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // 파이어베이스에 저장
    const submitToFirebase = (e: React.FormEvent) => {
        e.preventDefault()
        if (youtuber === '') {
            alert("유튜버선택하셈")
            return
        }
        set(ref(db, `${youtuber}/${selectedSearchResult.name}`), {
            storeName: selectedSearchResult.name,
            address: selectedSearchResult.address,
            category: selectedSearchResult.category,
            x: Number(selectedSearchResult.x),
            y: Number(selectedSearchResult.y),
            youtubeLink: selectedSearchResult.youtubeLink,
            youtuberName: youtuber,
            eatedFood: selectedSearchResult.eatedFood
        })
            .then(() => {
                alert("등록완료")
            })
            .catch((error) => {
                console.error(error)
            })
    }
    return (
        !currentUser ? (null)
            : (
                <article className="adminPage">
                    <section className="admin-inputSection">
                        <form onSubmit={submitSearch}>
                            <input value={search} onChange={(handleSearchInput)} placeholder="가게입력"></input>
                            <button>전송</button>
                        </form>
                        <select onChange={handleSelectYoutuber}>
                            <option value="Gongchelin">공혁준</option>
                            <option value="Foogja">풍자</option>
                        </select>
                        {
                            searchResult?.map((store) => {
                                return (
                                    <section className="responseCard" onClick={() => { handleSelectedResult(store) }}>
                                        <p>{store.place_name}</p>
                                        <p>{store.address_name}</p>
                                        <p>{store.category_name}</p>
                                        <p>{store.road_address_name}</p>
                                    </section>
                                )
                            })
                        }
                    </section>

                    <section className="admin-resultsection">
                        <form onSubmit={submitToFirebase}>
                            <input name="name" value={selectedSearchResult?.name} onChange={onChangeFormDaya} placeholder="식당이름"></input>
                            <input name="address" value={selectedSearchResult?.address} onChange={onChangeFormDaya} placeholder="주소"></input>
                            <input name="category" value={selectedSearchResult?.category} onChange={onChangeFormDaya} placeholder="카테고리"></input>
                            <input name="x" value={selectedSearchResult?.x} onChange={onChangeFormDaya} placeholder="x좌표"></input>
                            <input name="y" value={selectedSearchResult?.y} onChange={onChangeFormDaya} placeholder="y좌표"></input>
                            <input name="youtubeLink" value={selectedSearchResult.youtubeLink} onChange={onChangeFormDaya} placeholder="유튜브링크"></input>
                            <input name="eatedFood" value={selectedSearchResult.eatedFood} onChange={onChangeFormDaya} placeholder="먹은음식"></input>
                            <button>save</button>
                        </form>
                    </section>
                </article>
            )
    )
}

export default AdminPage