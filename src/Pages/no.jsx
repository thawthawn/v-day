import React from 'react'
import './no.css'
const no = () => {
  return (
    <div className='bg'>
        <div className="noBorder">
            <h2>Opp! I apologize for asking you</h2>
            <div className="noBox">
                <h2 style={{ fontSize: '80px', marginTop:'30px',height:'50px'}}>😭</h2>
            </div>
            <a href="/"><button className="btn1">Return</button></a>
        </div>
    </div>
  )
}

export default no;