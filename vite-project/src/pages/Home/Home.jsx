import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        <div className="containers min-h-screen bg-[url('https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?t=st=1727305133~exp=1727308733~hmac=71f585b93b41c6f98127ac0aaf0168cf2d6f47f1ff8e0374c26339fffda2786e&w=740')] bg-cover bg-center">
          <header className='items-center'>
          <nav className='flex justify-between lg:mx-10 py-5 lg:px-14 items-center'>
            <Link to="/" className='text-white text-2xl font-semibold flex items-center gap-3 hover:text-blue-300'>
              <img className='ml-4 w-10 rounded-full ' src="/logo.jpg" alt="" 
              />
              Qemer tech
              </Link>
              <ul>
                <Link to="/" className='text-white font-semibold mr-5 hover:text-blue-300 hidden md:block'><li>Home</li></Link>
              </ul>
          </nav>
          </header>
          <section className="mt-20">
              <div className='mx-4 md:mx-16 lg:mt-52 lg:mx-56'>
            <h3 className='text-white text-xl md:text-2xl lg:text-3xl font-semibold py-9'>
            Let’s elevate your skills and shape the future together
            </h3>
            <p className='text-white text-md md:text-base lg:text-lg'>
            Unlock the power of full-stack development, captivating graphic design, and strategic digital marketing. Elevate your brand and skills in the fast-paced digital world
            </p>
            <div className='mt-9'>
              <Link to="/cards">
              <Button>Get into Tech</Button>
              </Link>
                
              </div>
              </div>
          </section>
        </div>
        </>
  )
}


export default Home