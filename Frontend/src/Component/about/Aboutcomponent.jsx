import React from 'react'
import './Aboutcomponent.css'
import TEST from "../../Image/BG/man01.jpg"
function Aboutcomponent() {
    return (
        <>
            <Toptext />
            <div className="allcardprofile w-4/5 flex justify-between mt-7 ml-40">
                <CardProfile
                    name={`สุปรียา ทาทน`} no={36} 
                    purpose={`จัดทำ แก้ไข รูปเล่ม`}/>
                <CardProfile name={`ธีรภัทร บูรณ์พิภพธนโชติ`} no={34} />
                <CardProfile name={`ฟ้าใส ใจเกินร้อย`} no={29} />
            </div>
        </>
    )
}

export default Aboutcomponent

//CardProfile
export const CardProfile = ({ name, no, purpose }) => {
    return (
        <>
            <div className="cardprofile ">
                <div className="card-con">
                    <img src={TEST} alt="" />
                    <div className="text-con">
                        <h1>{name}</h1>
                        <p>ปวช. 3/1 คอมฯ เลขที่ {no}</p>
                        <h2>หน้าที่</h2>
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
            <span className='text-center block text-4xl mt-5'>จัดทำโดย</span>
        </>
    )
}




