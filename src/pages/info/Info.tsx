import { useEffect } from "react"
import { useParams } from "react-router-dom"
import "./info.scss"
import { setMetaTags } from "../../metatag/meta"

function Info() {
    const param = useParams()
    useEffect(() => {
        setMetaTags({
            title: "유튜버 맛집 지도",
            description: "유튜버맛집지도 유튜버정보",
            imageUrl: ""
        })
        
    }, [])

    function dummyReturn() {
        switch (param.id) {
            case "1":
                return (
                    <>
                        <article>
                            <h2>풍자: 대한민국 유튜버 및 방송인</h2>
                            <section>
                                <h3>개요</h3>
                                <p>
                                    대한민국에서 활동하는 유튜버이자 방송인인 풍자는 페이스북과 유튜브를 통해 널리 알려져 있습니다.
                                    <br></br>
                                    현재는 스튜디오 수제의 또간집이나 스튜디오 와플 등 대형 미디어 플랫폼과 MBC 등의 주요 방송국 프로그램에 출연하며 대중들에게 인기를 끌고 있습니다.
                                </p>
                            </section>
                            <section>
                                <h3>성별</h3>
                                <p>
                                    풍자는 법적으로는 남성이지만 사회적으로는 트랜스여성으로 인식되고 있습니다.
                                    <br></br>
                                    성전환 수술을 마쳤으나 아직 주민등록번호에 반영되지 않았습니다. 풍자는 성별 정정을 위해 노력하고 있으며, 이에 대한 과정은 계속되고 있습니다.
                                </p>
                            </section>
                            <section>
                                <h3>방송 활동</h3>
                                <p>
                                    2019년부터 풍자의 경험을 바탕으로 한 썰 영상들이 페이스북에서 큰 인기를 얻어 유튜브에서도 주목받게 되었습니다.
                                    <br></br>
                                    그의 재치 있는 입담과 다채로운 방송으로 대중들의 관심을 끌며, 방송에서의 욕설 사용을 자제하는 등 성장하고 있습니다. 풍자는 트랜스젠더 유튜버로서 논란을 피하고, 매우 깨끗한 이미지를 유지하고 있습니다.
                                </p>
                            </section>
                        </article>
                    </>
                )
            case "2":
                return (
                    <>
                        <article>
                            <h2>공혁준: 대한민국 유튜버 및 하스스톤 전 프로게이머</h2>
                            <section>
                                <h3>개요</h3>
                                <p>
                                    대한민국의 전 하스스톤 프로게이머이자 인터넷 방송인인 공혁준은 국내 최고의 수준을 자랑합니다. 트위치와 유튜브를 통해 활동하며, 현재는 먹방 프로그램 '공슐랭'을 주로 진행하고 있습니다.
                                </p>
                            </section>
                            <section>
                                <h3>유희왕</h3>
                                <p>
                                    공혁준은 대구 TCG 매장 미카엘에서 유희왕 대회에 참가했던 경력을 가지고 있습니다. 유희왕 세계대회에서도 국가대표 자격을 획득할 만큼의 실력을 보여주었습니다.
                                </p>
                            </section>
                            <section>
                                <h3>하스스톤</h3>
                                <p>
                                    공혁준은 공격적인 어그로 덱을 선호하며 템포법사를 많이 활용합니다.
                                    <br></br>
                                    그러나 방송에서는 등급전과 대회에서는 다르게 배제 플레이를 하여 안정적인 선택을 한다고 합니다.
                                </p>
                            </section>
                        </article>
                    </>
                )
            case "3":
                return (
                    <>
                        <article>
                            <h2>개발자: 99년생 웹/ios 개발자</h2>
                            <section>
                                <h3>개요</h3>
                                <p>
                                    99년생 컴퓨터공학과 졸업후 알바와 개발을 병행하며 놀고있다고 한다.
                                    <br></br>
                                    취미로는 요리, 영상편집, 사진촬영 이라고 한다.
                                </p>
                            </section>
                            <section>
                                <h3>성별</h3>
                                <p>
                                    컴퓨터 공학과를 졸업한 남자중에 남자
                                </p>
                            </section>
                            <section>
                                <h3>해당 사이트를 개발한 이유</h3>
                                <p>
                                    기존에 나와있는 사이트는 위치는 알수있으나, 나와 얼마나 떨어져있는지는 보기가 힘듬.
                                    <br></br>
                                    이럴바엔 내가 만들어서 서비스해봐야지 라는 마인드로 개발시작
                                </p>
                            </section>
                            <section>
                                <h3>차후 계획</h3>
                                <p>
                                    지도에 식당마커가 너무많아서 ui적으로 보기 불편함을 개선할예정
                                    <br></br>
                                    자신의 위치를 기반으로 식당을 클릭시, 카카오맵으로 이동하여 이동경로를 보여줄 계획
                                </p>
                            </section>
                        </article>
                    </>
                )
            default:
                return (
                    <>
                        <article>
                            <h2>번지수를 잘못 찾으셨습니다. 나가주세요.</h2>
                        </article>
                    </>
                )

        }

    }
    return (
        <>
            {
                dummyReturn()
            }
        </>

    )
}


export default Info