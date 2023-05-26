import React from 'react'
import loading from "./loading.gif"
//import { render } from '@testing-library/react'
const Spinner =()=> {
    return (
      <div className='text-center' >
        <img src={loading} alt="loading" style={{width:"60px"}}/>
      </div>
    )
  
}

export default Spinner