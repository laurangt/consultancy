import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='bottom-0 relative w-screen flex h-20 mt-auto bg-black text-white'>
      <div className='flex items-center m-auto pb-5 sm:pb-0 text-2xl'>
        <p>FOOTER HERE</p>
        <a target="_blank" rel="noreferrer" href='www.google.com'><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </div>
  )
}

export default Footer
