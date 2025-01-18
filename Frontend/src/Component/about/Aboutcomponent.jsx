import React from 'react'
import './Aboutcomponent.css'
import TEST from "../../../public/Image/BG/man01.jpg"
function Aboutcomponent() {
    const DataProfile = [
        {
            IDcard: 'card1',
            name: 'สุปรียา ทาทน',
            no: 36,
            // purpose: 'จัดทำ แก้ไข รูปเล่ม'
        },
        {
            IDcard: 'card2',
            name: 'ธีรภัทร บูรณ์พิภพธนโชติ',
            no: 34,
            // purpose: 'จัดทำ แก้ไข รูปเล่ม'
        },
        {
            IDcard: 'card3',
            name: 'ฟ้าใส ใจเกินร้อย',
            no: 29,
            // purpose: 'จัดทำ แก้ไข รูปเล่ม'
        }
    ]

    return (
        <>
            <Toptext />
            <div className="allcardprofile w-4/5 flex justify-between mt-7 ml-40">
                {DataProfile.map((item, index) => {
                    return (
                        <CardProfile key={index} IDcard={item.IDcard} name={item.name} no={item.no} purpose={item.purpose} />
                    )
                })}
            </div>
        </>
    )
}

export default Aboutcomponent

//CardProfile
export const CardProfile = ({ IDcard , name, No, purpose }) => {
    return (
        <>
            <div className="cardprofile " id={IDcard}>
                <div className="card-con">
                    <img src={TEST} alt="image error" />
                    <div className="text-con">
                        <h1>{name}</h1>
                        <p>ปวช. 3/1 คอมฯ เลขที่ {No}</p>
                        {/* <h2>หน้าที่</h2> */}
                        <p>{purpose}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export const Toptext = () => {
    return (
        <>
            <span className='text-center block text-4xl mt-5'> Creator By</span>
        </>
    )
}




