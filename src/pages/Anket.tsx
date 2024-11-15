import React from 'react'
import ButtonList from '../component/molecules/ButtonList'

function Anket() {
  return (
    <div className="container mt-3 border p-2 rounded">
        <div className="row mt-3 ">
            <label className='form-element'>Sahip olduğunuz yazılım bilgileri(max 7 özellik seçiniz)</label>
            <hr />
        </div>
        <div className="row mt-3 ">
           <ButtonList />
        </div>
    </div>
  )
}

export default Anket