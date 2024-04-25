import React, { useEffect, useState } from "react"
import "./contact.scss"
function Contact() {
    return (
        <article className="Contact">
            <div className="contact-content">
                <h1>Contact</h1>
                <section>
                    <div>
                        <p>email</p>
                        <strong>gusgh4922@gmail.com</strong>
                    </div>
                    <div>
                        <p>데이터 업데이트</p>
                        <strong>매주 일요일</strong>
                    </div>
                </section>
            </div>

        </article>
    )
}

export default Contact