import React from 'react'
import "./Css/AddressCard.css"

function AddressCard(data) {
  return (
    <div className='col-5 AddressBox mb-3 ms-2'>
        <div className='row pt-2 pb-3'>
        <h4 className='col-6 text-secondary'>Address</h4>
        {
            data.isPrimary === 1?(<button className='col-3 btn btn-danger'>Primary</button>) :(<button className='col-4 btn btn-danger'>Set as primary </button>)
        }
        </div>
      <p className='text-secondary'> {data.flatno},{data.street},{data.area},{data.city},{ data.state},{data.pincode},{data.country}</p>
    </div>
  )
}

export default AddressCard
