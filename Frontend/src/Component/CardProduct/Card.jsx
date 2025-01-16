import './card.css'
import DataProduct from '../../../public/Data/ข้อมูลครืมตุ่งๆ.json'
// card ที่ใช้ในหน้า product
const Card = ({ Image, ProductNameEng, Type, }) => {
    return (
        <>
            <div className="card ">
                <div className="card-con m-5 ">
                    <div className="img">
                        <img src={Image} alt="ImageError" />
                    </div>
                    <div className="text max-w-80 ml-5">
                        <p className='nameproduct'>{ProductNameEng}</p>
                        <div className="type inline-block px-2 py-4 rounded-2xl">
                            <p className='typeproduct'>{Type}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

//card ที่ map ข้อมูลที่เราเลือกมา
export const Mapcard = ({filter}) => {
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
const Cardcontainer = () => {
    return (
        <div className="allcard mt-10">
            <div className="cardcontainer grid  gap-10 grid-cols-1 justify-center w-4/5 md:grid-cols-2">
                <Mapcard filter='ครีนเซอร์' />
                <Mapcard filter='คลีนซิ่ง' />
                <Mapcard filter='เซรั่ม' />
                <Mapcard filter='โทนเนอร์' />
                <Mapcard filter='โลชั่น' />
            </div>
        </div>

    )
}

export default Cardcontainer
