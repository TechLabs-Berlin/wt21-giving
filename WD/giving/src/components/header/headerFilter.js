import React from 'react'
import './headerFilter.css'
import { IoIosArrowBack } from 'react-icons/io'

const headerFilter = () => {
    return (
        <div className='header'>
        <div className='header-container'>
            <div className='icon-back'>
                <IoIosArrowBack size={30}/>
                </div>
                <div className='filter'>
                    <h1>Filter</h1>
                </div>
            </div>
        </div>
    );
}

export default headerFilter;