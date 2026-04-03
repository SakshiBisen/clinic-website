import React, { useState } from 'react'
import Swal from "sweetalert2";

const Appointment = ()=>{

    const [formData, setFormData]=useState({
        name: '',
        email:'',
        phone:'',
        doctor:'',
        date:'',
        reason:''
    })

    const [submitted,setSubmitted]=useState(false);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData(prevState=>({
            ...prevState,
            [name]:value
        }));
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setSubmitted(true)

        const formDataObj = new FormData(event.target);
        formDataObj.append("access_key", "8547d72d-0baa-42ac-8483-14c443f81b5a");

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formDataObj
        });

        const data = await response.json();
        if (data.success) {
          Swal.fire({
            title: "Success",
            text: "Appointment Booked Successfully",
            icon: "success"
          })
           event.target.reset();
        } 
    };

    return(
        <section id="booking" className='min-h-screen bg-gray-50 pt-24 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8'>
                
                <h2 className='text-3xl text-gray-800 font-bold text-center mb-8'>
                    Book Appointment
                </h2>

                <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Name */}
                    <input 
                        type="text" 
                        name='name' 
                        placeholder="Full Name"
                        required
                        onChange={handleChange}
                        className='w-full px-3 py-2 border rounded-md'
                    />

                    {/* Email */}
                    <input 
                        type="email" 
                        name='email' 
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        className='w-full px-3 py-2 border rounded-md'
                    />

                    {/* Phone */}
                    <input 
                        type="text" 
                        name='phone' 
                        placeholder="Phone Number"
                        required
                        onChange={handleChange}
                        className='w-full px-3 py-2 border rounded-md'
                    />

                    {/* Doctor */}
                    <input 
                        type="text" 
                        name='doctor' 
                        placeholder="Doctor Name"
                        required
                        onChange={handleChange}
                        className='w-full px-3 py-2 border rounded-md'
                    />

                    {/* Date */}
                    <input 
                        type="date" 
                        name='date' 
                        required
                        onChange={handleChange}
                        className='w-full px-3 py-2 border rounded-md'
                    />

                    {/* Reason */}
                    <textarea 
                        name='reason' 
                        placeholder="Reason for Visit"
                        required
                        onChange={handleChange}
                        className='w-full px-3 py-2 border rounded-md md:col-span-2'
                    />

                    {/* Button */}
                    <button 
                        type="submit"
                        className="w-full md:col-span-2 bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition"
                    >
                         {submitted ? "Submitting..." : "Confirm Appointment"}
                    </button>

                </form>

            </div>
        </section>
    )
}

export default Appointment