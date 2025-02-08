import React from 'react'
import './Type-menu.css'

export const Typemenu = ({ onToggle }) => {

  const handleChange = (event) => {
    const { value, checked } = event.target;
    onToggle(value, checked);
  }

  return (
    <div className='type-bar hidden xl:inline'>
      <ul>
        <li>คลีนซิ่ง
          <label>
            <input type="checkbox" id="cleaning" value="คลีนซิ่ง" onChange={handleChange}  />
            <span className='custom-checkbox'></span>
          </label>
        </li>
        <li>ครีนเซอร์
          <label>
            <input type="checkbox" id="cleanser" value="ครีนเซอร์" onChange={handleChange} />
            <span className='custom-checkbox'></span>
          </label>
        </li>
        <li>โทนเนอร์
          <label>
            <input type="checkbox" id="Toner" value="โทนเนอร์" onChange={handleChange} />
            <span className='custom-checkbox'></span>
          </label>
        </li>
        <li>เซรั่ม
          <label>
            <input type="checkbox" id="serum" value="เซรั่ม" onChange={handleChange} />
            <span className='custom-checkbox'></span>
          </label>
        </li>
        <li>โลชั่น
          <label>
            <input type="checkbox" id="Lotion" value="โลชั่น" onChange={handleChange} />
            <span className='custom-checkbox'></span>
          </label>
        </li>
      </ul>
      {/* <input type="button" value="cilck" onClick={test} /> */}
    </div>
  )
}

export default Typemenu
