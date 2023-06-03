import React from 'react'
import "./Css/AddressCard.css"

function AddressCard(data) {
  return (
    <div className='col-sm-5 col-12 AddressBox mb-3 ms-2'>
        <div className='row pt-2 pb-3'>
        <h4 className='col-4 col-sm-2 text-secondary'>Address</h4>
        {
            data.isPrimary === 2?(<button className='col-sm-3 col-4 col-lg-4 btn btn-danger ms-5 AddressBoxbtn'>Primary</button>) :(<button className='col-5 col-sm-6 col-lg-4 btn btn-danger ms-5 AddressBoxbtn'>Set as primary </button>)
        }
        </div>
      <p className='text-secondary'> {data.flatno},{data.street},{data.area},{data.city},{ data.state},{data.pincode},{data.country}</p>
    </div>
  )
}

export default AddressCard
