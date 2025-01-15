import './card.css'
// card ที่ใช้ในหน้า product
const Card = ({ img, title, Type, ID }) => {
    return (
        <>
            <div className="card ">
                <div className="card-con grid grid-cols-2 gap-4">
                    <div className="img bg-gray-950 h-auto">
                        <img src={img} alt="ImageError" />
                    </div>
                    <div className="text">
                        <span>{title}</span>
                        <div className="type flex">
                            <span>{Type}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
//ข้อมูลปลอมๆ ที่ใช้ในการทดสอบ
const test = [
    { id: 1, title: "Garnier Bright Complete Vitamin C Face Wash Scrub", Type: "WHAT" },
    { id: 2, title: "Garnier Turbo Bright Super Duo Foam" }
]
//เก็บรวม card ทั้งหมด (เดี๋ยวต่อฐานข้อมูลมา)
const Cardcontainer = () => {
    return (
        <div className="allcard mt-10">
            <div className="cardcontainer grid  gap-10 grid-cols-1 justify-center w-4/5 md:grid-cols-2">
                {test.map((data) => (
                    <Card {...data} key={data.id} />
                ))}
            </div>
        </div>

    )
}

export default Cardcontainer
