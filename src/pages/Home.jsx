import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-cover bg-center h-screen p-10 md:p-20 lg:p-60 flex flex-col justify-center" >
        <h1 className='text-5xl lg:text-6xl w-1/2 lg:w-4/6 mb-20'>TITLE HERE</h1>
        <h3 className='text-2xl lg:text-3xl	mb-5'>Subtitle here</h3>
      </div>
      <Footer />
    </div>
  )
}

export default Home
