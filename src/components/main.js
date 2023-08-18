import { useForm } from "react-hook-form";
import React from 'react';
import { useState } from 'react';


function Main({calculateBMI}) {
  const [bmi, setBMI] = useState({})
  

  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    setBMI(calculateBMI(data.height, data.weight));
  }

  console.log(bmi);
  return (
    <main className="flex flex-col items-center justify-center gap-20 my-10 text-secondary">
      <section>
      <form action="" className="flex flex-col gap-10"  onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col sm:grid sm:grid-cols-2 sm:gap-10'>
          {/* <div className="flex flex-col gap-2 py-3 min-w-70">
            <label htmlFor="age">Age</label>
            <input required {...register('age',{
              maxLength:3,
              pattern: /[0-9]/,
              min: 2,
              max: 100,

            })} type="text" id="age" className="h-10 pl-2 rounded-md focus:outline-none"/>
          </div>
          <div className="flex flex-col gap-2 py-3 min-w-70">
            <label htmlFor="gender">Gender</label>
            <select {...register('gender')} name="" id="gender" className="h-10 focus:outline-none">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div> */}
          <div className="flex flex-col gap-2 py-3 min-w-70">
            <label htmlFor="height">Height</label>
            <input required {...register('height', {
              maxLength:3,

            })} type="text" id="height" className="h-10 pl-2 rounded-md focus:outline-none"/>
          </div>
          <div className="flex flex-col gap-2 py-3 min-w-70">
            <label htmlFor="weight">Weight</label>
            <input required {...register('weight', {
              maxLength:3,
              pattern: /[0-9]/,

            })} type="text" id="weight" className="h-10 pl-2 rounded-md focus:outline-none"/>
          </div>
      </div>
          <input type="submit" className="btn-primary" value={'Calculate'}/>
      </form>
      </section>
      
      {bmi.result &&
        <section className="flex items-center justify-center h-24 gap-10 font-bold rounded-xl text-light bg-primary w-60">
        <div>
          <h3>{bmi.result}</h3>
        </div>
        <div>
          <p className={bmi.range === 'Underweight' ? "text-yellow-400" : '' || bmi.range === 'Obese' ? 'text-red-500' : ''}>{bmi.range}</p>
        </div>
        
      </section>}
      
      
    </main>
  );
}

export default Main;