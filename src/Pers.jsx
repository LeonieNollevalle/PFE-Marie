import React, {useState} from 'react'

const Pers = ({data}) => {
  const [noir, setNoir] = useState(false)
  return (
    <div>
      <div className='info-pers'>
      <p className="id-pers">{data.id}</p>
      <p className="name-pers">{data.name}</p>
      <p onClick={() => setNoir(!noir)} className={noir?'light-pers-on':'light-pers-off'}>☀︎</p>
      </div>
      <img src={noir ? data.image[1] : data.image[0]} alt="pers"/>
    </div>
  )
}

export default Pers