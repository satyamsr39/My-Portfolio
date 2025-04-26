"use client"
import React from "react";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaSave } from "react-icons/fa";

const ContactSection = () => {
const[form,setform]=useState({name:"",message:"",email:''})

const handlechange=(e)=>{
  setform({...form,[e.target.name]:e.target.value})
}

const Save=async()=>{
await fetch("http://localhost:3000/",{method:"POST",headers:{"Content-Type":"application/json"}, body:JSON.stringify({name:form.name,email:form.email,message:form.message})
})
}



const handleClick=()=>{
  if(!form.name || !form.email || !form.message){
    alert("Fill all the details!")
   
  }
else{
Save();
alert("saved")

setform({name:"",message:"",email:''})}
}

  return (
   <div className="flex justify-center">
   <div className="bg-white p-6 m-6 rounded-xl shadow:md w-3/4">
    <div className="text-2xl font-bold text-center text-gray-800 m-2">Contact Me</div>
    <div className="flex flex-col  space-y-2 items-center">
<input value={form.name} onChange={handlechange} type='text' name='name' placeholder='Enter your Name' className="border-1 rounded-lg p-2 placeholder:text-gray-950 w-1/2"/>
<input value={form.email} onChange={handlechange} type='text' name='email' placeholder='Enter your email' className="border-1 rounded-lg p-2 placeholder:text-gray-950 w-1/2"/>
<textarea value={form.message} onChange={handlechange} rows="3" name='message' placeholder="Your Messages..." className=" border-1  rounded-lg p-2 placeholder:text-gray-950 w-1/2"/>
<button onClick={handleClick} className="bg-gradient-to-r from-gray-400 to-blue-900 hover:from-purple-900 hover:to-gray-900 cursor-pointer p-4 my-3 py-3 text-xl font-bold rounded-4xl">Submit</button>
</div> </div>
   </div >
  );
};

export default ContactSection;
