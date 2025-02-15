import React from 'react'
import './pg1.css'
const pg1 = () => {
  return (
    <div className='bg'>
        <div className="border">
            <h2>I Want to ask you some questions.</h2>
            <div className="box">
                <h2>Can I? 🙄</h2>
                <a href="/pg2"><button className="btn1">Yes</button></a>
                <a href="/no"><button className="btn2">No</button></a>
            </div>
        </div>
    </div>
  )
}

export default pg1;