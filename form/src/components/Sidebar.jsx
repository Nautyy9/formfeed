import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <div className=" col-sm-3 p-10 sidebar">
      <div className="row m-4 p-3 ">
        <Link to='/add' style={{color: "white"}} className='text-decoration-none '>Add </Link>
      </div>
      <div className="row m-4 p-3">
        <Link to='/view' className='text-decoration-none' style={{color: "white"}}>View</Link>
      </div>
      </div>
  )
}

export default Sidebar