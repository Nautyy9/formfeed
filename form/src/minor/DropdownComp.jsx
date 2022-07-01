import React, { useState } from 'react'
import {DropdownMenu, DropdownItem, ButtonDropdown, DropdownToggle } from 'reactstrap'


function DropdownComp() {

  const [open, setOpen] = useState(false);

  // const changeDef= () =>  {

  // }

  return (
    <div className=' ' >
      <ButtonDropdown className=" form-control " toggle={() => {setOpen(!open)}} isOpen={open} >
        <DropdownToggle className='bg-primary' variant='primary' caret>
          Asset Type
        </DropdownToggle>
        <DropdownMenu className="">
          <DropdownItem>Action</DropdownItem>
          <DropdownItem divider/>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem divider/>
          <DropdownItem>Something else here</DropdownItem>
          <DropdownItem divider/>
          <DropdownItem>Another one</DropdownItem>
          <DropdownItem divider/>
          <DropdownItem>Separated link</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
  </div>
  )
}

export default DropdownComp