import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa';
import { SearchModal } from '../searchModal/SearchModal';
const Search = () => {

    //모달 설정
    const [show, setShow] = useState(false);
    //modal닫기
    const handleClose = () => setShow(false);
    const onClick=()=>{

        toggleTrueFalse()
    }
    const toggleTrueFalse = () => {
        setShow(true);
    }
    return (
        <div>             
                        <input className="btn_text" type="text" placeholder='선수를 검색합니다'/>
                         <FaSearch onClick={onClick}/>
                         {show ? <SearchModal  show={show} handleClose={handleClose} /> : null}
        </div>
    )
}

export default Search