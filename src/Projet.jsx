import React from 'react'
import './App.css';

const Projet = ({open , source, setOpen, setSource}) => {
  return (
    <div className={open ? "projet" : "hidden"}>
      {source.video ?<video playsinline="true" autoplay="true"  className="video">
        <source src={source.video} width="100%"  type="video/mp4"/>
      </video> : ""}
      <p className="cross" onClick={()=>setOpen(!open)&setSource(true)}>✕</p>
      <p className="name" >{source.name}</p>

    </div>
  )
}

export default Projet