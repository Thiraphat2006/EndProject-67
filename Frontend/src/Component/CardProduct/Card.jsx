import './card.css'
import { Link } from 'react-router'
import DataProduct from '../../../public/Data/ข้อมูลครืมตุ่งๆ.json'
// card ที่ใช้ในหน้า product
const Card = ({ KEY, Image, ProductNameEng, Type, }) => { 


    return (
        <>
            <Link to={`/ProductPage/${KEY}`} >
                <div className="card ">
                    <div className="card-con m-5 ">
                        <div className="img">
                            <img src={Image} alt="Image Error" />
                        </div>
                        <div className="text max-w-80 ml-5">
                            <p className='nameproduct'>{ProductNameEng}</p>
                            <div className="type inline-block px-2 py-4 rounded-2xl">
                                <p className='typeproduct'>{Type}</p>
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
        <div className="allcard mt-10">
            <div className="cardcontainer grid  gap-10 grid-cols-1 justify-center w-4/5 md:grid-cols-2">
                <Mapcard filter={fill} />

            </div>
        </div>

    )
}


const Titlefortypefocard = () => {
    return (
        <div className="allin">
            <h1 className="text-4xl font-bold mt-10 ml-40">
                ปรเภท ครีนเซอร์
            </h1>
            <Cardcontainer fill='ครีนเซอร์' />
            <hr className='m-20 ' />
            <h1 className="text-4xl font-bold mt-10 ml-40">
                ปรเภท คลีนซิ่ง
            </h1>
            <Cardcontainer fill='คลีนซิ่ง' />
            <hr className='m-20 ' />
            <h1 className="text-4xl font-bold mt-10 ml-40">
                ปรเภท เซรั่ม
            </h1>
            <Cardcontainer fill='เซรั่ม' />
            <hr className='m-20 ' />
            <h1 className="text-4xl font-bold mt-10 ml-40">
                ปรเภท โทนเนอร์
            </h1>
            <Cardcontainer fill='โทนเนอร์' />
            <hr className='m-20 ' />
            <h1 className="text-4xl font-bold mt-10 ml-40">
                ปรเภท โลชั่น
            </h1>
            <Cardcontainer fill='โลชั่น' />
            <hr className='m-10 ' />
        </div>
    )

}

export default Titlefortypefocard