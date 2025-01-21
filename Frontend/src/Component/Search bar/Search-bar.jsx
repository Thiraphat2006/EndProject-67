import React, { useState, useEffect } from "react";
import { Link } from "react-router";


const Search = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    // โหลดข้อมูลจากไฟล์ JSON
    useEffect(() => {
        fetch("../../../public/Data/ข้อมูลครืมตุ่งๆ.json")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);

    // อัปเดตข้อมูลที่ค้นหา
    useEffect(() => {
        setFilteredData(
            data.filter((item) =>
                item.ProductNameThai.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.ProductNameEng.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
                item.Type.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
            )
        );
        setFilteredData(data.slice(0, 3))
    }, [searchTerm, data]);



    return (
        <div>

            <input
                className="h-10 w-[425px] rounded-3xl p-5 bg-pink-800 border-none text-center placeholder:text-fuchsia-300"
                type="text"
                placeholder="search . . ."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {searchTerm && (
                <ul>
                    {filteredData.length > 0 ?
                        (filteredData.map((item, index) => (
                            <div className="w-[425px]">
                                <Link to={`/ProductPage/${item.key}`}>
                                    <li className=" bg-pink-400 rounded-xl w-[425px] my-[25px] p-[10px]">
                                        <p key={index}>{item.ProductNameEng}</p>
                                        <p key={index}>{item.ProductNameThai}</p>
                                        <p key={index}>{item.Type}</p>
                                    </li>
                                </Link>
                            </div>

                        ))) : (
                            <li> not found</li>
                        )
                    }
                </ul>
            )}
        </div>
    );
};

export default Search;
