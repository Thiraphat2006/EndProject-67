import React from 'react'
import { useParams, Link } from 'react-router'
import './Detailcomponent.css'
import data from '../../../public/Data/ข้อมูลครืมตุ่งๆ.json'


//ฝั่งรูป
export const ImageDetail = ({ Image }) => {
    return (
        <>
            <div className='Imagedetail'>
                <div className="image-con">
                    <img src={Image} alt="Image Error" />
                </div>
            </div>
        </>
    )
}

//ฝั่งข้อความต่างๆ
export const DetailofProDuct = ({ ProductNameThai, Type, Brand, Ingredients, Properties }) => {
    return (
        <div className="textdetail-con p-6 pt-7">
            <h1 className='text-4xl'>{ProductNameThai}</h1>
            <p >ประเภท {Type}</p>
            <p>แบรน {Brand}</p>
            <p >คุณสัมบัติ</p>
            <p className='w-96 text-sm'>{Properties}</p>
            <p>ส่วนประกอบ</p>
            <p className='what w-96 text-sm'>{Ingredients} ฯลฯ</p>

            <Link to='/ProductPage' className='link-btn mt-10'>
                <div className="returnlink ">
                    <p>ย้อนกลับ</p>
                </div>
            </Link>


        </div>
    )
}


//รวมทั้ง 2 ฝั่งและมีการกรองข้อมูลตามไอดีProduct
function Detailcomponent() {
    const { KEY } = useParams()

    const productFilter = data.find(data => data.KEY === parseInt(KEY))
    if (!productFilter) {
        console.log("หาสิ้นค้าไม่พบ")
    }

    return (
        <div className="deteil-con flex">
            <ImageDetail {...productFilter} />
            <DetailofProDuct {...productFilter} />
        </div>
    )
}

export default Detailcomponent