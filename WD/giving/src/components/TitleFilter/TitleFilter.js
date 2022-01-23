import React from 'react'
import './TitleFilter.css'
import { IoIosArrowBack } from 'react-icons/io'

const Title= () => {
    return (
        <div className='header'>
    <div className='Title'>
            <div className='icon-back'>
                <IoIosArrowBack />
          </div>
          <div className='Title'>
      <h1>Filter</h1>
          </div>
            </div>
            </div>
  )
}

export default Title