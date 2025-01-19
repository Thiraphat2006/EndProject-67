import React from 'react'
import './Aboutcomponent.css'
import DataProfile from "../../../public/Data/dataProfile.json"
function Aboutcomponent() {

    return (
        <>
            <Toptext />
            <div className="allcardprofile w-4/5 flex justify-between mt-7 ml-3 flex-col gap-8 md:ml-12 lg:flex-row lg:ml-7 xl:ml-[155px]">
                {DataProfile.map((item) => {
                    return (
                        <CardProfile {...item} key={item.IDcard} />
                    )
                })}
            </div>
        </>
    )
}

export default Aboutcomponent

//CardProfile
export const CardProfile = ({ IDcard, name, Email, tel, Image }) => {

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
            <div className="cardprofile w-[350px] h-[500px] md:w-[650px] md:h-[350px] lg:h-[500px] lg:w-[300px] xl:w-[350px] xl:h-[500px]" id={IDcard}>
                <div className="card-con flex flex-col justify-start md:flex-row md:justify-between md:px-8 lg:flex-col">
                    <div className="img-border">
                        <img src={imagePath} alt="image error" />
                    </div>
                    <div className="text-con mt-[5%] mx-[10%] md:mx-[0%]">
                        <h1 className='text-[1.4rem] lg:text-lg xl:text-xl'>{name}</h1>
                        <p className='text-[1.2rem]'>{Email}</p>
                        <p className='text-[1.2rem]'>{tel}</p>
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




