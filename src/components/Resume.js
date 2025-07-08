import React from 'react'
import cv from "../assets/img/cv.pdf";
import docs from "../assets/img/docs.svg"

export default function Resume() {
  return (
    <div>
      <button type="button" className="btn btn-success ">
        <a className='dark' style={{ textDecoration: 'none', color: 'black'}} href={cv} download='cv'> <img  src={docs}  
        style={{
          width: '30px',
          height: '30px', 
          objectFit: 'contain', 
          borderRadius: '2px',  
          marginRight: '2px',   
        }}
        alt="CV" /> Download My CV</a>
      </button>
    </div>
  )
}
