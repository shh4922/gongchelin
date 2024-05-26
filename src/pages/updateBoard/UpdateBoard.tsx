
import { useEffect } from "react"
import "./updateBoard.scss"
import { setMetaTags } from "../../metatag/meta"

function UpdateBoard() {
    useEffect(() => {
        setMetaTags({
            title: "유튜버 맛집 지도",
            description: "유튜버맛집지도 업데이트내역",
            imageUrl: ""
        })
        
    }, [])

    return (
        <article className="updateboard">
            <h2>업데이트 내역</h2>
            <section>
                <strong>240527</strong>
                <ul>
                    <li>마커개수 롤백</li>
                    <li>모바일버전 화면 변경</li>
                </ul>
            </section>
            <section>
                <strong>240512</strong>
                <ul>
                    <li>마커개수 표기방법 변경</li>
                </ul>
            </section>
            <section>
                <strong>240507</strong>
                <ul>
                    <li>카카오맵으로 이동하기 추가함</li>
                </ul>
            </section>
            <section>
                <strong>240425</strong>
                <ul>
                    <li>웹런칭항</li>
                </ul>
            </section>
        </article>

    )
}


export default UpdateBoard