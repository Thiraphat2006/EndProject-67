import './card.css'
const Card = ({ img, title }) => {
    return (
        <>
            <div className="card">
                <div className="card-con">
                    <div className="img">
                        <img src={img} alt="ไม่มีรูปจร้า" />
                    </div>
                    <div className="text">
                        <span>{title}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

const test = [
    { id: 1, title: "low" },
    { id: 2, title: "lowqdwafdw" },
    { id: 3, title: "lowqfwadwdw" },
    { id: 4, title: "lowqadawfdw" },
    { id: 5, title: "lowqfdwaddw" },
    { id: 6, title: "lowqwadfdw" }
]

const Cardcontainer = () => {
    return (
        <div className="allcard">
            <div className="cardcontainer">
                {test.map((data) => (
                    <Card {...data} />
                ))}
            </div>
        </div>

    )
}

export default Cardcontainer
