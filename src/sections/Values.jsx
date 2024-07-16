import React from 'react'
import { valuesData } from '../data'

function Values() {
  return (
    <section id='values' className='mySection'>
        <h1 className="title">
            القيم
        </h1>
        <div className="grid lg:grid-cols-2 gap-16">
            {valuesData.map((value , index) => {
                return (
                    <div key={index} className="flex items-center lg:items-start gap-8  hover:shadow-md duration-300 transition-all py-4">
                        <img src={value.img} alt={value.name} className="h-12 w-12 lg:mt-2 " />
                        <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-primary ">{value.name}</h2>
                        <p  className=" text-secondary leading-loose">{value.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Values