import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebases/firebase.init';
import { Result } from 'postcss';

const Hero = () => {
       const [heroError, setheroError] = useState('')
       const [succes, setSuccess] = useState('')
       const handle = e =>{
             e.preventDefault();
       //       console.log('jjjjjj')
             const email = e.target.email.value;
             const password = e.target.password.value;
             const accepted = e.target.terms.checked;
             setSuccess('')
             setheroError('')


             if(password.length < 8){
              setheroError("Password should be at least 6 characters");
             }
             else if(!accepted){
              setheroError('please terms fill up')
              return;
             }



       createUserWithEmailAndPassword(auth, email, password)
       .then(Result=>{
              console.log(Result.user)
              setSuccess('succesfully done')
              return;
       })
       .catch(error=>{
              console.log(error)
              setheroError(error.message)
       })

       
       } 
       return (
         <div>
           <div className="hero min-h-screen bg-base-200">
             <div className="hero-content flex-col lg:flex-row-reverse">
               <div className="text-center lg:text-left">
                 <h1 className="text-5xl font-bold">Register now!</h1>
                 <p className="py-6">
                   Provident cupiditate voluptatem et in. Quaerat fugiat ut
                   assumenda excepturi exercitationem quasi. In deleniti eaque
                   aut repudiandae et a id nisi.
                 </p>
               </div>
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                 <div className="card-body">
                   <form onSubmit={handle}>
                     <div className="form-control">
                       <label className="label">
                         <span className="label-text">Email</span>
                       </label>
                       <input
                         type="text"
                         placeholder="email"
                         name="email"
                         className="input input-bordered"
                       />
                     </div>
                     <div className="form-control">
                       <label className="label">
                         <span className="label-text">Password</span>
                       </label>
                       <input
                         type="text"
                         placeholder="password"
                         name="password"
                         className="input input-bordered"
                       />

                       <div className="mt-2">
                         <input type="checkbox" name="terms" id="terms" />
                         <label className="ml-2" htmlFor="terms">
                           Accept our <a href="">Terms and Conditions</a>
                         </label>
                       </div>

                     </div>
                     <div className="form-control mt-6">
                       <button className="btn btn-primary">Login</button>
                     </div>
                   </form>
                 </div>
                 {heroError && <p className="text-red-600">{heroError}</p>}
                 {succes && <p className="text-green-400">{succes}</p>}
               </div>
             </div>
           </div>
         </div>
       );
};

export default Hero;