import { React, useEffect } from 'react'
import './Recommand(1).css'
import { Link } from 'react-router'

import BG from '../../../public/Image/BG/man_bgremove.png'

export default function Recommand() {
    //ใช้ useEffect ในการเปลี่ยนค่าของ css ใน body โดยเมื่อเข้ามาในหน้านี้จะทำให้ body ไม่สามารถเลื่อนได้
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.height = 'auto';
        }

    }
        , [])
    return (
        <>
            <div className="img-bg">
                <img src={BG} alt="" className='fade-in' />
                <div className="text-container text-2xl">
                    <h1> ยินดีต้อนรับสู่</h1>
                    <h2> เว็บไซต์แนะแนะนำผลิตภัณฑ์ถนอมผิวหน้าผิวกาย</h2>
                    <div className="btn-con">
                        <Link id="Link" to='/ProductPage'>
                            <div className="btn">
                                <h3> เข้าสู่เว็ปไซต์</h3>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}
