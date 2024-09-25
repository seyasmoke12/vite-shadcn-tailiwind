
import { Input } from '@/components/ui/input'
// import { ButtonIcon } from '@radix-ui/react-icons'
import React from 'react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from '@/components/ui/button'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

function Registration() {
    const navigate = useNavigate()
      function succ() {
        alert(`Congratulations on your successful registration!`)
        navigate("/")
      }
  return (
    <div className='min-h-full py-20 bg-zinc-950'>
        <div className="container mx-auto">
            <div className=" flex w-10/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden ">
                <div className='hidden lg:block flex-col justify-center p-12 items-center w-1/2 bg-[url("/logo.jpg")] bg-no-repeat bg-cover bg-center'>
                    <h1 className='text-black text-3xl mb-3 mt-36 place-content-center flex font-semibold bg-white border border-gray-300 p-3 rounded-lg shadow-md animate-borderAnimation'>Welcome</h1>
                    <div>
                        <p className='text-gray-700 font-medium'>In Qemer Tech campany, where we transform passionate individuals into tech professionals ready to tackle the industry’s challenges. Our mission is to provide high-quality, immersive education that equips you with the skills and confidence to excel in your tech career.</p>
                    </div> 
                </div>
                <div className='w-full lg:w-1/2 py-16 px-12'>
                    <div className='flex justify-between'>
                    <h2 className='text-3xl font-semibold'>Register</h2>
                    <Link to="/">
                    <IoMdArrowRoundBack className='mr-5' size={30} />
                    </Link>
                    
                    </div>
                    <p className='mb-4 text-1xl font-sm mt-3'>please provide the required infrormation</p>
                    <Form >
                        <form onSubmit={succ}>
                        <div className='grid grid-cols-2 gap-5'>
                            <Input id="Name" type="name" placeholder="First Name" required />
                            <Input id="Last name" type="name" placeholder="Last Name" />
                        </div>
                        <div className='mt-5 "w-full"'>
                            <Input id="phone" type="phone" placeholder="phone Number" required/>
                        </div>
                        <div className='mt-5 '>
                            <Input id="email" type="email" placeholder="m@example.com" required/>
                        </div>
                        <div className='mt-5 '>
                            <Input id="password" type="password" placeholder="password" required/>
                        </div>
                        <div className='mt-5'>
                            <Input id="coniferm" type="coniferm" placeholder="coniferm password" required/>
                        </div>
                        <div className='flex items-center place-content-center mt-4 px-9'>
                        <Button  type="submit" value="Register">Register Now</Button>
                        </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Registration