import React from 'react'
import { servicesData } from '../data'

function Services() {
  return (
    <section id='services' className="mySection">
        <h1 className="title">مجالات الخدمة</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {servicesData.map((service) => {
            return (
              <div key={service.id} className='cursor-pointer rounded-md overflow-hidden border relative serviceBox'> 
               <img src={service.img} alt={service.name} className='h-full w-full object-cover' />
               <div className=" absolute left-0 right-0 -bottom-full bg-[#f8d6c9] opacity-0 z-10 py-4 flex flex-col items-center gap-2 transition-all duration-300 ">
                <h3 className='font-semibold text-2xl text-primary'> {service.id} </h3>
                <p className=''> {service.name} </p>
               </div>
               </div>  
            )
          })}
        </div>
    </section>
  )
}

export default Services