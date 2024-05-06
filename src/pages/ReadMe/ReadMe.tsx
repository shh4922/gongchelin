import { useEffect } from "react"
import "./readme.scss"
import { setMetaTags } from "../../metatag/meta"

function ReadMe() {

    useEffect(() => {
        setMetaTags({
            title: "유튜버 맛집 지도",
            description: "유튜버맛집지도 사용법",
            imageUrl: ""
        })
        
    }, [])

    return (
        <article className="readme">
            <h2>유튜버 맛집 지도</h2>
            <section>
                <strong>환영합니다! 유튜버맛집지도입니다!</strong>
                <p>
                    유튜버가 찾아가는 맛집을 가고싶으신가요?
                    <br></br>
                    식당을 가고싶은데 가는방법을 모르시겠다구요?
                    <br></br>
                    그런 당신을 위한 꼭 필요한 서비스! 
                </p>
            </section>
            <section>
                <strong>무슨서비스 인가요?</strong>
                <p>
                    유저를 위한, 유저를 향한, 맛집정리를 위한 유저친화적 지도입니다.
                    <br></br>
                    지금은 특정 유튜버들의 데이터만 있지만, 차후 문의를 통해 요청맛집을 추가할 예정입니다.
                    <br></br>
                    또한 개발자의 추천맛집과, 맛이아닌 뷰&인스타 맛집 또한 소개할예정입니다
                    <br></br>
                    많은이용 부탁드립니다!
                </p>
            </section>
            <section>
                <strong>어떻게 사용하나요?</strong>
                <p>
                    유튜버 카테고리에서 원하시는 유튜버를 선택후 지도를 클릭만하면 됩니다!
                    <br></br>
                    유튜버가 먹은 음식을 검색을통해서도 찾을수있습니다!
                    <br></br>
                    많은이용 부탁드립니다!
                </p>
            </section>
        </article>

    )
}


export default ReadMe