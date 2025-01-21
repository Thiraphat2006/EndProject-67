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
            <div className="img-bg h-full  ">
                <img src={BG} alt="" className='fade-in object-contain h-auto w-[250px] bottom-0 md:bottom-[0px] md:top-[500px] md:w-[1500px] lg:top-[625px] xl:w-[1200px] xl:top-[0px]' />
                <div className="text-container text-2xl top-[250px] left-[15px] flex flex-col md:top-[150px] md:left-[100px] lg:top-[200px] lg:left-[200px] xl:top-[200px] xl:left-[900px] ">
                    <h1 className='md:text-7xl xl:text-4xl'> ยินดีต้อนรับสู่</h1>
                    <h2 className='text-lg md:text-3xl md:mt-9 xl:text-2xl'> เว็บไซต์แนะแนะนำผลิตภัณฑ์ถนอมผิวหน้าและผิวกาย</h2>
                    <div className="btn-con flex justify-center">
                        <Link id="Link" to='/ProductPage'>
                            <div className="btn w-80">
                                <h3> เข้าสู่เว็ปไซต์</h3>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}
