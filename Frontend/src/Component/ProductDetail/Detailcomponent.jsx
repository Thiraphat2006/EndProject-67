import React from 'react'
import { useParams } from 'react-router'
import data from '../../../public/Data/ข้อมูลครืมตุ่งๆ.json'



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


export const DetailofProDuct = () => {
    return (
        <div>Detailcomponent</div>
    )
}


function Detailcomponent() {
    const { KEY } = useParams()
    
    const productFilter = data.find(data => data.KEY === parseInt(KEY))
    if (!productFilter) {
        console.log("หาสิ้นค้าไม่พบ")
    }

    return (
        <div className="deteil-con flex w-max">
            <ImageDetail {...productFilter} />
            <DetailofProDuct />
        </div>
    )
}

export default Detailcomponent