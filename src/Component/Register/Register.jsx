import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../../firebases/firebase.init";

const Register = () => {
       const [registerError, setRegisterError] = useState('')
       const [success, setSuccess] = useState('')
       const handle = e => {
              e.preventDefault();
              const email = e.target.email.value;
              const password = e.target.password.value;
              setRegisterError('')
              setSuccess('')

             if(password.length < 6){
              setRegisterError("Password should be at least 6 characters.");
              return;
             }
              createUserWithEmailAndPassword(auth, email, password)
               .then(result =>{
                     console.log(result.user)
                     setRegisterError('email succesfully done')
               })
               .catch(error =>{
                     console.error(error)
                     setRegisterError(error.message)
               })

       }
  return (
    <div className="">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl mb-8">Please Register</h2>
        <form onSubmit={handle}>
          {/* <input
            className="mb-4 w-full py-2 px-4"
            type="text"
            name="name"
            placeholder="Your Name"
            id=""
            required
          />
          <br /> */}
          <input
            className="mb-4 w-full py-2 px-4"
            type="email"
            name="email"
            placeholder="Email Address"
            id=""
            required
          />
          <br />
          <div className="mb-4 relative border flex">
            <input
              className="w-full py-2 px-4"
              name="password"
              placeholder="Password"
              id=""
              required
            />
          </div>
          <span className="">Show</span>

          <br />
          <div className="mb-2">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">
              Accept our <a href="">Terms and Conditions</a>
            </label>
          </div>
          <br />
          <input
            className="btn btn-secondary mb-4 w-full"
            type="submit"
            value="Register"
          />
        </form>
      </div>
      {registerError && <p className="text-red-700">{registerError}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </div>
  );
};

export default Register;
