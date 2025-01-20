import React from 'react'
import { useParams, Link } from 'react-router'
import './Detailcomponent.css'
import data from '../../../public/Data/ข้อมูลครืมตุ่งๆ.json'


//ฝั่งรูป
export const ImageDetail = ({ Image }) => {

    const isLocalhost = window.location.hostname === 'localhost';
    let imagePath;
    if (!isLocalhost) {
        imagePath = `${Image.replace('../', '')}`;
    }
    else {
        imagePath = `${Image}`;
    }
    return (
        <>
            <div className='Imagedetail m-4 md:w-[500px] md:my-10 xl:w-[450px] xl:h-[500px]'>
                <div className="image-con ">
                    <img src={imagePath} alt="Image Error" className='h-96 p-5 md:h-96' />
                </div>
            </div>
        </>
    )
}

//ฝั่งข้อความต่างๆ
export const DetailofProDuct = ({ ProductNameThai, Type, Brand, Ingredients, Properties }) => {
    return (
        <div className="textdetail-con p-6 pt-7">
            <h1 className='text-3xl'>{ProductNameThai}</h1>
            
            <div className='flex gap-1'>
                <p className='font-semibold'>ประเภท :</p>
                <p>{Type}</p>
            </div>
            <div className='flex gap-1'>
                <p className='font-semibold'>แบรนด์ :</p>
                <p>{Brand}</p>
            </div>
            <p className='font-semibold'>คุณสมบัติ</p>
            <p className='w-[300px] text-base md:w-[500px]'>{Properties}</p>
            <p className='font-semibold'>ส่วนประกอบ</p>
            <p className='w-[300px] text-sm md:w-[500px]'>{Ingredients} ฯลฯ</p>

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
        <div className="deteil-con flex flex-col w-full h-auto md:mx-10 md:my-5 md:rounded-3xl md:w-[90%] md:justify-center md:items-center lg:flex-row lg:px-9 xl:mt-8 xl:px-5 xl:ml-20 xl:justify-start xl:mb-0">
            <ImageDetail {...productFilter} />
            <DetailofProDuct {...productFilter} />
        </div>
    )
}

export default Detailcomponent