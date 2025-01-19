import React from 'react'
import './card.css'
import { Link } from 'react-router'
import DataProduct from '../../../public/Data/ข้อมูลครืมตุ่งๆ.json'
// card ที่ใช้ในหน้า product
const Card = ({ KEY, Image, ProductNameEng, Brand, }) => {
    
    //ถ้าเป็น localhost ลบก็ไม่มีไร ถ้าไม่ก็ก็ลบ../หน้าที่อยู่ไฟล์แค่นั้น
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
            <Link to={`/ProductPage/${KEY}`} >
                <div className="card h-[400px] md:h-60 w-full flex justify-center md:w-[340px] md:flex md:items-center lg:w-[400px] xl:w-[600px] xl:h-[340px] xl:justify-start">
                    <div className="card-con flex flex-col justify-center items-center  md:flex-row  ">
                        <div className="img w-64 h-auto md:w-[150px] md:h-52 md:ml-5 lg:w-[200px] xl:w-[250px] xl:h-72">
                            <img src={imagePath} alt="Image Error" className='pt-1 w-auto h-[200px] md:w-auto md:h-40 xl:h-52'/>
                        </div>
                        <div className="text flex flex-col justify-center items-center text-lg w-56 md:text-xs md:pl-4 md:w-40 lg:text-base xl:text-2xl xl:w-60">
                            <p className='nameproduct'>{ProductNameEng}</p>
                            <div className="type inline-block px-2 py-4 rounded-2xl">
                                <p className='typeproduct whitespace-normal'>{Brand}</p>
                            </div> 
                        </div>
                    </div>
                </div>

            </Link>
        </>
    )
}

//card ที่ map ข้อมูลที่เราเลือกมา
export const Mapcard = ({ filter }) => {
    return (
        <>
            {
                DataProduct
                    .filter(data => data.Type === `${filter}`)
                    .map((data) => (
                        <Card {...data} key={data.KEY} />
                    ))
            }
        </>
    )
}


//เก็บรวม card ทั้งหมด
export const Cardcontainer = ({ fill }) => {
    return (
        <div className="allcard mt-10 h-auto">
            <div className="cardcontainer grid  gap-10 grid-cols-1 justify-center w-11/12 md:w-11/12 md:grid-cols-2 lg:w-4/5">
                <Mapcard filter={fill} />

            </div>
        </div>

    )
}


const Titlefortypefocard = () => {
    return (
        <div className="allin mt-5 sm:mb-32 md:mb-16 md:mt-10  ">
            <h1 className="text-4xl font-bold ml-11 md:ml-24 xl:ml-40 ">
                ปรเภท ครีนเซอร์
            </h1>
            <Cardcontainer fill='ครีนเซอร์' />
            <hr className='m-20 ' />
            <h1 className="text-4xl font-bold ml-11 md:ml-24 xl:ml-40">
                ปรเภท คลีนซิ่ง
            </h1>
            <Cardcontainer fill='คลีนซิ่ง' />
            <hr className='m-20 ' />
            <h1 className="text-4xl font-bold ml-11 md:ml-24 xl:ml-40">
                ปรเภท เซรั่ม
            </h1>
            <Cardcontainer fill='เซรั่ม' />
            <hr className='m-20 ' />
            <h1 className="text-4xl font-bold ml-11 md:ml-24 xl:ml-40">
                ปรเภท โทนเนอร์
            </h1>
            <Cardcontainer fill='โทนเนอร์' />
            <hr className='m-20 ' />
            <h1 className="text-4xl font-bold ml-11 md:ml-24 xl:ml-40">
                ปรเภท โลชั่น
            </h1>
            <Cardcontainer fill='โลชั่น' />
            <hr className='m-10 ' />
        </div>
    )

}

export default Titlefortypefocard