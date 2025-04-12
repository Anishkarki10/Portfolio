import React from 'react'
import cv from "../assets/img/cv.pdf";

export default function Resume() {
  return (
    <div>
      <button type="button" className="btn btn-success ">
        <a className='dark' style={{ textDecoration: 'none', color: 'black'}} href={cv} download='cv'>Download My CV</a>
      </button>
    </div>
  )
}
