import React from 'react'
import cv from "../assets/img/cv.pdf";


export default function Resume() {
  return (
    <div>
      <button type="button" className="btn btn-success ">
        <a className='dark' style={{ textDecoration: 'none', color: 'black'}} href={cv} download='cv'> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
  <path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path>
</svg> Download My CV</a>
      </button>
    </div>
  )
}
