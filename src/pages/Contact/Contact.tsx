import React, { useEffect, useState } from "react"
import "./contact.scss"
import { Link } from "react-router-dom"
function Contact() {
    return (
        <article className="Contact">
            <section className="youtuberList">
                <h3>등록된 유튜버</h3>
                <strong><Link to={'/info/1'}>풍자</Link></strong>
                <strong><Link to={'/info/2'}>공혁준</Link></strong>
                <strong><Link to={'/info/3'}>개발자</Link></strong>
            </section>
            <section className="devInfo">
                <h3>개발자 정보</h3>
                <div>
                    <p>이름: </p>
                    <strong>알빠노</strong>
                </div>
                <div>
                    <p>email: </p>
                    <strong>gusgh4922@gmail.com</strong>
                </div>
                <div>
                    <p>데이터업데이트: </p>
                    <strong>개발자가 하고싶을때</strong>
                </div>
                <div>
                    <p>사이트 디자인이 구린이유: </p>
                    <strong>디자이너가 없어서, 디자이너분 연락주세요</strong>
                </div>
                <div>
                    <p>같이 개발을 하고싶다?</p>
                    <strong>gusgh4922@gmail.com</strong>
                </div>
                <div>
                    <p>유튜버 더 추가해주면 안되겠냐?</p>
                    <strong>gusgh4922@gmail.com</strong>
                </div>
                <div>
                    <p>기타문의: </p>
                    <strong>gusgh4922@gmail.com</strong>
                </div>
            </section>
        </article>
    )
}

export default Contact