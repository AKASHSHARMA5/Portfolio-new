import React from 'react'

export default function Hamburg(props) {
  return (
    <div>
      <div className="hamburger">
                <img onClick={props.handleupclick} className='ham' src={props.hamburimg} alt={props.hamaltimg} style={{width: 23}}/>
                <img id='crossimg' onClick={props.handleupclick1} className='cross' src={props.cross_sign} alt={props.crossaltimg} style={{width: 23}}/>
            </div>
    </div>
  )
}
