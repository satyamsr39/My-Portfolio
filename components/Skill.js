"use client"
import React from 'react'
import { useState, useEffect } from 'react'

const skills=[
    {name:"Next.js",level:90},
    {name:"React.js",level:80},
    {name:"Node.js",level:75},
    {name:"Express.js",level:75},
    {name:"MongoDB",level:80},
    {name:"Tailwind CSS",level:90}
  ]

const Skill = () => {
  const[loaded,setloaded]=useState(false)

useEffect(()=>{
  setTimeout(() => {
    setloaded(true)
  }, 300);
},[]);

const handlehover=()=>{
  setTimeout(() => {
    setloaded(true)
  }, 300);
}


  return (
<div className="p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto "
onMouseEnter={handlehover}

><h2 className="text-center text-2xl font-bold text-gray-800 mb-6">My Skills</h2>

{skills.map((skill,index)=>(
 <div key={index} className="mb-4">
 <div className="flex justify-between">
   <span className="text-gray-700 font-medium">{skill.name}</span>
   <span className="text-purple-600 font-bold  transition-all duration-700">{loaded && skill.level}%</span>
 </div>
 <div className="w-full bg-gray-300 h-2 rounded-full mt-1"
 >
   <div
     className="h-2 bg-gradient-to-r from-blue-500 to-purple-900   rounded-full transition-all duration-700"
    style={{ width: loaded? `${skill.level}%`: "0%" }}
    
   ></div>
 </div>
</div>
       
      ))}

      
    </div>
  )
}

export default Skill
