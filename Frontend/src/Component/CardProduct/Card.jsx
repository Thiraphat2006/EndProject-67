import React , {useState}from 'react'
import './card.css'
import { Link } from 'react-router'
import DataProduct from '../../../public/Data/ข้อมูลครืมตุ่งๆ.json'
import Typemenu from '../typemenu/Type-menu'
// card ที่ใช้ในหน้า product
const Card = ({ KEY, Image, ProductNameEng, Brand, }) => {

    //ถ้าเป็น localhost ก็ไม่มีไร ถ้าไม่ก็ก็ลบ../หน้าที่อยู่ไฟล์แค่นั้น
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
            <Link to={`/ProductPage/${KEY}`} target="_blank">
                <div className="card h-[450px] md:h-[270px] w-full flex justify-center md:w-[340px] md:flex md:items-center lg:w-[400px] xl:w-[550px] xl:h-[340px] xl:justify-start">
                    <div className="card-con flex flex-col justify-center items-center  md:flex-row  ">
                        <div className="img w-64 h-auto mb-3 md:w-[150px] md:h-52 md:ml-5 lg:w-[200px] xl:w-[250px] xl:h-72">
                            <img src={imagePath} alt="Image Error" className='pt-1 w-auto h-[200px] md:w-auto md:h-40 xl:h-52' />
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
export const Cardcontainer = ({ fill, type }) => {
    return (
        <>
            <h1 className="text-4xl font-bold ml-10 mt-6  ">
                ประเภท {type}
            </h1>
            <div className="allcard mt-10 h-auto">
                <div className="cardcontainer grid  gap-10 grid-cols-1 justify-center w-11/12 md:w-11/12 md:grid-cols-2 lg:w-full">
                    <Mapcard filter={fill} />

                </div>
            </div>
            <hr className='m-20 ' />
        </>

    )
}


// export const Titlefortypefocard = () => {
    

//     return (
//         <div className="allin mt-5 sm:mb-32 md:mb-16 md:mt-10 flex-1  ">
//             <Cardcontainer fill='คลีนซิ่ง' type='คลีนซิ่ง' />
//             <Cardcontainer fill='ครีนเซอร์' type='ครีนเซอร์' />
//             <Cardcontainer fill='โทนเนอร์' type='โทนเนอร์' />
//             <Cardcontainer fill='เซรั่ม' type='เซรั่ม' />
//             <Cardcontainer fill='โลชั่น' type='โลชั่น' />
//         </div>
//     )

// }

const card_menutype = () => {
    const [selectedTypes, setSelectedTypes] = useState({
        
  
    });

  // 📌 ฟังก์ชันที่ส่งไปให้ `Typemenu` เพื่อรับค่า checkbox
  const handleToggle = (type, isChecked) => {
    setSelectedTypes((prev) => ({
      ...prev,
      [type]: isChecked, // 📌 อัปเดตค่าของ checkbox ที่ถูกเลือก
    }));
  };

  return (
    <div className="flex ml-10 gap-[50px]">
      {/* ส่ง state และฟังก์ชันไปให้ Typemenu */}
      <Typemenu onToggle={handleToggle} />

      <div className="allin mt-5 sm:mb-32 md:mb-16 md:mt-10">
        {/* แสดงเฉพาะประเภทที่ถูกเลือก */}
        {Object.keys(selectedTypes)
          .filter((type) => selectedTypes[type])
          .map((type) => (
            <Cardcontainer key={type} fill={type} type={type} />
          ))}
      </div>
    </div>
  );
};


export default card_menutype